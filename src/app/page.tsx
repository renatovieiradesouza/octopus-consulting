import { CTA } from "@/components/CTA";
import { Differential } from "@/components/Differential";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differential />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

