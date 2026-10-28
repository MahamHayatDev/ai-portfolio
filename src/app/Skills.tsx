const SKILL_CATEGORIES: Record<
  string,
  { description: string; skills: string[]; accent: string }
> = {
  "Generative AI": {
    description: "Building practical LLM-powered applications.",
    skills: [
      "LLM Applications",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Structured Outputs",
    ],
    accent: "#00E5FF",
  },

  "AI Agents": {
    description: "Building intelligent agents and multi-step workflows.",
    skills: [
      "LangChain",
      "LangGraph",
      "Agentic Workflows",
      "Tool Calling",
      "Human-in-the-Loop",
      "AI Decision Workflows",
    ],
    accent: "#FF4FA3",
  },

  Automation: {
    description: "Connecting AI, APIs, and business processes.",
    skills: [
      "n8n",
      "Workflow Automation",
      "API Orchestration",
      "Webhooks",
      "HTTP Requests",
      "Process Automation",
    ],
    accent: "#00E5FF",
  },

  "Backend & APIs": {
    description: "Building services that connect models and applications.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "API Integration",
      "Groq API",
      "JSON Processing",
    ],
    accent: "#FF4FA3",
  },

  Frontend: {
    description: "Creating interfaces for AI-powered applications.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Dashboards",
      "Data Visualization",
    ],
    accent: "#00E5FF",
  },

  "Data & Infrastructure": {
    description: "Connecting application data, storage, and deployment.",
    skills: [
      "Supabase",
      "Vector Storage",
      "Database Integration",
      "Vercel",
      "Git",
      "GitHub",
    ],
    accent: "#FF4FA3",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#FF4FA3]/25 blur-3xl" />

      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-[#00E5FF]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5FF]">
              Technical Stack
            </p>

            <h2 className="font-serif text-4xl tracking-tight text-[#F5F5F7] md:text-5xl">
              Tools behind
              <br />
              <span className="text-[#FF4FA3]">the systems.</span>
            </h2>
          </div>

          <p className="max-w-[430px] text-sm leading-7 text-[#9CA3AF] md:text-base">
            A practical stack spanning Generative AI, intelligent agents,
            automation, backend APIs, frontend applications, and data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILL_CATEGORIES).map(([category, data]) => (
            <article
              key={category}
              className="group relative overflow-hidden rounded-3xl border border-[#1F2937] bg-[#0E0E12] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40 hover:shadow-[0_18px_55px_rgba(0,229,255,0.06)] md:p-7"
            >
              <div
                className="absolute left-0 top-0 h-[3px] w-full opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: data.accent }}
              />

              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F5F7]">
                  {category}
                </h3>

                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border text-xs font-bold"
                  style={{
                    borderColor: `${data.accent}40`,
                    backgroundColor: `${data.accent}12`,
                    color: data.accent,
                  }}
                >
                  {String(data.skills.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mb-6 text-sm leading-6 text-[#9CA3AF]">
                {data.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200"
                    style={
                      index < 2
                        ? {
                            borderColor: `${data.accent}55`,
                            backgroundColor: `${data.accent}0D`,
                            color: data.accent,
                          }
                        : {
                            borderColor: "#1F2937",
                            backgroundColor: "#09090B",
                            color: "#B4B4BE",
                          }
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#1F2937] bg-[#0E0E12] p-7 md:p-9">
          <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-[#FF4FA3]/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#00E5FF]">
                Core Focus
              </p>

              <p className="text-sm leading-7 text-[#C4C4CC] md:text-base">
                Building end-to-end AI systems that connect intelligent agents,
                business workflows, APIs, and data into practical applications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm">
              <span className="text-[#F5F5F7]">AI</span>
              <span className="text-[#00E5FF]">→</span>
              <span className="text-[#00E5FF]">Automation</span>
              <span className="text-[#FF4FA3]">→</span>
              <span className="text-[#FF4FA3]">Application</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

