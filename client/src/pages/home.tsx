import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Facts } from "@/components/sections/facts";
import { Skills } from "@/components/sections/skills";
import { Interests } from "@/components/sections/interests";
import { Resume } from "@/components/sections/resume";
import { Portfolio } from "@/components/sections/portfolio";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Facts />
      <Skills />
      <Interests />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}
