import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-pg-dark selection:bg-pg-green selection:text-pg-dark">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}