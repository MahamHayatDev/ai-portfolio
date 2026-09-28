const SKILL_CATEGORIES: Record<string, string[]> = {
  "Generative AI": [
    "LLM Applications",
    "Prompt Engineering",
    "RAG",
    "Embeddings",
    "Vector Databases",
    "Structured Outputs",
    "LLM Integration",
  ],

  "AI Agents": [
    "LangChain",
    "LangGraph",
    "Agentic Workflows",
    "Tool Calling",
    "Agent Reasoning",
    "Multi-Step AI Workflows",
    "Anomaly Detection",
  ],

  "Automation & Orchestration": [
    "n8n",
    "Workflow Automation",
    "API Orchestration",
    "Webhook Triggers",
    "HTTP Requests",
    "Event-Driven Workflows",
    "Process Automation",
  ],

  "Backend & APIs": [
    "Python",
    "FastAPI",
    "REST APIs",
    "API Integration",
    "Groq API",
    "Backend Services",
    "JSON Data Processing",
  ],

  "Frontend & Applications": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Interactive Dashboards",
    "Data Visualization",
    "Recharts",
  ],

  "Data & Infrastructure": [
    "Supabase",
    "Vector Storage",
    "Database Integration",
    "Environment Configuration",
    "Vercel",
    "Git",
    "GitHub",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#FCEFF2] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#B46F7B]">
            Technical Stack
          </p>

          <h2 className="font-serif text-4xl tracking-tight text-[#252326] md:text-5xl">
            Tools I use to build intelligent systems.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#706A6D] md:text-lg">
            A practical stack spanning Generative AI, agents, automation,
            backend APIs, frontend applications, and data infrastructure.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
            <article
              key={category}
              className="rounded-3xl border border-[#E9DDE0] bg-white p-6 shadow-[0_14px_45px_rgba(82,54,60,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#DCC9CD] hover:shadow-[0_18px_55px_rgba(82,54,60,0.08)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-[#302B2D]">
                  {category}
                </h3>

                <span className="rounded-full bg-[#FCEFF2] px-2.5 py-1 text-[10px] font-semibold text-[#9A606B]">
                  {skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#E9DDE0] bg-[#FFF9F8] px-3 py-1.5 text-xs text-[#625A5D]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Core focus */}
        <div className="mt-8 rounded-3xl border border-[#E9DDE0] bg-[#252326] p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EBC1C8]">
            Core focus
          </p>

          <p className="mt-3 max-w-4xl text-base leading-8 text-white/80 md:text-lg">
            Connecting AI reasoning, automation, APIs, backend services, data,
            and user-facing applications into complete workflows.
          </p>
        </div>
      </div>
    </section>
  );
}