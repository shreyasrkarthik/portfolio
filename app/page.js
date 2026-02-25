"use client";

import Hero from "./components/Hero";
import YouTubeCarousel from "./components/YoutubeCarousel";
import CTA from "./components/CTA";
import AboutTimeline from "./components/AboutTimeline";
import ContactForm from "./components/ContactForm";
import IdentityGame from "./components/IdentityGame";

export default function Page() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden space-y-8 pb-12">
      <section id="home" className="min-h-[85vh]">
        <Hero />
      </section>

      <section id="signal" className="scroll-mt-24">
        <YouTubeCarousel />
      </section>

      <section id="game" className="scroll-mt-24">
        <IdentityGame />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutTimeline />
      </section>

      <section id="contact" className="scroll-mt-24">
        <CTA />
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
