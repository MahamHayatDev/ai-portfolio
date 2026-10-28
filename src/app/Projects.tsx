export default function Projects() {
const projects = [
{
number: "01",
title: "FinTech Ops Assistant",
category: "AI • FINTECH • AUTOMATION",
description:
"An AI-powered invoice workflow that extracts financial data, detects anomalies, and sends results to a live dashboard.",
technologies: ["n8n", "LangChain", "Groq", "Next.js", "Python"],
accent: "#00BFFF",
github: "https://github.com/MahamHayatDev/fintech-ops-assistant",
},
{
number: "02",
title: "BusinessFlow AI",
category: "GENAI • BUSINESS • AUTOMATION",
description:
"An AI business assistant that handles product questions, recommendations, stock checks, policies, and order workflows.",
technologies: ["Next.js", "Groq", "Supabase", "AI", "APIs"],
accent: "#FF2D95",
github: "https://github.com/MahamHayatDev/business-flow-ai",
},
{
number: "03",
title: "SupportOps Agent",
category: "AGENTIC AI • RAG • AUTOMATION",
description:
"An AI support assistant combining retrieval-augmented generation (RAG), LangGraph routing, human-in-the-loop escalation, evaluation, and a support dashboard.",
technologies: ["LangGraph", "RAG", "Supabase", "Groq", "Next.js"],
accent: "#00BFFF",
github: "https://github.com/MahamHayatDev/supportops-agent",
},
{
number: "04",
title: "ClientPilot",
category: "AI AGENTS • LEAD RESEARCH • AUTOMATION",
description:
"An AI-assisted lead research workflow that researches companies, scores potential leads, and drafts personalized outreach for human review before sending.",
technologies: [
"Python",
"FastAPI",
"LangGraph",
"n8n",
"Supabase",
"Gemini",
],
accent: "#FF2D95",
github: "https://github.com/MahamHayatDev/clientpilot",
},
];

return (
<section
id="projects"
className="section"
style={{
background: "#000000",
color: "#FFFFFF",
}}
>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "end",
gap: "22px",
marginBottom: "32px",
flexWrap: "wrap",
}}
> <div>
<div className="section-label" style={{ color: "#00BFFF" }}>
SELECTED WORK </div>

```
      <h2 className="section-title" style={{ color: "#FFFFFF" }}>
        Systems I’ve
        <br />
        <span style={{ color: "#00BFFF" }}>built.</span>
      </h2>
    </div>

    <p
      style={{
        maxWidth: "400px",
        margin: 0,
        color: "#B8B8C2",
        lineHeight: 1.65,
        fontSize: "0.92rem",
      }}
    >
      Practical AI systems designed around real workflows, automation,
      and business problems.
    </p>
  </div>

  <div
    className="projects-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "18px",
    }}
  >
    {projects.map((project) => (
      <article
        key={project.number}
        className="premium-card"
        style={{
          padding: "25px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          background: "#101014",
          color: "#FFFFFF",
          border: "1px solid #292932",
          borderRadius: "17px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            background: project.accent,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginBottom: "22px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              width: "40px",
              height: "40px",
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              borderRadius: "11px",
              background: project.accent + "18",
              border: "1px solid " + project.accent + "70",
              color: project.accent,
              fontSize: "0.74rem",
              fontWeight: 900,
            }}
          >
            {project.number}
          </span>

          <span
            style={{
              color: project.accent,
              fontSize: "0.64rem",
              fontWeight: 800,
              letterSpacing: "0.07em",
              lineHeight: 1.5,
              textAlign: "right",
            }}
          >
            {project.category}
          </span>
        </div>

        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "1.45rem",
            lineHeight: 1.3,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            margin: "0 0 19px",
            color: "#B8B8C2",
            lineHeight: 1.75,
            fontSize: "0.9rem",
            maxWidth: "520px",
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "7px",
            flexWrap: "wrap",
            marginBottom: "21px",
          }}
        >
          {project.technologies.map((technology, index) => (
            <span
              key={technology}
              className={
                index < 2 ? "tech-tag-vibrant" : "tech-tag"
              }
              style={{
                background: "#191920",
                color:
                  index === 0 ? project.accent : "#E0E0E8",
                border:
                  index === 0
                    ? "1px solid " + project.accent + "65"
                    : "1px solid #30303A",
              }}
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"View " + project.title + " on GitHub"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            alignSelf: "flex-start",
            color: project.accent,
            fontWeight: 800,
            fontSize: "0.84rem",
            textDecoration: "none",
          }}
        >
          View on GitHub ↗
        </a>
      </article>
    ))}
  </div>

  <div
    style={{
      marginTop: "22px",
      padding: "17px 21px",
      borderRadius: "16px",
      background: "#101014",
      border: "1px solid #292932",
      color: "#FFFFFF",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "14px",
      flexWrap: "wrap",
    }}
  >
    <span
      style={{
        fontSize: "0.85rem",
        lineHeight: 1.6,
        fontWeight: 700,
        color: "#E0E0E8",
      }}
    >
      From workflow design → AI reasoning → human-approved automation →
      deployed interfaces.
    </span>

    <span
      style={{
        color: "#FF2D95",
        fontSize: "0.72rem",
        fontWeight: 800,
        letterSpacing: "0.08em",
      }}
    >
      END-TO-END
    </span>
  </div>
</section>

);
}
