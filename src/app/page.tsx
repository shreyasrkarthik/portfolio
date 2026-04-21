"use client";

import dynamic from 'next/dynamic';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { GameProvider } from '../context/GameContext';
import BootSequence from '../components/game/BootSequence';
import GameHUD from '../components/game/GameHUD';
import AchievementToast from '../components/game/AchievementToast';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CommunitySection from '../components/sections/CommunitySection';
import ContactSection from '../components/sections/ContactSection';

const NetworkGraph = dynamic(() => import('../components/3d/NetworkGraph'), {
  ssr: false,
});

export default function Home() {
  return (
    <GameProvider>
      <ReactLenis root>
        <main className="relative w-full min-h-screen bg-[#0C0A08] text-[#FAF9F7] font-sans">

          {/* Fixed 3D ambient background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
              camera={{ position: [0, 2, 22], fov: 55 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 1.5]}
            >
              <Suspense fallback={null}>
                <NetworkGraph />
              </Suspense>
            </Canvas>
          </div>

          {/* Game overlay elements */}
          <BootSequence />
          <GameHUD />
          <AchievementToast />

          {/* Page sections */}
          <div className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CommunitySection />
            <ContactSection />
          </div>

        </main>
      </ReactLenis>
    </GameProvider>
  );
}
