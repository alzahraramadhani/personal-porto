import { Navbar } from "@/layout/Navbar";
import { Hero } from '@/sections/Hero'
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollReveal } from "./components/ScrollReveal";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero /> 

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;


