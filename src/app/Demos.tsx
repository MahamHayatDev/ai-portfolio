"use client";

const demos = [
  {
    title: "Fintech Ops Assistant",
    category: "AI AUTOMATION · FINTECH",
    description:
      "An AI-powered invoice automation system using n8n, LangChain and Groq to extract invoice data, analyze vendor history and detect anomalies.",
    video: "/videos/fintech-ops-demo.mp4",
    technologies: ["n8n", "LangChain", "Groq", "Next.js"],
  },
  {
    title: "BusinessFlow AI",
    category: "AI AUTOMATION · E-COMMERCE",
    description:
      "An AI shopping and business assistant designed for fashion brands, handling product questions, recommendations, policies and order workflows.",
    video: "/videos/business-flow-demo.mp4",
    technologies: ["Next.js", "Supabase", "Groq", "TypeScript"],
  },
];

export default function Demos() {
  return (
    <section
      id="demos"
      className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="relative mb-14 text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-cyan-300/70">
          SYSTEM DEMOS
        </p>

        <h2 className="font-serif text-4xl tracking-tight text-white md:text-6xl">
          See the systems in action.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
          Real demonstrations of the AI automation systems I built,
          from workflow orchestration to reasoning and live dashboards.
        </p>
      </div>

      {/* Demo cards */}
      <div className="relative grid gap-8 lg:grid-cols-2">
        {demos.map((demo) => (
          <article
            key={demo.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20"
          >
            {/* Video */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
              >
                <source src={demo.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-7 md:p-8">
              <p className="mb-3 text-[10px] font-semibold tracking-[0.3em] text-cyan-300/70">
                {demo.category}
              </p>

              <h3 className="font-serif text-2xl text-white md:text-3xl">
                {demo.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {demo.description}
              </p>

              {/* Technology pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {demo.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}