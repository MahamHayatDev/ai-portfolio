"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Fintech Ops Assistant",
    description:
      "An AI invoice-automation system that extracts financial data, checks vendor history, and flags anomalies with explained reasoning. n8n handles orchestration while LangChain and Groq handle the reasoning layer.",
    highlight:
      "Invoice anomaly detection with reasoning — not just a red flag, but an explanation of why the transaction needs review.",
    technologies: ["n8n", "LangChain", "Groq", "FastAPI", "Next.js"],
    github: "https://github.com/MahamHayatDev/fintech-ops-assistant",
    accent: "teal",
    details: [
      "Simulated invoice trigger",
      "Automated invoice extraction",
      "Vendor-history comparison",
      "AI anomaly reasoning",
      "Live dashboard output",
    ],
  },
  {
    number: "02",
    title: "BusinessFlow AI",
    description:
      "An AI business assistant built for clothing e-commerce workflows, handling product questions, recommendations, policy lookups, conversation memory, and real order placement through an interactive dashboard.",
    highlight:
      "Multi-requirement product recommendations, conversation memory, and data-grounded business insights from live stock and order data.",
    technologies: ["Next.js", "Supabase", "Groq", "TypeScript", "Vercel"],
    github: "https://github.com/MahamHayatDev/business-flow-ai",
    accent: "purple",
    details: [
      "AI shopping assistant",
      "Product and policy lookup",
      "Conversation memory",
      "Real order placement",
      "Admin business dashboard",
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative z-10 w-full overflow-hidden px-10 py-28 md:px-16"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-[#2dd4bf]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-[300px] h-[500px] w-[500px] rounded-full bg-[#a855f7]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#38bdf8]/5 blur-3xl" />

      {/* Small decorative stars */}
      <div className="pointer-events-none absolute left-[8%] top-[22%] h-1 w-1 rounded-full bg-[#2dd4bf]" />
      <div className="pointer-events-none absolute left-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
      <div className="pointer-events-none absolute right-[14%] top-[20%] h-1 w-1 rounded-full bg-[#2dd4bf]" />
      <div className="pointer-events-none absolute right-[8%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-[#a855f7]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-[1400px]">
        <p className="mb-3 text-sm font-medium tracking-[0.35em] text-[#2dd4bf]">
          PROJECT GALAXY
        </p>

        <h2 className="mb-4 font-serif text-5xl leading-tight text-[#E8E6DE] md:text-6xl">
          Selected Systems
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-[#9CA3AF] md:text-xl">
          Two real, working systems — built end-to-end, combining AI reasoning,
          automation, backend services, and live interfaces.
        </p>
      </div>

      {/* Project cards */}
      <div className="relative mx-auto mt-14 grid max-w-[1400px] gap-6 lg:grid-cols-2">
        {projects.map((project) => {
          const isExpanded = expanded === project.number;
          const isTeal = project.accent === "teal";

          return (
            <article
              key={project.number}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-[#0d121d]/80 p-7 backdrop-blur-xl transition-all duration-500 md:p-8 ${
                isTeal
                  ? "border-[#253242] hover:border-[#2dd4bf]/60"
                  : "border-[#253242] hover:border-[#a855f7]/60"
              } hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Card glow */}
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                  isTeal
                    ? "bg-[#2dd4bf]/10 opacity-40"
                    : "bg-[#a855f7]/10 opacity-40"
                }`}
              />

              {/* Top row */}
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border ${
                    isTeal
                      ? "border-[#2dd4bf]/20 bg-[#2dd4bf]/10"
                      : "border-[#a855f7]/20 bg-[#a855f7]/10"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      isTeal ? "text-[#2dd4bf]" : "text-[#c084fc]"
                    }`}
                  >
                    {isTeal ? "◆" : "✦"}
                  </span>
                </div>

                <span className="rounded-full border border-[#263246] px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#7f8ba1]">
                  CASE STUDY
                </span>
              </div>

              {/* Number */}
              <div
                className={`relative z-10 mb-3 text-xs font-medium tracking-[0.3em] ${
                  isTeal ? "text-[#2dd4bf]" : "text-[#c084fc]"
                }`}
              >
                SYSTEM {project.number}
              </div>

              {/* Title */}
              <h3 className="relative z-10 mb-4 font-serif text-3xl leading-tight text-[#E8E6DE] md:text-[34px]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mb-7 min-h-[110px] text-base leading-7 text-[#9CA3AF] md:text-[17px]">
                {project.description}
              </p>

              {/* Highlight */}
              <div
                className={`relative z-10 mb-7 rounded-xl border p-5 ${
                  isTeal
                    ? "border-[#2dd4bf]/20 bg-[#2dd4bf]/5"
                    : "border-[#a855f7]/20 bg-[#a855f7]/5"
                }`}
              >
                <p className="text-sm italic leading-6 text-[#c9d0dc]">
                  "{project.highlight}"
                </p>
              </div>

              {/* Technologies */}
              <div className="relative z-10 mb-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#263246] bg-[#0b1019]/70 px-3 py-1.5 text-xs text-[#9CA3AF] transition-colors hover:border-[#526078] hover:text-[#E8E6DE]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Expanded details */}
              <div
                className={`relative z-10 overflow-hidden transition-all duration-500 ${
                  isExpanded
                    ? "mb-7 max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-[#202b3c] pt-5">
                  <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#6f7d92]">
                    SYSTEM CAPABILITIES
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-sm text-[#aab3c2]"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isTeal ? "bg-[#2dd4bf]" : "bg-[#c084fc]"
                          }`}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom actions */}
              <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-[#202b3c] pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium transition-colors ${
                    isTeal
                      ? "text-[#2dd4bf] hover:text-[#6ee7d8]"
                      : "text-[#c084fc] hover:text-[#d8aaff]"
                  }`}
                >
                  {project.number === "01"
                    ? "View on GitHub →"
                    : "View project →"}
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isExpanded ? null : project.number)
                  }
                  className="flex items-center gap-2 text-sm text-[#9CA3AF] transition-colors hover:text-[#E8E6DE]"
                >
                  {isExpanded ? "Hide details" : "Expand details"}
                  <span
                    className={`transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom statement */}
      <div className="relative mx-auto mt-10 max-w-[1400px]">
        <div className="rounded-2xl border border-[#202b3c] bg-[#0b1019]/50 px-6 py-5 text-center backdrop-blur">
          <p className="text-sm leading-6 text-[#7f8ba1]">
            More systems will be added as I continue building across AI
            automation, agentic workflows, fintech, and full-stack applications.
          </p>
        </div>
      </div>
    </section>
  );
}