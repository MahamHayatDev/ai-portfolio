"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#35e0d0]">
            Let&apos;s Connect
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Contact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#aebfc2]">
            Interested in AI automation, Generative AI, or building intelligent
            systems? Let&apos;s connect and build something meaningful.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#35e0d0]/20 bg-[#06121c]/75 p-8 text-center backdrop-blur-xl md:p-12">

          {/* Glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#35e0d0]/10 blur-3xl" />

          <div className="relative">

            <p className="text-sm uppercase tracking-[0.25em] text-[#35e0d0]">
              Open to Opportunities
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
              Let&apos;s build the future with AI.
            </h3>

            {/* Links */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href="mailto:your-email@example.com"
                className="rounded-full border border-[#35e0d0]/40 bg-[#35e0d0]/10 px-6 py-3 text-sm font-medium text-[#d9ffff] transition hover:bg-[#35e0d0]/20"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-[#718488]">
            © 2026 Maham Shaukat. Built with AI, automation &amp; curiosity.
          </p>
        </div>

      </div>
    </section>
  );
}