export default function Impact() {
  const impactItems = [
    {
      value: "2",
      label: "End-to-End AI Systems",
      description:
        "Two working AI applications developed from architecture and backend logic through AI reasoning, automation, dashboards, and deployment.",
    },
    {
      value: "2",
      label: "Automation Pipelines",
      description:
        "AI-powered workflows connecting n8n orchestration, APIs, LLM reasoning, data processing, and real operational use cases.",
    },
    {
      value: "7+",
      label: "AI Engineering Technologies",
      description:
        "Hands-on development across LangChain, LangGraph, n8n, Groq, Python, FastAPI, Next.js, Supabase, and related AI application tooling.",
    },
    {
      value: "1",
      label: "Invoice Reasoning System",
      description:
        "A FinTech workflow that extracts invoice data, analyzes vendor history, detects anomalies, and generates explainable reasoning.",
    },
    {
      value: "1",
      label: "AI Commerce System",
      description:
        "A business-facing AI assistant capable of handling product questions, recommendations, availability, policies, and order workflows.",
    },
    {
      value: "E2E",
      label: "Full-Stack Delivery",
      description:
        "Projects span frontend interfaces, backend services, APIs, AI reasoning, automation orchestration, databases, and deployment.",
    },
  ];

  return (
    <section
      id="impact"
      className="relative z-10 px-10 md:px-16 py-24 w-full overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-1/4 w-[420px] h-[420px] rounded-full bg-[#2dd4bf]/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-10 w-[360px] h-[360px] rounded-full bg-[#c084fc]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative mb-14">
        <p className="text-sm tracking-widest text-[#2dd4bf] mb-3">
          ENGINEERING IMPACT
        </p>

        <h2 className="text-5xl md:text-6xl font-serif mb-4">
          Built systems. Real output.
        </h2>

        <p className="text-lg text-[#9CA3AF] max-w-3xl leading-relaxed">
          Evidence from the systems I have built across AI automation,
          reasoning pipelines, full-stack applications, and FinTech workflows.
        </p>
      </div>

      {/* Impact grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {impactItems.map((item, index) => (
          <div
            key={item.label}
            className="group relative rounded-2xl border border-[#2A3142] bg-[#10151F]/70 backdrop-blur p-7 min-h-[250px] transition-all duration-300 hover:border-[#2dd4bf]/50 hover:bg-[#10151F]/85 hover:-translate-y-1"
          >
            {/* Number */}
            <div className="flex items-start justify-between mb-8">
              <span className="text-5xl md:text-6xl font-serif text-[#E8E6DE] group-hover:text-[#2dd4bf] transition-colors duration-300">
                {item.value}
              </span>

              <span className="text-xs text-[#4B5563] font-mono">
                0{index + 1}
              </span>
            </div>

            {/* Label */}
            <h3 className="text-lg font-semibold text-[#E8E6DE] mb-3">
              {item.label}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {item.description}
            </p>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Engineering philosophy */}
      <div className="relative mt-14 rounded-2xl border border-[#2A3142] bg-[#0c111b]/70 backdrop-blur p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 items-start">
          <div>
            <p className="text-sm tracking-widest text-[#2dd4bf]">
              APPROACH
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#E8E6DE] mb-4">
              From AI capability to working system.
            </h3>

            <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed max-w-4xl">
              I focus on connecting individual AI capabilities into complete
              workflows — combining reasoning, automation, backend services,
              APIs, data, and interfaces to create systems that can actually
              be demonstrated and used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}