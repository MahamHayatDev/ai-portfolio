"use client";

import { useState } from "react";

const projects = [
  {
    title: "Fintech Ops Assistant",
    description:
      "An AI invoice-automation system that extracts financial data, checks vendor history, and flags anomalies with explained reasoning. n8n handles orchestration while LangChain and Groq handle the reasoning layer.",
    highlight:
      "Invoice anomaly detection with reasoning — not just a red flag, but an explanation of why the transaction needs review.",
    technologies: ["n8n", "LangChain", "Groq", "FastAPI", "Next.js"],
    github: "https://github.com/MahamHayatDev/fintech-ops-assistant",
    details: [
      "Simulated invoice trigger",
      "Automated invoice extraction",
      "Vendor-history comparison",
      "AI anomaly reasoning",
      "Live dashboard output",
    ],
  },
  {
    title: "BusinessFlow AI",
    description:
      "An AI business assistant built for clothing e-commerce workflows, handling product questions, recommendations, policy lookups, conversation memory, and real order placement through an interactive dashboard.",
    highlight:
      "Multi-requirement product recommendations, conversation memory, and data-grounded business insights from live stock and order data.",
    technologies: ["Next.js", "Supabase", "Groq", "TypeScript", "Vercel"],
    github: "https://github.com/MahamHayatDev/business-flow-ai",
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
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#F5D5DC] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#A75D6B]">
            Featured Work
          </p>

          <h2 className="font-serif text-4xl tracking-tight text-[#252326] md:text-5xl">
            AI systems built from idea to working application.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#706A6D] md:text-lg">
            Two end-to-end systems demonstrating AI reasoning, automation,
            backend services, data workflows, and user-facing applications.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isOpen = openProject === project.title;

            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#E9DDE0] bg-white shadow-[0_18px_60px_rgba(82,54,60,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(82,54,60,0.11)]"
              >
                {/* Project header */}
                <div className="border-b border-[#E9DDE0] bg-[#FCE3E7] p-7 md:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A75D6B]">
                        0{index + 1} · AI SYSTEM
                      </p>

                      <h3 className="font-serif text-3xl tracking-tight text-[#252326] md:text-4xl">
                        {project.title}
                      </h3>
                    </div>

                    <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCC1C7] bg-white text-sm text-[#8C5662] sm:flex">
                      ↗
                    </span>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="text-base leading-8 text-[#5F585B]">
                    {project.description}
                  </p>

                  {/* Highlight */}
                  <div className="mt-7 rounded-2xl border border-[#E9DDE0] bg-[#FFF9F8] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A75D6B]">
                      Key capability
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#51494C]">
                      {project.highlight}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A8184]">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#E9DDE0] bg-white px-3.5 py-1.5 text-xs font-medium text-[#625A5D]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div className="mt-7 border-t border-[#E9DDE0] pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenProject(isOpen ? null : project.title)
                      }
                      className="flex w-full items-center justify-between text-left text-sm font-medium text-[#403A3D] transition hover:text-[#A75D6B]"
                    >
                      <span>
                        {isOpen ? "Hide system details" : "View system details"}
                      </span>

                      <span className="text-lg">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-5 space-y-3">
                        {project.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-start gap-3 text-sm leading-6 text-[#706A6D]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C87584]" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* GitHub */}
                  <div className="mt-7">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-[#C87584] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(200,117,132,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B76575]"
                    >
                      View on GitHub
                      <span className="ml-2">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}