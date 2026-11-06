"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Pure deterministic pseudo-random coordinate generator for React 19 compliance
function getDeterministicCoordinate(index: number, offset: number) {
  const seed = (index + 1) * 1337.42 + offset * 9283.17;
  const val = Math.sin(seed) * 10000;
  return (val - Math.floor(val) - 0.5) * 18;
}

export function ParticleField({ count = 220 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Initialize particle distribution deterministically
  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = getDeterministicCoordinate(i, 1);
      const y = getDeterministicCoordinate(i, 2);
      const z = getDeterministicCoordinate(i, 3);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return [pos, orig];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const targetX = state.pointer.x * 3.0;
    const targetY = state.pointer.y * 3.0;

    const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const ox = originalPositions[idx];
      const oy = originalPositions[idx + 1];
      const oz = originalPositions[idx + 2];

      // Ambient sine wave floating
      const floatY = oy + Math.sin(time * 0.4 + i) * 0.12;
      const floatX = ox + Math.cos(time * 0.35 + i) * 0.08;

      // Distance to cursor
      const dx = targetX - currentPositions[idx];
      const dy = targetY - currentPositions[idx + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Micro-particles pull gently towards cursor coordinates if within threshold
      let pullFactor = 0;
      if (dist < 4.5 && dist > 0.05) {
        pullFactor = (1.0 - dist / 4.5) * 0.035;
      }

      currentPositions[idx] += (floatX + dx * pullFactor - currentPositions[idx]) * 0.04;
      currentPositions[idx + 1] += (floatY + dy * pullFactor - currentPositions[idx + 1]) * 0.04;
      currentPositions[idx + 2] = oz + Math.sin(time * 0.25 + i * 0.5) * 0.15;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#F4F4F5"
        transparent
        opacity={0.45}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
