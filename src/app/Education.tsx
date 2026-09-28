export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-[#FCEFF2] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#B46F7B]">
            Education
          </p>

          <h2 className="font-serif text-4xl tracking-tight text-[#252326] md:text-5xl">
            Academic foundation
          </h2>
        </div>

        <article className="relative overflow-hidden rounded-[2rem] border border-[#E9DDE0] bg-[#FFF9F8] p-7 shadow-[0_18px_60px_rgba(82,54,60,0.06)] md:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FCEFF2] blur-2xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B46F7B]">
                2025 — 2029
              </p>

              <h3 className="mt-3 font-serif text-3xl tracking-tight text-[#252326] md:text-4xl">
                BS Financial Technology (FinTech)
              </h3>

              <p className="mt-3 text-base text-[#706A6D]">
                Air University — Islamabad
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
              {[
                "Financial Technology",
                "AI & Automation",
                "Technology",
                "Business",
              ].map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-[#E9DDE0] bg-white px-3.5 py-2 text-xs font-medium text-[#625A5D]"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}