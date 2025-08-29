"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import YouTubeCarousel from "./components/YoutubeCarousel";
import CTA from "./components/CTA";
import AboutTimeline from "./components/AboutTimeline";
import ContactForm from "./components/ContactForm";

export default function Page() {
  useEffect(() => {
    const sections = ["home", "about", "contact"];
    sections.forEach((id, index) => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, index * 5000);
    });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <section id="home" className="min-h-screen">
        <Hero />
        <div className="mt-4">
          <YouTubeCarousel />
        </div>
        <div className="mt-4">
          <CTA />
        </div>
      </section>
      <section id="about" className="min-h-screen">
        <AboutTimeline />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactForm />
      </section>
    </div>
  );
}
