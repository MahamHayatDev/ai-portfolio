export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#FCEFF2] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#B46F7B]">
            Profile
          </p>

          <h2 className="font-serif text-4xl tracking-tight text-[#252326] md:text-5xl">
            I build AI systems that do more than generate text.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#706A6D] md:text-lg">
            My focus is practical Generative AI, intelligent automation, and
            end-to-end application development.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main content */}
          <div className="rounded-3xl border border-[#E9DDE0] bg-white p-7 shadow-[0_18px_60px_rgba(82,54,60,0.06)] md:p-10">
            <div className="space-y-6 text-base leading-8 text-[#5F585B] md:text-lg">
              <p>
                I&apos;m an AI and automation developer focused on building
                practical Generative AI applications, intelligent agents, and
                end-to-end automation systems.
              </p>

              <p>
                My work combines{" "}
                <strong className="font-medium text-[#3B3538]">
                  RAG, AI agents, LangChain, LangGraph, n8n, APIs, and LLM
                  integrations
                </strong>{" "}
                to turn ideas into working applications. I also work across
                backend and frontend systems using Python, FastAPI, Next.js,
                React, TypeScript, Supabase, and REST APIs.
              </p>

              <p>
                I enjoy building systems that go beyond simple AI
                demonstrations: designing the workflow, connecting services,
                implementing the reasoning layer, automating processes, and
                presenting the results through usable interfaces.
              </p>
            </div>

            <div className="my-8 h-px bg-[#E9DDE0]" />

            <div className="rounded-2xl bg-[#FCEFF2] p-5 md:p-6">
              <p className="text-sm leading-7 text-[#51494C] md:text-base">
                <span className="font-semibold text-[#3B3538]">
                  My approach:
                </span>{" "}
                build AI systems that are reliable, explainable, and useful in
                real-world workflows — not just models that produce impressive
                outputs.
              </p>
            </div>
          </div>

          {/* Profile card */}
          <div className="overflow-hidden rounded-3xl border border-[#E9DDE0] bg-white p-3 shadow-[0_18px_60px_rgba(82,54,60,0.07)]">
            <img
              src="/photo.jpg"
              alt="Maham Shaukat"
              className="h-[440px] w-full rounded-[1.35rem] object-cover"
            />

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B46F7B]">
                Current focus
              </p>

              <p className="mt-3 text-sm leading-6 text-[#5F585B]">
                AI automation · Generative AI · Agentic workflows · Backend
                systems
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:mahamhayat192@gmail.com"
            className="rounded-full border border-[#E9DDE0] bg-white px-5 py-2.5 text-sm font-medium text-[#4F494C] transition hover:border-[#D98F9B] hover:bg-[#FCEFF2]"
          >
            Email
          </a>

          <a
            href="https://github.com/MahamHayatDev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#E9DDE0] bg-white px-5 py-2.5 text-sm font-medium text-[#4F494C] transition hover:border-[#D98F9B] hover:bg-[#FCEFF2]"
          >
            GitHub
          </a>

          <a
            href="https://github.com/MahamHayatDev/fintech-ops-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#E9DDE0] bg-white px-5 py-2.5 text-sm font-medium text-[#4F494C] transition hover:border-[#D98F9B] hover:bg-[#FCEFF2]"
          >
            Latest Project
          </a>
        </div>
      </div>
    </section>
  );
}