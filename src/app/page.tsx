"use client";

import dynamic from 'next/dynamic';
import { ReactLenis } from '@studio-freight/react-lenis';
import HeroOverlay from '../components/ui/HeroOverlay';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';

const NetworkGraph = dynamic(() => import('../components/3d/NetworkGraph'), { ssr: false });

export default function Home() {
  return (
    <ReactLenis root>
      <main className="w-full min-h-screen relative font-sans selection:bg-cyan-500 selection:text-black">
        
        {/* Fixed 3D Canvas Background */}
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Canvas 
            camera={{ position: [0, 8, 20], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              <NetworkGraph />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        {/* Scrollable Overlay Content */}
        <div id="scroll-container" className="relative z-10 w-full">
          <HeroOverlay />
        </div>

      </main>
    </ReactLenis>
  );
}
