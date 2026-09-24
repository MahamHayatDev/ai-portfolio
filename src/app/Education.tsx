"use client";

export default function Education() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#35e0d0]">
            Academic Background
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#35e0d0]/20 bg-[#06121c]/75 p-8 backdrop-blur-xl md:p-10">

          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#35e0d0]/10 blur-3xl" />

          <div className="relative">

            {/* Degree */}
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#35e0d0]">
              2025 — 2029
            </p>

            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              BS Financial Technology (FinTech)
            </h3>

            <p className="mt-2 text-lg text-[#b8c7c9]">
              Air University — Islamabad
            </p>

            {/* Focus areas */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Financial Technology",
                "Generative AI",
                "AI Automation",
                "Backend Systems",
                "Agentic AI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#35e0d0]/20 bg-[#35e0d0]/5 px-4 py-2 text-sm text-[#c8d7d8]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}