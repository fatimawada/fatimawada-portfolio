"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AntiGravityCore() {
  const groupRef = useRef<THREE.Group>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerNodeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Harmonic zero-gravity floating oscillation
    groupRef.current.position.y = 1.0 + Math.sin(time * 0.75) * 0.15;
    
    // Smooth lerp rotation toward cursor
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      time * 0.12 + mouseX * 0.45,
      delta * 2.2
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      Math.sin(time * 0.5) * 0.08 - mouseY * 0.25,
      delta * 2.2
    );

    // Counter-rotations on inner nodes and orbital rings
    if (innerNodeRef.current) {
      innerNodeRef.current.rotation.y = -time * 0.25;
      innerNodeRef.current.rotation.z = time * 0.18;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[2.8, 1.0, -1.2]}>
      {/* Outer Faceted Smoked Glass Crystalline Shell */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshPhysicalMaterial
          color="#14141A"
          transmission={0.75}
          roughness={0.14}
          thickness={1.2}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Razor-sharp Specular Platinum Wireframe Edges */}
      <mesh>
        <icosahedronGeometry args={[1.355, 0]} />
        <meshBasicMaterial
          color="#F4F4F5"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Inner Platinum Suspended Geometric Node */}
      <mesh ref={innerNodeRef}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#E4E4E7"
          roughness={0.2}
          metalness={0.9}
          emissive="#71717A"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner Wireframe Cage */}
      <mesh>
        <dodecahedronGeometry args={[0.78, 0]} />
        <meshBasicMaterial
          color="#D4D4D8"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Orbital Ring 1 (Tilted Axis) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.9, 0.01, 16, 64]} />
        <meshStandardMaterial
          color="#10B981"
          metalness={0.9}
          roughness={0.1}
          emissive="#34D399"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Orbital Ring 2 (Polar Incline) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.15, 0.008, 16, 64]} />
        <meshStandardMaterial
          color="#A1A1AA"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Peripheral Coordinates Orbiting Nodes */}
      {[
        [1.8, 0.7, 0],
        [-1.8, -0.7, 0],
        [0, 1.9, 0.5],
        [0, -1.9, -0.5],
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#F4F4F5" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshBasicMaterial color="#34D399" wireframe transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
