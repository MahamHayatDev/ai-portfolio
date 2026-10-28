"use client";

const demos = [
{
number: "01",
title: "ClientPilot",
category: "AI AUTOMATION Â· LEAD GENERATION",
description:
"An AI-assisted lead research workflow that researches companies, evaluates lead fit, generates personalized outreach drafts, and keeps a human in control before sending.",
video: "/videos/clientpilot-demo.mp4",
technologies: [
"Python",
"FastAPI",
"LangGraph",
"n8n",
"Supabase",
"Gemini",
],
accent: "#00E5FF",
},
{
number: "02",
title: "SupportOps Agent",
category: "GENERATIVE AI Â· CUSTOMER SUPPORT",
description:
"An AI-powered support agent using retrieval-augmented generation (RAG), intelligent routing, and human escalation to answer questions and handle complex support requests.",
video: "/videos/supportops-agent-demo-muted.mp4",
technologies: [
"LangGraph",
"RAG",
"Supabase",
"Groq",
"Next.js",
],
accent: "#FF4FA3",
},
{
number: "03",
title: "FinTech Ops Assistant",
category: "AI AUTOMATION Â· FINTECH",
description:
"An AI-powered invoice automation system that extracts financial data, analyzes vendor history, detects anomalies, and presents results through a live dashboard.",
video: "/videos/fintech-ops-demo.mp4",
technologies: ["n8n", "LangChain", "Groq", "Next.js"],
accent: "#00E5FF",
},
{
number: "04",
title: "BusinessFlow AI",
category: "AI AUTOMATION Â· E-COMMERCE",
description:
"An AI business assistant for fashion brands that handles product questions, recommendations, stock checks, business policies, and order workflows.",
video: "/videos/business-flow-demo.mp4",
technologies: ["Next.js", "Supabase", "Groq", "TypeScript"],
accent: "#FF4FA3",
},
];

export default function Demos() {
return ( <section
   id="demos"
   className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 md:py-28 lg:px-16"
 >
{/* Decorative background glow */} <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-[#FF4FA3]/30 blur-3xl" />

```
  <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-[#00E5FF]/[0.04] blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5FF]">
        Live Demonstrations
      </p>

      <h2 className="font-serif text-4xl tracking-tight text-[#F5F5F7] md:text-5xl">
        See the systems in action.
      </h2>

      <p className="mt-5 text-base leading-8 text-[#9CA3AF] md:text-lg">
        Explore real demonstrations of AI agents, intelligent workflows,
        financial automation, and business systems built to solve practical
        problems.
      </p>
    </div>

    {/* Project cards */}
    <div className="grid gap-7 lg:grid-cols-2">
      {demos.map((demo) => (
        <article
          key={demo.number}
          className="overflow-hidden rounded-[2rem] border border-[#1F2937] bg-[#0E0E12] shadow-[0_18px_60px_rgba(0,229,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40 hover:shadow-[0_24px_65px_rgba(0,229,255,0.10)]"
        >
          {/* Video */}
          <div className="relative aspect-video overflow-hidden bg-[#09090B]">
            <video
              className="h-full w-full object-contain"
              controls
              preload="metadata"
              playsInline
            >
              <source src={demo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <span
              className="absolute left-5 top-5 rounded-lg px-3 py-2 text-xs font-bold text-[#050505]"
              style={{ backgroundColor: demo.accent }}
            >
              {demo.number}
            </span>
          </div>

          {/* Project information */}
          <div className="p-7 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E5FF]">
              {demo.category}
            </p>

            <h3 className="font-serif text-2xl tracking-tight text-[#F5F5F7] md:text-3xl">
              {demo.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#9CA3AF] md:text-base">
              {demo.description}
            </p>

            {/* Technology tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {demo.technologies.map((technology, index) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#1F2937] bg-[#0E0E12] px-3.5 py-1.5 text-xs font-medium text-[#9CA3AF]"
                  style={
                    index < 2
                      ? {
                          borderColor: `${demo.accent}66`,
                          color: demo.accent,
                        }
                      : undefined
                  }
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Bottom banner */}
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#1F2937] bg-[#0E0E12] px-6 py-5">
      <p className="text-sm font-semibold text-[#F5F5F7] md:text-base">
        Built with purpose. Automated with intelligence.
      </p>

      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00E5FF]">
        Four AI systems Â· One portfolio
      </p>
    </div>
  </div>
</section>

);
}

