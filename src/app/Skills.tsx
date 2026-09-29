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
    accent: "#635BFF",
  },

  "AI Agents": {
    description: "Designing reasoning and multi-step AI workflows.",
    skills: [
      "LangChain",
      "LangGraph",
      "Agentic Workflows",
      "Tool Calling",
      "Agent Reasoning",
      "Anomaly Detection",
    ],
    accent: "#B38D97",
  },

  "Automation": {
    description: "Connecting AI, APIs, and business processes.",
    skills: [
      "n8n",
      "Workflow Automation",
      "API Orchestration",
      "Webhooks",
      "HTTP Requests",
      "Process Automation",
    ],
    accent: "#EBCFB2",
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
    accent: "#635BFF",
  },

  "Frontend": {
    description: "Creating interfaces for AI-powered applications.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Dashboards",
      "Recharts",
    ],
    accent: "#B38D97",
  },

  "Data & Infrastructure": {
    description: "Working with data, deployment, and development tools.",
    skills: [
      "Supabase",
      "Vector Storage",
      "Database Integration",
      "Vercel",
      "Git",
      "GitHub",
    ],
    accent: "#EBCFB2",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: "30px",
          marginBottom: "45px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="section-label">TECHNICAL STACK</div>

          <h2 className="section-title">
            Tools behind
            <br />
            <span style={{ color: "#635BFF" }}>the systems.</span>
          </h2>
        </div>

        <p
          style={{
            maxWidth: "430px",
            margin: 0,
            color: "#706A68",
            lineHeight: 1.65,
            fontSize: "0.95rem",
          }}
        >
          A practical stack spanning Generative AI, agents,
          automation, backend APIs, frontend applications, and data.
        </p>
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
        }}
      >
        {Object.entries(SKILL_CATEGORIES).map(
          ([category, data]) => (
            <article
              key={category}
              className="premium-card"
              style={{
                padding: "25px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: data.accent,
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "13px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.05rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {category}
                </h3>

                <span
                  style={{
                    minWidth: "28px",
                    height: "28px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "9px",
                    background: "#F1ECE6",
                    color: "#424B54",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                  }}
                >
                  {data.skills.length}
                </span>
              </div>

              <p
                style={{
                  margin: "0 0 18px",
                  color: "#706A68",
                  fontSize: "0.8rem",
                  lineHeight: 1.5,
                }}
              >
                {data.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                }}
              >
                {data.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={
                      index < 2
                        ? "tech-tag-vibrant"
                        : "tech-tag"
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          )
        )}
      </div>

      {/* Core focus */}
      <div
        style={{
          marginTop: "25px",
          padding: "25px 28px",
          borderRadius: "22px",
          background: "#424B54",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              marginBottom: "7px",
              color: "#EBCFB2",
              fontSize: "0.68rem",
              fontWeight: 900,
              letterSpacing: "0.12em",
            }}
          >
            CORE FOCUS
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "0.92rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Connecting AI reasoning, automation, APIs, data,
            and user-facing applications into complete workflows.
          </p>
        </div>

        <div
          style={{
            color: "#ECEAFF",
            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          AI → AUTOMATION → APPLICATION
        </div>
      </div>
    </section>
  );
}