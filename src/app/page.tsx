import Scene3D from "./Scene3D";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Demos from "./Demos";
import Contact from "./Contact";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F5F5F7]">
      <Scene3D />

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-end gap-6 px-6 py-4 md:gap-8 md:px-10 lg:px-16"
        >
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 md:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-[#9CA3AF] transition-colors duration-200 hover:text-[#FF4FA3] focus-visible:outline-none focus-visible:text-[#FF4FA3]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative z-10">
        <section id="home" className="relative scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="relative scroll-mt-24">
          <About />
        </section>

        <section id="projects" className="relative scroll-mt-24">
          <Projects />
        </section>

        <section id="demos" className="relative scroll-mt-24">
          <Demos />
        </section>

        <section id="skills" className="relative scroll-mt-24">
          <Skills />
        </section>

        <section id="contact" className="relative scroll-mt-24">
          <Contact />
        </section>
      </div>
    </main>
  );
}


