import Scene3D from "./Scene3D";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Demos from "./Demos";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF7F3] text-[#252B31]">
      <Scene3D />

      <div className="relative z-10">
        <section id="home" className="relative">
          <Hero />
        </section>

        <section id="about" className="relative">
          <About />
        </section>

        <section id="projects" className="relative">
          <Projects />
        </section>

        <section id="demos" className="relative">
          <Demos />
        </section>

        <section id="skills" className="relative">
          <Skills />
        </section>

        <section id="contact" className="relative">
          <Contact />
        </section>
      </div>
    </main>
  );
}