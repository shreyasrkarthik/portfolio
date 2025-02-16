import Hero from "./components/Hero";
import YouTubeCarousel from "./components/YoutubeCarousel";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <div className="mt-4">
        <YouTubeCarousel />
      </div>
    </main>
  );
}