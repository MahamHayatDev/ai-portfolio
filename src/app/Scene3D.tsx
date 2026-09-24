"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================================
   YOUR PHOTO
========================================================= */

function PhotoPanel() {
  const texture = useTexture("/photo.jpg");
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <mesh
      ref={ref}
      position={[0.6, 0.1, 2.2]}
    >
      <planeGeometry args={[1.6, 2]} />

      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.45}
        metalness={0.05}
      />
    </mesh>
  );
}

/* =========================================================
   CENTRAL ENERGY CORE
========================================================= */

function EnergyCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group>

      {/* Main glowing sphere */}
      <mesh ref={ref}>
        <sphereGeometry args={[1.15, 64, 64]} />

        <meshStandardMaterial
          color="#18c8c1"
          emissive="#0a9f9b"
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.25}
        />
      </mesh>

      {/* Soft outer energy shell */}
      <mesh scale={1.28}>
        <sphereGeometry args={[1.15, 48, 48]} />

        <meshBasicMaterial
          color="#13bfc0"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   ORBIT
========================================================= */

function Orbit({
  radius,
  color,
  speed,
  tilt,
  ballSize,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
  ballSize: number;
}) {
  const ball = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta * speed;

    if (ball.current) {
      ball.current.position.x =
        Math.cos(time.current) * radius;

      ball.current.position.z =
        Math.sin(time.current) * radius;
    }
  });

  const points = [];

  for (let i = 0; i <= 96; i++) {
    const a = (i / 96) * Math.PI * 2;

    points.push(
      Math.cos(a) * radius,
      0,
      Math.sin(a) * radius
    );
  }

  return (
    <group rotation={tilt}>

      {/* Orbit line */}

      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(points),
              3,
            ]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.48}
        />
      </line>

      {/* Glowing orbit particle */}

      <mesh ref={ball}>
        <sphereGeometry
          args={[ballSize, 32, 32]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={4}
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   FLOATING ENERGY BALL
========================================================= */

function EnergyBall({
  position,
  size,
  color,
  speed,
  phase,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
  phase: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  const time = useRef(phase);

  useFrame((_, delta) => {
    time.current += delta * speed;

    if (ref.current) {

      /* Gentle floating movement */

      ref.current.position.y =
        position[1] +
        Math.sin(time.current) * 0.22;

      ref.current.position.x =
        position[0] +
        Math.cos(time.current * 0.7) * 0.12;

      /* Slow rotation */

      ref.current.rotation.y +=
        delta * 0.25;

      ref.current.rotation.x +=
        delta * 0.12;
    }
  });

  return (
    <group>

      {/* Main sphere */}

      <mesh
        ref={ref}
        position={position}
      >
        <sphereGeometry
          args={[size, 48, 48]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.2}
          roughness={0.18}
          metalness={0.15}
        />
      </mesh>

      {/* Soft glow around sphere */}

      <mesh
        position={position}
        scale={1.45}
      >
        <sphereGeometry
          args={[size, 32, 32]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.055}
          side={THREE.BackSide}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   TINY LIGHT PARTICLE
========================================================= */

function LightParticle({
  position,
  color,
  size,
}: {
  position: [number, number, number];
  color: string;
  size: number;
}) {
  return (
    <mesh position={position}>

      <sphereGeometry
        args={[size, 16, 16]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.8}
      />

    </mesh>
  );
}

/* =========================================================
   MAIN SCENE
========================================================= */

export default function Scene3D() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",

        zIndex: 0,

        pointerEvents: "none",

        background: `
          radial-gradient(
            circle at 52% 42%,
            rgba(11, 110, 125, 0.20),
            transparent 28%
          ),

          radial-gradient(
            circle at 20% 70%,
            rgba(5, 74, 100, 0.12),
            transparent 30%
          ),

          radial-gradient(
            circle at 85% 25%,
            rgba(8, 104, 125, 0.10),
            transparent 32%
          ),

          #020817
        `,
      }}
    >

      <Canvas
        camera={{
          position: [0, 1, 8],
          fov: 50,
        }}
      >

        {/* =================================================
            LIGHTING
        ================================================= */}

        <ambientLight intensity={0.65} />

        <pointLight
          position={[5, 5, 5]}
          intensity={2.2}
          color="#25e6d4"
        />

        <pointLight
          position={[-5, 2, 4]}
          intensity={1.3}
          color="#1687c4"
        />

        <pointLight
          position={[2, -3, 5]}
          intensity={0.8}
          color="#ffffff"
        />

        {/* =================================================
            STAR FIELD
        ================================================= */}

        <Stars
          radius={100}
          depth={60}
          count={3800}
          factor={3.5}
          saturation={0}
          fade
          speed={0.25}
        />

        {/* =================================================
            CENTRAL AI CORE
        ================================================= */}

        <EnergyCore />

        {/* =================================================
            YOUR PHOTO
        ================================================= */}

        <PhotoPanel />

        {/* =================================================
            MAIN ORBITS
        ================================================= */}

        <Orbit
          radius={2.6}
          color="#35e0d0"
          speed={0.40}
          tilt={[0.3, 0, 0.1]}
          ballSize={0.20}
        />

        <Orbit
          radius={3.2}
          color="#39aee8"
          speed={0.55}
          tilt={[-0.2, 0, 0.5]}
          ballSize={0.22}
        />

        <Orbit
          radius={2.1}
          color="#d7b94a"
          speed={0.75}
          tilt={[0.5, 0, -0.3]}
          ballSize={0.18}
        />

        {/* Extra subtle orbit */}

        <Orbit
          radius={3.65}
          color="#1c9bb8"
          speed={0.28}
          tilt={[0.15, 0, -0.55]}
          ballSize={0.15}
        />

        {/* =================================================
            FLOATING ENERGY BALLS
        ================================================= */}

        {/* Cyan */}

        <EnergyBall
          position={[-4.1, 2.4, -2]}
          size={0.25}
          color="#26d9e0"
          speed={0.5}
          phase={0}
        />

        {/* Blue */}

        <EnergyBall
          position={[4.0, 2.2, -2]}
          size={0.20}
          color="#3aaeea"
          speed={0.45}
          phase={2}
        />

        {/* Teal */}

        <EnergyBall
          position={[-3.8, -2.3, -2]}
          size={0.32}
          color="#20cbbd"
          speed={0.35}
          phase={3}
        />

        {/* Gold */}

        <EnergyBall
          position={[4.2, -1.9, -2]}
          size={0.27}
          color="#d8b84a"
          speed={0.42}
          phase={1}
        />

        {/* Small Cyan */}

        <EnergyBall
          position={[-4.8, 0.3, -2]}
          size={0.15}
          color="#39e4dc"
          speed={0.65}
          phase={4}
        />

        {/* Small Blue */}

        <EnergyBall
          position={[4.8, 0.8, -2]}
          size={0.14}
          color="#42b9ef"
          speed={0.6}
          phase={5}
        />

        {/* Top floating sphere */}

        <EnergyBall
          position={[2.3, 3.0, -2]}
          size={0.12}
          color="#29d5cf"
          speed={0.55}
          phase={2.5}
        />

        {/* Bottom floating sphere */}

        <EnergyBall
          position={[-2.5, -3.0, -2]}
          size={0.18}
          color="#258fc4"
          speed={0.48}
          phase={1.5}
        />

        {/* =================================================
            SMALL LIGHTS
        ================================================= */}

        <LightParticle
          position={[-2.8, 3.1, -1]}
          color="#5ceee5"
          size={0.035}
        />

        <LightParticle
          position={[3.0, 3.2, -1]}
          color="#54c9ee"
          size={0.04}
        />

        <LightParticle
          position={[4.5, -0.8, -1]}
          color="#7debe1"
          size={0.03}
        />

        <LightParticle
          position={[-4.2, 1.1, -1]}
          color="#42bce9"
          size={0.035}
        />

        <LightParticle
          position={[1.7, -3.1, -1]}
          color="#e3c75c"
          size={0.03}
        />

        <LightParticle
          position={[-1.8, 3.4, -1]}
          color="#42e4dc"
          size={0.025}
        />

      </Canvas>
    </div>
  );
}