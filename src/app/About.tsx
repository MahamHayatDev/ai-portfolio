export default function About() {
  const highlights = [
    {
      number: "01",
      title: "AI Systems",
      text: "GenAI applications, RAG pipelines, and intelligent agents.",
      accent: "#635BFF",
    },
    {
      number: "02",
      title: "Automation",
      text: "n8n workflows connecting AI, APIs, and business processes.",
      accent: "#B38D97",
    },
    {
      number: "03",
      title: "FinTech",
      text: "AI-powered systems for invoices, data, and financial operations.",
      accent: "#EBCFB2",
    },
  ];

  return (
    <section id="about" className="section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: "70px",
          alignItems: "start",
        }}
      >
        {/* Heading */}
        <div>
          <div className="section-label">ABOUT ME</div>

          <h2 className="section-title">
            Turning ideas into
            <br />
            <span style={{ color: "#635BFF" }}>working systems.</span>
          </h2>
        </div>

        {/* Content */}
        <div>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "1.12rem",
              lineHeight: 1.7,
              color: "#424B54",
              maxWidth: "650px",
            }}
          >
            I’m Maham, a Financial Technology student focused on
            Generative AI, automation, and intelligent applications.
          </p>

          <p
            style={{
              margin: "0 0 35px",
              fontSize: "0.98rem",
              lineHeight: 1.7,
              color: "#706A68",
              maxWidth: "620px",
            }}
          >
            I enjoy turning real business problems into practical
            AI-powered workflows using modern tools and APIs.
          </p>

          {/* Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "14px",
            }}
          >
            {highlights.map((item) => (
              <div
                key={item.number}
                className="premium-card"
                style={{
                  padding: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "11px",
                    background: item.accent,
                    color:
                      item.accent === "#EBCFB2"
                        ? "#424B54"
                        : "white",
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    marginBottom: "18px",
                  }}
                >
                  {item.number}
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "0.98rem",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#706A68",
                    fontSize: "0.82rem",
                    lineHeight: 1.55,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}