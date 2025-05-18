"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CircuitBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Camera position
    camera.position.z = 30;
    // Create circuit pattern
    const points = [];
    const numPoints = 250; // Increased number of circuit points
    const circuitSize = 120; // Size of the circuit area

    // Define a grid for more organized circuit layout
    const gridSize = 10; // Size of each grid cell
    const gridDimension = Math.ceil(circuitSize / gridSize);
    const grid = [];

    // Initialize grid
    for (let i = 0; i < gridDimension; i++) {
      grid[i] = [];
      for (let j = 0; j < gridDimension; j++) {
        grid[i][j] = Math.random() > 0.7; // 70% chance of a circuit node in each cell
      }
    }

    // Generate grid-aligned circuit points with some randomness
    for (let i = 0; i < gridDimension; i++) {
      for (let j = 0; j < gridDimension; j++) {
        if (grid[i][j]) {
          const baseX = (i - gridDimension / 2) * gridSize;
          const baseY = (j - gridDimension / 2) * gridSize;

          // Add some randomness within the grid cell
          const x = baseX + (Math.random() - 0.5) * gridSize * 0.8;
          const y = baseY + (Math.random() - 0.5) * gridSize * 0.8;
          const z = (Math.random() - 0.5) * 30; // Varied depth

          points.push(new THREE.Vector3(x, y, z));
        }
      }
    }

    // Add some completely random points for organic feel
    for (let i = 0; i < numPoints / 3; i++) {
      const x = (Math.random() - 0.5) * circuitSize;
      const y = (Math.random() - 0.5) * circuitSize;
      const z = (Math.random() - 0.5) * 20;
      points.push(new THREE.Vector3(x, y, z));
    }
    // Create lines connecting points to form circuit-like pattern
    const lineSegments = [];
    const nodeObjects = [];
    const circuitJunctions = [];

    // Different node types for visual variety
    const nodeSizes = [0.15, 0.2, 0.25, 0.35];
    const nodeGeometries = nodeSizes.map(
      (size) => new THREE.SphereGeometry(size, 8, 8)
    );

    // Special junction geometry (circuit board connector look)
    const junctionGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.2);

    // Create distinct colors with a blue/purple tech theme
    const colors = [
      new THREE.Color("#3b82f6"), // blue-500
      new THREE.Color("#6366f1"), // indigo-500
      new THREE.Color("#8b5cf6"), // violet-500
      new THREE.Color("#4f46e5"), // indigo-600
      new THREE.Color("#2563eb"), // blue-600
      new THREE.Color("#7c3aed"), // violet-600
    ];
    // Create circuit junctions at strategic points (fewer than nodes)
    for (let i = 0; i < points.length; i += 8) {
      // Only place junctions every 8 points
      if (Math.random() > 0.7) {
        // Only 30% chance to create a junction
        const junctionMaterial = new THREE.MeshBasicMaterial({
          color: 0x1a1a1a, // Dark color for circuit board look
          transparent: true,
          opacity: 0.9,
        });

        const junction = new THREE.Mesh(junctionGeometry, junctionMaterial);
        junction.position.copy(points[i]);
        junction.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        circuitJunctions.push(junction);
        scene.add(junction);
      }
    }

    // Create nodes and connections
    for (let i = 0; i < points.length; i++) {
      // Determine node type (size variation)
      const nodeTypeIndex = Math.floor(Math.random() * nodeGeometries.length);
      const nodeGeometry = nodeGeometries[nodeTypeIndex];

      // Select a color with some bias toward blue
      const colorIndex =
        Math.random() > 0.6
          ? 0 // 60% chance of blue
          : Math.floor(Math.random() * colors.length);

      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: colors[colorIndex],
        transparent: true,
        opacity: 0.7 + Math.random() * 0.3,
      });

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(points[i]);
      node.userData = {
        originalColor: colors[colorIndex].clone(),
        pulseSpeed: 0.5 + Math.random() * 1.5,
        pulseOffset: Math.random() * Math.PI * 2,
        type: nodeTypeIndex,
      };

      nodeObjects.push(node);
      scene.add(node);

      // Find connection points with smarter routing
      const connectedPoints = findClosestPoints(
        points,
        i,
        Math.floor(Math.random() * 3) + 1
      );

      // Create circuit connections with more realistic routing (90-degree bends)
      for (let j = 0; j < connectedPoints.length; j++) {
        const startPoint = points[i];
        const endPoint = points[connectedPoints[j]];
        const linePoints = [];

        // Calculate route with intermediate points for circuit-like routing
        if (Math.random() > 0.3) {
          // 70% chance of having a bend
          const midPoint = new THREE.Vector3(
            startPoint.x,
            endPoint.y,
            (startPoint.z + endPoint.z) / 2
          );

          linePoints.push(startPoint);
          linePoints.push(midPoint);
          linePoints.push(endPoint);
        } else {
          linePoints.push(startPoint);
          linePoints.push(endPoint);
        }

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(
          linePoints
        );
        const lineMaterial = new THREE.LineBasicMaterial({
          color: colors[colorIndex],
          transparent: true,
          opacity: 0.4 + Math.random() * 0.3,
        });

        const line = new THREE.Line(lineGeometry, lineMaterial);
        lineSegments.push({
          line,
          startIndex: i,
          endIndex: connectedPoints[j],
          pulseOffset: Math.random() * 2 * Math.PI,
          speed: 0.005 + Math.random() * 0.01,
          originalColor: colors[colorIndex].clone(),
          isActive: Math.random() > 0.5, // Some lines start active for data flow animation
        });

        scene.add(line);
      }
    }

    // Function to find closest points
    function findClosestPoints(points, currentIndex, numConnections) {
      const distances = [];

      for (let i = 0; i < points.length; i++) {
        if (i === currentIndex) continue;

        const distance = points[currentIndex].distanceTo(points[i]);
        distances.push({ index: i, distance });
      }

      // Sort by distance
      distances.sort((a, b) => a.distance - b.distance);

      // Return indices of closest points (limited to a reasonable distance)
      return distances
        .filter((d) => d.distance < 30) // Only connect if not too far
        .slice(0, numConnections)
        .map((d) => d.index);
    }

    // Animation - pulsing effect on circuit lines
    const animate = () => {
      const time = Date.now() * 0.001;

      // Animate each line segment
      lineSegments.forEach((segment, index) => {
        // Pulse animation for opacity
        const pulse = Math.sin(time * segment.speed + segment.pulseOffset);
        segment.line.material.opacity = 0.2 + Math.abs(pulse) * 0.4;

        // Occasional color change for visual interest
        if (Math.random() < 0.001) {
          segment.line.material.color =
            colors[Math.floor(Math.random() * colors.length)];
        }
      });

      // Subtly animate nodes
      nodeObjects.forEach((node, index) => {
        node.scale.setScalar(0.8 + Math.sin(time * 0.5 + index) * 0.2);

        // Occasional color shift
        if (Math.random() < 0.001) {
          node.material.color =
            colors[Math.floor(Math.random() * colors.length)];
        }
      });

      // Rotate entire scene very slowly
      scene.rotation.x = Math.sin(time * 0.05) * 0.05;
      scene.rotation.y = Math.sin(time * 0.03) * 0.05;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Dispose resources
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="circuit-background fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ position: "fixed", zIndex: -1 }}
    />
  );
};

export default CircuitBackground;
