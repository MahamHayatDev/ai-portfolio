export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-10 md:px-16 py-24 w-full overflow-hidden"
    >
      <div className="mb-12">
        <p className="text-base tracking-widest text-[#2dd4bf] mb-3">
          PROFILE
        </p>

        <h2 className="text-6xl font-serif mb-4">
          About
        </h2>

        <p className="text-xl text-[#9CA3AF] max-w-2xl">
          AI automation and Generative AI development focused on building
          practical, end-to-end intelligent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-start">
        <div className="rounded-2xl border border-[#2A3142] bg-[#10151F]/70 backdrop-blur p-8 md:p-10 text-xl text-[#c9cdd6] leading-relaxed space-y-7">
          
          <p>
            I’m an AI and automation developer focused on building practical
            Generative AI applications, intelligent agents, and end-to-end
            automation systems.
          </p>

          <p>
            My work combines{" "}
            <span className="text-[#E8E6DE]">
              RAG, AI agents, LangChain, LangGraph, n8n, APIs, and LLM
              integrations
            </span>{" "}
            to turn ideas into working applications. I also work across the
            backend and frontend, using technologies such as Python, FastAPI,
            Next.js, React, TypeScript, Supabase, and REST APIs.
          </p>

          <p className="text-[#9CA3AF]">
            I enjoy building systems that go beyond simple AI demonstrations:
            designing the workflow, connecting services, implementing the
            reasoning layer, automating processes, and presenting the results
            through usable interfaces.
          </p>

          <div className="h-px w-full bg-[#2A3142]" />

          <p className="text-[#b9d4e4]">
            I care about building AI systems that are reliable, explainable,
            and useful in real-world workflows — not just models that produce
            impressive outputs.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Generative AI",
              "RAG",
              "AI Agents",
              "LangChain",
              "LangGraph",
              "n8n",
              "Python",
              "FastAPI",
              "APIs",
              "Next.js",
              "React",
              "TypeScript",
              "Supabase",
              "Vector Databases",
              "Groq",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-[#2A3142] bg-[#0c111b] text-sm text-[#9CA3AF] hover:text-[#E8E6DE] hover:border-[#2dd4bf]/50 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <img
            src="/photo.jpg"
            alt="Maham Hayat"
            className="w-full h-[600px] object-cover rounded-2xl border border-[#2A3142] shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-12 text-base text-[#9CA3AF]">
        <a
          href="mailto:mahamhayat192@gmail.com"
          className="hover:text-[#E8E6DE] transition"
        >
          Email
        </a>

        <a
          href="https://github.com/MahamHayatDev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E8E6DE] transition"
        >
          GitHub
        </a>

        <a
          href="https://github.com/MahamHayatDev/fintech-ops-assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E8E6DE] transition"
        >
          Latest Project
        </a>
      </div>
    </section>
  );
}