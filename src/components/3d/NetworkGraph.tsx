"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Line, Sphere, Text, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careerData, skillsData } from '../../data/careerData';

gsap.registerPlugin(ScrollTrigger);

export default function NetworkGraph() {
  const { camera, scene } = useThree();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const nodesRef = useRef<(THREE.Group | null)[]>([]);

  useLayoutEffect(() => {
    // Initial camera position (WP0)
    camera.position.set(0, 8, 20);
    camera.lookAt(0, 0, 0);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    timelineRef.current = timeline;

    // Camera movement sequence
    const waypoints = [
      { pos: [-8, 2, 8], lookAt: [-8, 2, 8] },   // WP1: Bangalore
      { pos: [-4, 1, 4], lookAt: [-4, 1, 4] },   // WP2: Ittiam
      { pos: [2, 1, 2], lookAt: [2, 1, 2] },     // WP3: Vymo
      { pos: [-2, 3, -2], lookAt: [-2, 3, -2] }, // WP4: NEU
      { pos: [4, 2, -6], lookAt: [4, 2, -6] },   // WP5: PayPal
      { pos: [6, 1, -10], lookAt: [6, 1, -10] }, // WP6: Salesforce
      { pos: [0, 14, -4], lookAt: [0, 0, -5] },  // WP7: Skills
      { pos: [0, 0, 5], lookAt: [0, 0, 0] }      // WP9: Contact
    ];

    waypoints.forEach((wp) => {
      timeline.to(camera.position, {
        x: wp.pos[0], y: wp.pos[1], z: wp.pos[2] + 4, // Offset z slightly for view
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.lookAt(new THREE.Vector3(...wp.lookAt))
      });
    });

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);

  // Animate nodes appearing when close to camera?
  useFrame((state) => {
    nodesRef.current.forEach((group, i) => {
      if (group) {
        const dist = state.camera.position.distanceTo(group.position);
        // Simple proximity scale effect
        const scale = THREE.MathUtils.lerp(group.scale.x, dist < 8 ? 1.2 : 1, 0.1);
        group.scale.setScalar(scale);
      }
    });
  });

  // Edges
  const points = careerData.map(d => new THREE.Vector3(...d.position));

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Career Path Line */}
      <Line points={points} color="#1E3A5F" lineWidth={2} transparent opacity={0.4} />

      {/* Career Nodes */}
      {careerData.map((node, index) => (
        <group 
          key={node.id} 
          position={node.position}
          ref={(el) => { nodesRef.current[index] = el; }}
        >
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[0.4, 32, 32]}>
              <meshStandardMaterial 
                color={node.color} 
                emissive={node.color}
                emissiveIntensity={2}
                toneMapped={false}
              />
            </Sphere>
            {/* Label */}
            <Text
              position={[0, 0.6, 0]}
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {node.company}
            </Text>
          </Float>
        </group>
      ))}

      {/* Skill Nodes */}
      {skillsData.map((skill, index) => (
        <group key={index} position={skill.position}>
           <Float speed={1} rotationIntensity={1} floatIntensity={0.2}>
            <Sphere args={[0.15, 16, 16]}>
              <meshStandardMaterial color="#7B61FF" emissive="#7B61FF" emissiveIntensity={1} />
            </Sphere>
            <Text
              position={[0, 0.3, 0]}
              fontSize={0.15}
              color="#A0B4C0"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
           </Float>
        </group>
      ))}
    </>
  );
}
