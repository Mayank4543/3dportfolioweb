"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Stars,
  Text,
  Html,
  OrbitControls,
  Trail,
  useTexture,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// Custom shader for planet glow
const glowFragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    gl_FragColor = vec4(0.7, 0.6, 1.0, 1.0) * intensity;
  }
`;

const glowVertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Custom star field with twinkling
const TwinklingStars = () => {
  const count = 6000;
  const [positions, sizes, phases] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      sizes[i] = Math.random() * 2;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return [positions, sizes, phases];
  }, []);

  const points = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array;
    const sizes = points.current.geometry.attributes.size.array;

    for (let i = 0; i < count; i++) {
      sizes[i] = Math.max(0.1, Math.sin(time + phases[i]) * 2);
    }
    points.current.geometry.attributes.size.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1}
        color="#ffffff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

const Planet = ({ name, level, orbitRadius, speed, size, color }) => {
  const ref = useRef();
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(Math.random() * Math.PI * 2);

  // Create glow material
  const glowMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: glowVertexShader,
      fragmentShader: glowFragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
  }, []);

  useFrame((state, delta) => {
    // Update orbit position
    setAngle((prev) => prev + speed * delta);
    if (ref.current) {
      ref.current.position.x = Math.cos(angle) * orbitRadius;
      ref.current.position.z = Math.sin(angle) * orbitRadius;
    }
    // Rotate planet
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.5;
    }
  });

  const planetPos = useMemo(() => new THREE.Vector3(), []);

  return (
    <group ref={ref}>
      {/* Orbit ring with gradient */}
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[orbitRadius - 0.1, orbitRadius + 0.1, 128]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Planet with trail */}
      <Trail
        width={1}
        length={4}
        color={new THREE.Color(color)}
        attenuation={(t) => t * t}
      >
        <mesh
          ref={sphereRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Trail>

      {/* Glow effect */}
      <mesh scale={[size * 1.2, size * 1.2, size * 1.2]}>
        <sphereGeometry args={[1, 16, 16]} />
        <shaderMaterial
          attach="material"
          {...glowMaterial}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Skill info on hover with improved styling */}
      {hovered && (
        <Html center>
          <div className="bg-black/70 text-white px-4 py-3 rounded-xl min-w-[140px] text-center backdrop-blur-md border border-white/20 shadow-lg transform scale-110 transition-all duration-200">
            <div className="text-sm font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {name}
            </div>
            <div className="text-xs">
              <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                  style={{ width: `${level}%` }}
                />
              </div>
              Level: {level}%
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

const Sun = () => {
  const sunRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.04);
    }
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#ffa726"
          emissive="#ff7043"
          emissiveIntensity={2}
          metalness={0.3}
          roughness={0.7}
        />
        <pointLight color="#ffa726" intensity={2} distance={50} decay={2} />
      </mesh>

      {/* Sun glow */}
      <mesh ref={glowRef} scale={[2.4, 2.4, 2.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#ff9800"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Developer text with enhanced styling */}
      <Html center position={[0, 3, 0]}>
        <div className="text-center transform scale-[1.5]">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 animate-pulse">
            Developer
          </h2>
          <div className="text-xs text-yellow-200 opacity-75 mt-1">
            Hover over planets to explore skills
          </div>
        </div>
      </Html>
    </group>
  );
};

const SkillSolarSystem = ({ skills }) => {
  // Group skills by category and calculate orbit radii
  const groupedSkills = useMemo(() => {
    const categories = {};
    skills.forEach((skill) => {
      const category = skill.category || "Other";
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(skill);
    });
    return categories;
  }, [skills]);

  // Calculate orbit radii with better spacing
  const getOrbitRadius = (level, categoryIndex, totalCategories) => {
    const baseRadius = 8 + categoryIndex * 6; // Space categories apart
    const levelAdjustment = (level / 100) * 2; // Subtle adjustment based on level
    return baseRadius - levelAdjustment;
  };

  return (
    <div className="h-[600px] w-full relative">
      <Canvas camera={{ position: [0, 25, 35], fov: 60 }}>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 30, 100]} />
        <ambientLight intensity={0.1} />
        {/* Custom twinkling stars */}
        <TwinklingStars />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxDistance={50}
          minDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />{" "}
        {/* Sun at the center */}
        <Sun />
        {/* Skill planets grouped by category */}
        {Object.entries(groupedSkills).map(
          ([category, categorySkills], categoryIndex) =>
            categorySkills.map((skill, index) => (
              <Planet
                key={skill.name}
                name={skill.name}
                level={skill.level}
                orbitRadius={getOrbitRadius(
                  skill.level,
                  categoryIndex,
                  Object.keys(groupedSkills).length
                )}
                speed={0.15 - categoryIndex * 0.03} // Outer categories move slower
                size={0.8 + (skill.level / 100) * 0.8} // Size based on skill level
                color={
                  skill.color ||
                  `hsl(${(categoryIndex * 60 + index * 20) % 360}, 70%, 60%)`
                }
              />
            ))
        )}
        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
          />
          <Vignette opacity={0.5} darkness={0.5} />
        </EffectComposer>
      </Canvas>

      {/* Category legend overlay */}
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md p-4 rounded-lg">
        <div className="text-sm font-semibold text-white mb-2">
          Skill Categories
        </div>
        {Object.keys(groupedSkills).map((category, index) => (
          <div
            key={category}
            className="flex items-center text-xs text-white/80 mb-1"
          >
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: `hsl(${index * 60}, 70%, 60%)` }}
            />
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSolarSystem;
