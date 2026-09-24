
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-white/5"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[5%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-[35%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.22em] text-white"
        >
          M. SH
        </a>

        <div className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-white/50 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#education" className="transition hover:text-white">
            Education
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#projects"
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 transition hover:border-cyan-400/30 hover:text-white"
        >
          View Work
        </a>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
        {/* LEFT SIDE */}
        <div>
          {/* Profile */}
          <div className="mb-8 flex items-center gap-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image
                src="/profile.jpg"
                alt="Maham Shaukat"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70">
                AI Automation Laboratory
              </p>

              <p className="mt-2 text-xs text-white/35">
                Intelligent systems · Automation · Generative AI
              </p>
            </div>
          </div>

          {/* Small heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-300/50" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Building intelligent systems
            </span>
          </div>

          {/* NAME */}
          <h1 className="max-w-xl text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-white">
            Maham{" "}
            <span className="text-white/50">
              Shaukat
            </span>
          </h1>

          {/* ROLE */}
          <div className="mt-7">
            <p className="text-xl font-medium tracking-[-0.02em] text-white/90 md:text-2xl">
              AI Automation &amp; Generative AI Developer
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 md:text-base">
              I build intelligent systems that connect AI reasoning,
              automation, APIs, and full-stack applications into practical
              end-to-end workflows.
            </p>
          </div>

          {/* TECHNOLOGIES */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
            <span>Generative AI</span>
            <span>AI Agents</span>
            <span>RAG</span>
            <span>LangChain</span>
            <span>LangGraph</span>
            <span>n8n</span>
          </div>

          {/* LOCATION */}
          <div className="mt-7 flex items-center gap-3 text-xs text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

            Islamabad, Pakistan

            <span className="text-white/15">•</span>

            Open to remote AI opportunities
          </div>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-black transition hover:bg-cyan-100"
            >
              Explore My Work
            </a>

            <a
              href="https://github.com/MahamHayatDev"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.025] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:border-cyan-300/30 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-white/10 bg-white/[0.025] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white/70 transition hover:border-cyan-300/30 hover:text-white"
            >
              Email
            </a>
          </div>

          {/* FOCUS TAGS */}
          <div className="mt-9 flex flex-wrap gap-2">
            {[
              "AI Engineering",
              "Automation",
              "LLM Applications",
              "AI Agents",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/7 bg-white/[0.02] px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/35"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — AI SYSTEM PANEL */}
        <div className="relative lg:pl-8">
          <div className="absolute -left-1 top-10 hidden h-48 w-px bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent lg:block" />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090d17]/85 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {/* PANEL HEADER */}
            <div className="flex items-center justify-between border-b border-white/7 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                  AI Systems Console
                </span>
              </div>

              <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-emerald-300/70">
                Online
              </span>
            </div>

            {/* PANEL BODY */}
            <div className="p-6 md:p-7">
              {/* Workspace */}
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                    Workspace
                  </p>

                  <p className="mt-1 font-mono text-sm text-white/80">
                    maham@ai-lab
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Mode
                  </p>

                  <p className="mt-1 text-xs text-cyan-300/70">
                    Engineering
                  </p>
                </div>
              </div>

              {/* FOCUS */}
              <div className="border-l border-cyan-300/20 pl-4">
                <p className="font-mono text-[11px] text-cyan-300/60">
                  $ focus
                </p>

                <p className="mt-1 font-mono text-sm text-white/80">
                  AI systems &amp; automation
                </p>
              </div>

              {/* STACK */}
              <div className="mt-6 border-l border-purple-300/20 pl-4">
                <p className="font-mono text-[11px] text-purple-300/60">
                  $ stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "LangChain",
                    "LangGraph",
                    "n8n",
                    "Groq",
                    "Python",
                    "Next.js",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/8 bg-white/[0.035] px-2.5 py-1.5 font-mono text-[10px] text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROJECTS */}
              <div className="mt-6 border-l border-cyan-300/20 pl-4">
                <p className="font-mono text-[11px] text-cyan-300/60">
                  $ builds
                </p>

                <div className="mt-3 space-y-3">
                  {/* Project 1 */}
                  <div className="flex items-center justify-between rounded-lg border border-white/7 bg-white/[0.025] px-3 py-3">
                    <div>
                      <p className="text-xs font-medium text-white/75">
                        FinTech Ops Assistant
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/25">
                        Invoice intelligence
                      </p>
                    </div>

                    <span className="text-[9px] text-emerald-300/60">
                      AI
                    </span>
                  </div>

                  {/* Project 2 */}
                  <div className="flex items-center justify-between rounded-lg border border-white/7 bg-white/[0.025] px-3 py-3">
                    <div>
                      <p className="text-xs font-medium text-white/75">
                        BusinessFlow AI
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/25">
                        AI commerce automation
                      </p>
                    </div>

                    <span className="text-[9px] text-cyan-300/60">
                      LIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* SYSTEM STATUS */}
              <div className="mt-7 grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-white/7 bg-white/[0.02] p-3">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    Reasoning
                  </p>

                  <p className="mt-1 text-xs text-white/65">
                    LLM
                  </p>
                </div>

                <div className="rounded-lg border border-white/7 bg-white/[0.02] p-3">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    Workflow
                  </p>

                  <p className="mt-1 text-xs text-white/65">
                    n8n
                  </p>
                </div>

                <div className="rounded-lg border border-white/7 bg-white/[0.02] p-3">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    Interface
                  </p>

                  <p className="mt-1 text-xs text-white/65">
                    Next.js
                  </p>
                </div>
              </div>

              {/* TERMINAL LINE */}
              <div className="mt-6 font-mono text-[10px] text-white/25">
                <span className="text-cyan-300/50">&gt;</span>{" "}
                building useful systems
                <span className="ml-1 animate-pulse">▋</span>
              </div>
            </div>
          </div>

          {/* FLOATING LABEL */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/8 bg-[#0a0e18]/90 px-4 py-3 backdrop-blur-xl lg:block">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              Current focus
            </p>

            <p className="mt-1 text-xs text-white/65">
              AI + Automation + Full Stack
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-4 px-6 pb-8 lg:px-10">
        <span className="h-px w-12 bg-white/10" />

        <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}

