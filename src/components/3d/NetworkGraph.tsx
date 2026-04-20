"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { careerData } from '../../data/careerData';

function CareerNode({ position, color, current }: {
  position: [number, number, number];
  color: string;
  current?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const emissiveIntensity = current ? 3 : 1.5;
  const size = current ? 0.35 : 0.25;

  return (
    <Float speed={1.5 + Math.random()} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          toneMapped={false}
          wireframe={!current}
        />
      </mesh>
      {/* Glow sphere */}
      <mesh position={position}>
        <sphereGeometry args={[size * 1.8, 8, 8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.03}
        />
      </mesh>
    </Float>
  );
}

function ConnectionLine({ from, to }: {
  from: [number, number, number];
  to: [number, number, number];
}) {
  const points = [
    new THREE.Vector3(...from),
    new THREE.Vector3(...to),
  ];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#3D3830', transparent: true, opacity: 0.2 }))} />
  );
}

function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.05;
    }
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
        color="#D97706"
        size={0.06}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function NetworkGraph() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#D97706" />
      <pointLight position={[-10, -5, -10]} intensity={0.4} color="#7C3AED" />

      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />

      <AmbientParticles />

      {/* Career path connections */}
      {careerData.slice(0, -1).map((node, i) => (
        <ConnectionLine
          key={`line-${i}`}
          from={node.position}
          to={careerData[i + 1].position}
        />
      ))}

      {/* Career nodes */}
      {careerData.map(node => (
        <CareerNode
          key={node.id}
          position={node.position}
          color={node.color}
          current={node.current}
        />
      ))}
    </>
  );
}
