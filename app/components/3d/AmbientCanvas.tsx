"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";
import { AntiGravityCore } from "./AntiGravityCore";

export default function AmbientCanvas() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        className="pointer-events-none"
        camera={{ position: [0, 0, 6.2], fov: 45, near: 0.1, far: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        {/* Studio Lighting Rig */}
        <ambientLight intensity={0.18} />

        {/* 45-degree Platinum Spotlight for Specular Rims */}
        <spotLight
          position={[6, 8, 5]}
          angle={0.45}
          penumbra={1}
          intensity={90}
          color="#FFFFFF"
          castShadow={false}
        />

        {/* Opposite Cool Rim Fill */}
        <directionalLight position={[-6, -4, -4]} intensity={0.5} color="#A1A1AA" />

        {/* Top Rim Point Light */}
        <pointLight position={[2.8, 4, 0]} intensity={15} color="#34D399" />

        {/* Floating Zero-Gravity Micro-Particles */}
        <ParticleField count={240} />

        {/* Suspended Zero-Gravity Crystalline Core */}
        <AntiGravityCore />
      </Canvas>
    </div>
  );
}
