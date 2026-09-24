"use client";

import { useState } from "react";

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
  const categories = Object.keys(SKILL_CATEGORIES);

  const [active, setActive] = useState("Generative AI");

  const activeSkills = SKILL_CATEGORIES[active] || [];

  return (
    <section
      id="skills"
      className="relative z-10 px-10 md:px-16 py-24 w-full overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-[380px] h-[380px] rounded-full bg-[#2dd4bf]/15 blur-3xl pointer-events-none" />

      <div className="absolute top-32 right-20 w-[380px] h-[380px] rounded-full bg-[#c084fc]/15 blur-3xl pointer-events-none" />

      {/* Floating shapes */}
      <div
        className="absolute top-6 left-6 w-9 h-9 bg-[#c084fc] opacity-70 pointer-events-none animate-[spin_18s_linear_infinite]"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      />

      <div
        className="absolute top-40 right-72 w-7 h-7 bg-[#2dd4bf] opacity-60 pointer-events-none animate-[spin_14s_linear_infinite_reverse]"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      />

      {/* Heading */}
      <div className="relative mb-12">
        <p className="text-sm tracking-widest text-[#2dd4bf] mb-3">
          TECHNICAL CAPABILITIES
        </p>

        <h2 className="text-5xl md:text-6xl font-serif mb-4">
          Skills Universe
        </h2>

        <p className="text-lg text-[#9CA3AF] max-w-3xl leading-relaxed">
          A practical AI engineering stack spanning Generative AI, intelligent
          agents, automation, backend systems, APIs, and full-stack
          applications.
        </p>
      </div>

      {/* Main skills area */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">

        {/* Categories */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((category) => {
            const isActive = active === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`group text-left rounded-xl border p-5 backdrop-blur transition-all duration-300 ${
                  isActive
                    ? "border-[#2dd4bf] bg-[#10151F]/90 shadow-[0_0_40px_rgba(45,212,191,0.22)]"
                    : "border-[#2A3142] bg-[#10151F]/50 hover:border-[#2dd4bf]/50 hover:bg-[#10151F]/75"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-[#E8E6DE]">
                    {category}
                  </p>

                  <span
                    className={`text-xs transition ${
                      isActive
                        ? "text-[#2dd4bf]"
                        : "text-[#6B7280] group-hover:text-[#2dd4bf]"
                    }`}
                  >
                    →
                  </span>
                </div>

                <p className="text-xs text-[#9CA3AF]">
                  {SKILL_CATEGORIES[category].length} capabilities
                </p>
              </button>
            );
          })}
        </div>

        {/* Skills details */}
        <div className="lg:flex-[0_0_420px] rounded-2xl border border-[#2dd4bf]/50 bg-[#10151F]/80 backdrop-blur p-7 shadow-[0_0_50px_rgba(45,212,191,0.16)]">

          <div className="mb-6">
            <p className="text-xs tracking-widest text-[#2dd4bf] mb-2">
              SELECTED DOMAIN
            </p>

            <h3 className="text-2xl font-serif text-[#E8E6DE]">
              {active}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {activeSkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-2 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#e8fffb] text-xs hover:border-[#2dd4bf]/70 hover:bg-[#2dd4bf]/15 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom statement */}
      <div className="relative mt-10 pt-8 border-t border-[#2A3142]">
        <p className="text-sm text-[#9CA3AF] max-w-3xl leading-relaxed">
          <span className="text-[#E8E6DE]">Core focus:</span>{" "}
          building AI systems that connect reasoning, automation, APIs,
          backend services, and user-facing applications into complete
          workflows.
        </p>
      </div>
    </section>
  );
}
``