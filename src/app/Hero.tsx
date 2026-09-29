"use client";

export default function Hero() {
  const systems = [
    ["01", "Generative AI"],
    ["02", "RAG & Agents"],
    ["03", "n8n Automation"],
    ["04", "APIs & Backend"],
  ];

  return (
    <section
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "70px 0",
      }}
    >
      {/* Subtle background accents */}
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#EBCFB2",
          opacity: 0.32,
          top: "-180px",
          right: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "#D5ACA9",
          opacity: 0.2,
          bottom: "-130px",
          left: "-90px",
        }}
      />

      <div
        className="section"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "55px",
          paddingBottom: "55px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <div className="section-label">
              AI AUTOMATION • GENAI • RAG
            </div>

            <h1
              style={{
                margin: "22px 0",
                fontSize: "clamp(3.3rem, 7vw, 6.3rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.07em",
                maxWidth: "800px",
                color: "#252B31",
              }}
            >
              Building
              <br />
              <span style={{ color: "#635BFF" }}>intelligent</span>
              <br />
              systems.
            </h1>

            <p
              style={{
                maxWidth: "570px",
                margin: "0 0 30px",
                color: "#6F6A68",
                fontSize: "1.08rem",
                lineHeight: 1.65,
              }}
            >
              AI automation systems connecting models, data,
              APIs, and real business workflows.
            </p>

            <div
              style={{
                display: "flex",
                gap: "13px",
                flexWrap: "wrap",
              }}
            >
              <a href="#projects" className="primary-button">
                Explore Projects →
              </a>

              <a href="#demos" className="secondary-button">
                Live Demos
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "9px",
                marginTop: "28px",
              }}
            >
              <span className="tech-tag">Python</span>
              <span className="tech-tag">LangChain</span>
              <span className="tech-tag-vibrant">RAG</span>
              <span className="tech-tag-vibrant">n8n</span>
              <span className="tech-tag">APIs</span>
            </div>
          </div>

          {/* RIGHT — AI SYSTEMS PANEL */}
          <div
            className="dark-card"
            style={{
              padding: "30px",
              minHeight: "440px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 65px rgba(66, 75, 84, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "34px",
              }}
            >
              <span
                style={{
                  fontSize: "0.74rem",
                  letterSpacing: "0.13em",
                  fontWeight: 800,
                  color: "#D9D5D2",
                }}
              >
                AI SYSTEMS
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "#EBCFB2",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#635BFF",
                  }}
                />
                ACTIVE
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {systems.map(([number, title], index) => (
                <div
                  key={number}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "15px",
                    borderRadius: "16px",
                    background: "#505861",
                    border: "1px solid #626B74",
                  }}
                >
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      flexShrink: 0,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      background:
                        index === 0
                          ? "#635BFF"
                          : index === 1
                            ? "#B38D97"
                            : index === 2
                              ? "#EBCFB2"
                              : "#C5BBAF",
                      color: index >= 2 ? "#424B54" : "white",
                      fontSize: "0.72rem",
                      fontWeight: 900,
                    }}
                  >
                    {number}
                  </span>

                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "0.96rem",
                    }}
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                position: "absolute",
                left: "30px",
                right: "30px",
                bottom: "27px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                  color: "#C5BBAF",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                <span>WORKFLOW</span>
                <span>END-TO-END</span>
              </div>

              <div
                style={{
                  height: "5px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #635BFF 0%, #B38D97 50%, #EBCFB2 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 45px !important;
          }
        }
      `}</style>
    </section>
  );
}