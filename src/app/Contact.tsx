export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#252326] px-6 py-24 text-white md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#D98F9B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#EBC1C8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#EBC1C8]">
              Contact
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Have an AI idea or automation problem to solve?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              I&apos;m open to AI automation projects, Generative AI
              applications, remote opportunities, and collaborations where I
              can build practical systems from idea to implementation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EBC1C8]">
              Let&apos;s connect
            </p>

            <div className="mt-5 space-y-3">

              {/* EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahamhayat192@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/80 transition hover:border-[#D98F9B]/60 hover:bg-white/[0.08]"
              >
                <span>Email</span>
                <span className="text-white/45">↗</span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/maham-shaukat-53132343a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/80 transition hover:border-[#D98F9B]/60 hover:bg-white/[0.08]"
              >
                <span>LinkedIn</span>
                <span className="text-white/45">↗</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/MahamHayatDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/80 transition hover:border-[#D98F9B]/60 hover:bg-white/[0.08]"
              >
                <span>GitHub</span>
                <span className="text-white/45">↗</span>
              </a>

            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Maham Shaukat. All rights reserved.</p>

          <p>AI Automation · Generative AI · Intelligent Systems</p>
        </div>
      </div>
    </section>
  );
}