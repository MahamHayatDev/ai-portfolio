export default function Contact() {
return ( <section
   id="contact"
   className="relative overflow-hidden border-t border-[#1F2937] bg-[#050505] px-6 py-24 text-[#F5F5F7] md:px-10 md:py-28 lg:px-16"
 >
{/* Background decoration */} <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF4FA3]/25 blur-3xl" />

```
  <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#00E5FF]/[0.05] blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
      {/* Contact introduction */}
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5FF]">
          Contact
        </p>

        <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-[#F5F5F7] md:text-6xl">
          Have an AI idea or workflow to automate?
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#9CA3AF] md:text-lg">
          I build AI-powered applications and automated workflows that
          help businesses reduce repetitive work, connect their tools,
          and turn manual processes into practical systems.
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9CA3AF]">
          I&apos;m open to AI automation projects, Generative AI
          applications, remote opportunities, and collaborations.
        </p>
      </div>

      {/* Contact links */}
      <div className="rounded-[2rem] border border-[#1F2937] bg-[#0E0E12] p-6 shadow-[0_20px_70px_rgba(0,229,255,0.04)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4FA3]">
          Let&apos;s build something useful.
        </p>

        <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">
          Have a project, opportunity, or idea? Get in touch.
        </p>

        <div className="mt-6 space-y-3">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mahamhayat192@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-[#00E5FF]/35 bg-[#00E5FF]/[0.06] px-5 py-4 text-sm font-medium text-[#00E5FF] transition-all duration-200 hover:border-[#00E5FF] hover:bg-[#00E5FF]/[0.12]"
          >
            <span>Email</span>
            <span
              aria-hidden="true"
              className="text-base transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              â†—
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maham-shaukat-53132343a"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-[#1F2937] bg-[#09090B] px-5 py-4 text-sm font-medium text-[#E5E7EB] transition-all duration-200 hover:border-[#FF4FA3]/60 hover:bg-[#FF4FA3]/[0.08] hover:text-white"
          >
            <span>LinkedIn</span>
            <span
              aria-hidden="true"
              className="text-base text-[#FF4FA3] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              â†—
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MahamHayatDev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-[#1F2937] bg-[#09090B] px-5 py-4 text-sm font-medium text-[#E5E7EB] transition-all duration-200 hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/[0.05] hover:text-white"
          >
            <span>GitHub</span>
            <span
              aria-hidden="true"
              className="text-base text-[#00E5FF] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              â†—
            </span>
          </a>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-16 flex flex-col gap-4 border-t border-[#1F2937] pt-7 text-xs text-[#71717A] sm:flex-row sm:items-center sm:justify-between">
      <p>
        Â© {new Date().getFullYear()} Maham Shaukat. All rights reserved.
      </p>

      <p className="tracking-wide">
        <span className="text-[#00E5FF]">AI Automation</span>
        {" Â· "}
        <span className="text-[#FF4FA3]">Generative AI</span>
        {" Â· "}
        Intelligent Systems
      </p>
    </div>
  </div>
</section>

);
}

