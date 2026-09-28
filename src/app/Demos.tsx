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
      className="relative overflow-hidden bg-[#FCEFF2] px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#B46F7B]">
            Live Demonstrations
          </p>

          <h2 className="font-serif text-4xl tracking-tight text-[#252326] md:text-5xl">
            See the systems in action.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#706A6D] md:text-lg">
            Real demonstrations of the systems I built, from workflow
            orchestration and AI reasoning to dashboards and business
            automation.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="overflow-hidden rounded-[2rem] border border-[#E9DDE0] bg-white shadow-[0_18px_60px_rgba(82,54,60,0.07)]"
            >
              {/* Video */}
              <div className="relative aspect-video overflow-hidden bg-[#252326]">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={demo.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B46F7B]">
                  {demo.category}
                </p>

                <h3 className="font-serif text-2xl tracking-tight text-[#252326] md:text-3xl">
                  {demo.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#706A6D] md:text-base">
                  {demo.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {demo.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#E9DDE0] bg-[#FFF9F8] px-3.5 py-1.5 text-xs font-medium text-[#625A5D]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}