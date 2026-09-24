import Scene3D from "./Scene3D";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Impact from "./Impact";
import Demos from "./Demos";
import Education from "./Education";
import Contact from "./Contact";

export default function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050b17]
        text-[#E8E6DE]
      "
    >
      {/* GLOBAL AI / ORBITAL BACKGROUND */}
      <Scene3D />

      {/* GLOBAL CONTENT LAYER */}
      <div className="relative z-10">

        {/* HERO */}
        <section id="home" className="relative">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="relative">
          <About />
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative">
          <Skills />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="relative">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative">
          <Projects />
        </section>

        {/* IMPACT */}
        <section id="impact" className="relative">
          <Impact />
        </section>

        {/* DEMOS */}
        <section id="demos" className="relative">
          <Demos />
        </section>

        {/* EDUCATION */}
        <section id="education" className="relative">
          <Education />
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative">
          <Contact />
        </section>

      </div>
    </main>
  );
}