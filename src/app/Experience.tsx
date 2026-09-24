export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-10 md:px-16 py-24 w-full overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-[360px] h-[360px] rounded-full bg-[#2dd4bf]/10 blur-3xl pointer-events-none" />

      <div className="relative mb-14">
        <p className="text-sm tracking-widest text-[#2dd4bf] mb-3">
          EXPERIENCE
        </p>

        <h2 className="text-5xl md:text-6xl font-serif mb-4">
          Building & Applying
        </h2>

        <p className="text-lg text-[#9CA3AF] max-w-3xl leading-relaxed">
          Hands-on experience developing AI-powered applications, automation
          workflows, backend services, and full-stack systems from concept to
          working implementation.
        </p>
      </div>

      {/* Experience timeline */}
      <div className="relative max-w-5xl">

        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#2A3142] hidden md:block" />

        {/* Experience 1 */}
        <div className="relative md:pl-14 mb-14">
          <div className="hidden md:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[#2dd4bf] bg-[#0a0e1a] shadow-[0_0_15px_rgba(45,212,191,0.5)]" />

          <div className="rounded-2xl border border-[#2A3142] bg-[#10151F]/70 backdrop-blur p-7 md:p-8 hover:border-[#2dd4bf]/40 transition-all duration-300">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <p className="text-[#2dd4bf] text-sm tracking-widest mb-2">
                  AI AUTOMATION
                </p>

                <h3 className="text-2xl md:text-3xl font-serif text-[#E8E6DE]">
                  AI Automation & Application Development
                </h3>
              </div>

              <span className="text-sm text-[#9CA3AF] whitespace-nowrap">
                2026 — Present
              </span>
            </div>

            <p className="text-[#c9cdd6] text-base md:text-lg leading-relaxed mb-6">
              Designing and developing practical AI systems that combine
              language models, reasoning workflows, automation, APIs, and
              user-facing applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#2A3142] bg-[#0c111b]/70 p-5">
                <h4 className="text-sm font-semibold text-[#E8E6DE] mb-2">
                  AI & Reasoning
                </h4>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Working with Generative AI, LangChain, LangGraph, RAG,
                  structured outputs, agentic workflows, and LLM integrations.
                </p>
              </div>

              <div className="rounded-xl border border-[#2A3142] bg-[#0c111b]/70 p-5">
                <h4 className="text-sm font-semibold text-[#E8E6DE] mb-2">
                  Automation
                </h4>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Building workflows with n8n, webhooks, HTTP requests, API
                  integrations, and multi-step automation pipelines.
                </p>
              </div>

              <div className="rounded-xl border border-[#2A3142] bg-[#0c111b]/70 p-5">
                <h4 className="text-sm font-semibold text-[#E8E6DE] mb-2">
                  Backend Systems
                </h4>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Developing Python-based services, FastAPI endpoints, REST
                  APIs, data processing pipelines, and AI-powered backend
                  logic.
                </p>
              </div>

              <div className="rounded-xl border border-[#2A3142] bg-[#0c111b]/70 p-5">
                <h4 className="text-sm font-semibold text-[#E8E6DE] mb-2">
                  Full-Stack Delivery
                </h4>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Connecting AI and backend services to Next.js, React,
                  TypeScript, Supabase, and interactive dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative md:pl-14">
          <div className="hidden md:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[#c084fc] bg-[#0a0e1a] shadow-[0_0_15px_rgba(192,132,252,0.45)]" />

          <div className="rounded-2xl border border-[#2A3142] bg-[#10151F]/70 backdrop-blur p-7 md:p-8 hover:border-[#c084fc]/40 transition-all duration-300">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
              <div>
                <p className="text-[#c084fc] text-sm tracking-widest mb-2">
                  PROJECT-BASED DEVELOPMENT
                </p>

                <h3 className="text-2xl md:text-3xl font-serif text-[#E8E6DE]">
                  AI Systems & Automation Projects
                </h3>
              </div>

              <span className="text-sm text-[#9CA3AF] whitespace-nowrap">
                2026
              </span>
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-xl text-[#E8E6DE]">
                    FinTech Ops Assistant
                  </h4>

                  <span className="px-2.5 py-1 rounded-full text-xs border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#b9fff4]">
                    AI Automation
                  </span>
                </div>

                <p className="text-[#9CA3AF] leading-relaxed">
                  Built an AI invoice-processing workflow using n8n,
                  LangChain, and Groq. The system extracts invoice information,
                  analyzes vendor history, identifies anomalies, and presents
                  reasoning through a live Next.js dashboard.
                </p>
              </div>

              <div className="h-px bg-[#2A3142]" />

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-xl text-[#E8E6DE]">
                    BusinessFlow AI
                  </h4>

                  <span className="px-2.5 py-1 rounded-full text-xs border border-[#c084fc]/30 bg-[#c084fc]/10 text-[#e5d5ff]">
                    Generative AI
                  </span>
                </div>

                <p className="text-[#9CA3AF] leading-relaxed">
                  Developed an AI shopping assistant and admin dashboard for
                  fashion e-commerce. The application handles product
                  questions, budget-based recommendations, availability,
                  store policies, and order workflows using Next.js, Supabase,
                  Groq, and TypeScript.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-[#2A3142]">
              {[
                "Python",
                "LangChain",
                "LangGraph",
                "n8n",
                "Groq",
                "Next.js",
                "TypeScript",
                "Supabase",
                "FastAPI",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-[#2A3142] bg-[#0c111b] text-xs text-[#9CA3AF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="relative mt-12 max-w-4xl">
        <div className="border-l-2 border-[#2dd4bf] pl-6">
          <p className="text-base md:text-lg text-[#b9d4e4] leading-relaxed">
            My approach is project-driven: learn a technology, understand
            where it fits in a real system, and then build something that
            demonstrates the complete workflow.
          </p>
        </div>
      </div>
    </section>
  );
}