export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "FinTech Ops Assistant",
      category: "AI • FINTECH • AUTOMATION",
      description:
        "An AI-powered invoice workflow that extracts financial data, detects anomalies, and sends results to a live dashboard.",
      technologies: [
        "n8n",
        "LangChain",
        "Groq",
        "Next.js",
        "Python",
      ],
      accent: "#635BFF",
      github:
        "https://github.com/MahamHayatDev/fintech-ops-assistant",
    },
    {
      number: "02",
      title: "BusinessFlow AI",
      category: "GENAI • BUSINESS • AUTOMATION",
      description:
        "An AI business assistant that handles product questions, recommendations, stock checks, policies, and order workflows.",
      technologies: [
        "Next.js",
        "Groq",
        "Supabase",
        "AI",
        "APIs",
      ],
      accent: "#B38D97",
      github:
        "https://github.com/MahamHayatDev/business-flow-ai",
    },
  ];

  return (
    <section id="projects" className="section">
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
          <div className="section-label">SELECTED WORK</div>

          <h2 className="section-title">
            Systems I’ve
            <br />
            <span style={{ color: "#635BFF" }}>built.</span>
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
          Practical AI systems designed around real workflows,
          automation, and business problems.
        </p>
      </div>

      {/* Projects */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "22px",
        }}
      >
        {projects.map((project) => (
          <article
            key={project.number}
            className="premium-card"
            style={{
              padding: "30px",
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
                height: "5px",
                background: project.accent,
              }}
            />

            {/* Top */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "35px",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "13px",
                  background: project.accent,
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 900,
                }}
              >
                {project.number}
              </span>

              <span
                style={{
                  color: "#706A68",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                }}
              >
                {project.category}
              </span>
            </div>

            <h3
              style={{
                margin: "0 0 14px",
                fontSize: "1.65rem",
                letterSpacing: "-0.035em",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                margin: "0 0 25px",
                color: "#706A68",
                lineHeight: 1.65,
                fontSize: "0.93rem",
                maxWidth: "520px",
              }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "28px",
              }}
            >
              {project.technologies.map((technology, index) => (
                <span
                  key={technology}
                  className={
                    index === 0 || index === 1
                      ? "tech-tag-vibrant"
                      : "tech-tag"
                  }
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                color: "#424B54",
                fontWeight: 800,
                fontSize: "0.86rem",
              }}
            >
              View on GitHub ↗
            </a>
          </article>
        ))}
      </div>

      {/* Bottom statement */}
      <div
        style={{
          marginTop: "30px",
          padding: "22px 25px",
          borderRadius: "20px",
          background: "#424B54",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          From workflow design → AI reasoning → deployed interface.
        </span>

        <span
          style={{
            color: "#EBCFB2",
            fontSize: "0.75rem",
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