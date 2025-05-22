"use client";
import React from "react";

function Laptop() {
  return (
    <group position={[0, 0.5, 0]}>
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1, 0.1, 0.8]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, 0.45, -0.4]} rotation={[Math.PI / 2.5, 0, 0]}>
        <boxGeometry args={[1, 0.01, 0.6]} />
        <meshStandardMaterial color="#1f1f1f" />
      </mesh>
    </group>
  );
}

function Girl() {
  return (
    <group>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
        <meshStandardMaterial color="pink" />
      </mesh>
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ffdab9" />
      </mesh>

      <mesh position={[0.45, 1.3, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#ffdab9" />
      </mesh>
      <mesh position={[-0.45, 1.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#ffdab9" />
      </mesh>

      <mesh position={[0.15, 0.5, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-0.15, 0.5, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
}

export default function Model() {
  return (
    <group position={[0, -1, 0]}>
      <Girl />
      <Laptop />
    </group>
  );
}
