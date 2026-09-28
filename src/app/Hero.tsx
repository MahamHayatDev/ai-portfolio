export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#FFF4F5] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#F5D5DC] opacity-70 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#F8E1E5] opacity-80 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Main introduction */}
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E5C4CA] bg-white/90 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C87584]" />

            <span className="text-xs font-semibold tracking-[0.18em] text-[#765D63]">
              AI AUTOMATION · GENERATIVE AI
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#A75D6B]">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight text-[#252326] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Maham Shaukat
          </h1>

          <h2 className="mt-7 max-w-3xl text-2xl font-semibold leading-tight text-[#40383B] md:text-3xl">
            AI Automation &amp; Generative AI Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#655D60] md:text-lg">
            I build practical AI systems that connect intelligent reasoning,
            automation, APIs, backend services, and user-facing applications
            into complete workflows.
          </p>

          {/* Hero buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#C87584] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(200,117,132,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B76575]"
            >
              View My Work
              <span className="ml-2">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#C87584] bg-white px-7 py-3.5 text-sm font-semibold text-[#8F4F5C] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FCE3E7]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Abstract AI visual — no personal photo */}
        <div className="relative mx-auto w-full max-w-[430px] lg:justify-self-end">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#F5D5DC] opacity-70 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#E3C3C9] bg-white/90 p-7 shadow-[0_24px_70px_rgba(120,70,80,0.12)] backdrop-blur-sm md:p-9">
            <div className="flex items-center justify-between border-b border-[#E9DDE0] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A75D6B]">
                  AI Systems
                </p>

                <p className="mt-2 text-sm text-[#766B6E]">
                  From reasoning to automation
                </p>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE3E7] text-[#A75D6B]">
                AI
              </span>
            </div>

            <div className="mt-7 space-y-4">
              <div className="rounded-2xl border border-[#E9DDE0] bg-[#FFF8F9] p-4">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#C87584]" />

                  <span className="text-sm font-semibold text-[#40383B]">
                    AI Reasoning
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-[#766B6E]">
                  LangChain · LangGraph · RAG · LLMs
                </p>
              </div>

              <div className="ml-8 rounded-2xl border border-[#E9DDE0] bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#D99BA6]" />

                  <span className="text-sm font-semibold text-[#40383B]">
                    Automation
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-[#766B6E]">
                  n8n · APIs · Webhooks · Workflows
                </p>
              </div>

              <div className="rounded-2xl border border-[#E9DDE0] bg-[#FFF8F9] p-4">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#B96D7B]" />

                  <span className="text-sm font-semibold text-[#40383B]">
                    Applications
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-[#766B6E]">
                  Python · FastAPI · Next.js · Supabase
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-[#252326] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EBC1C8]">
                Focus
              </p>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Building useful AI systems that connect reasoning,
                automation, and real applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}