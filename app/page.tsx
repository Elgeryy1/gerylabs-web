import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Skills } from "@/components/site/skills";
import { Projects } from "@/components/site/projects";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
