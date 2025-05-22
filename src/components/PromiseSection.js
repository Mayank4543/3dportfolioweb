"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

// 3D Sphere Component
const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 32, 32]}>
      <meshStandardMaterial
        color="#fbbf24"
        emissive="#f59e0b"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  );
};

export default function PromiseSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Text animations
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  // 3D container animations
  const containerScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const containerRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="text-white font-sans space-y-8"
        >
          <motion.h1
            className="text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            A promise to shake
            <br />
            <motion.span
              className="text-amber-400"
              animate={{
                color: ["#fbbf24", "#f59e0b", "#fbbf24"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              things up
            </motion.span>
          </motion.h1>

          <motion.div
            className="space-y-6 text-xl text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              We greet every project as an opportunity to challenge thinking,
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              change your perspective,
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-amber-300"
            >
              and generate excitement.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Animation */}
        <motion.div
          style={{
            scale: containerScale,
            rotateY: containerRotate,
          }}
          className="relative w-full h-[500px]"
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight
              position={[0, 5, 5]}
              angle={0.3}
              penumbra={1}
              intensity={2}
              castShadow
            />

            <AnimatedSphere />

            {/* Floating particles */}
            {[...Array(100)].map((_, i) => {
              const position = [
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
              ];

              return (
                <mesh key={i} position={position}>
                  <sphereGeometry args={[0.05, 16, 16]} />
                  <meshStandardMaterial
                    color={i % 2 === 0 ? "#3b82f6" : "#f59e0b"}
                    emissive={i % 2 === 0 ? "#2563eb" : "#d97706"}
                    emissiveIntensity={0.3}
                  />
                </mesh>
              );
            })}

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
