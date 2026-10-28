"use client";

const systems = [
{ number: "01", title: "AI Agents & LLM Applications", accent: "#00BFFF" },
{ number: "02", title: "Intelligent Workflow Automation", accent: "#FF2D95" },
{ number: "03", title: "RAG & Knowledge Assistants", accent: "#00BFFF" },
{ number: "04", title: "Backend Systems & API Integrations", accent: "#FF2D95" },
];

export default function Hero() {
return ( <section className="hero-section"> <div className="hero-glow hero-glow-blue" aria-hidden="true" /> <div className="hero-glow hero-glow-pink" aria-hidden="true" />

```
  <div className="hero-container">
    <div className="hero-grid">
      <div className="hero-intro">
        <p className="hero-name">Maham Shaukat</p>

        <p className="hero-role">AI Automation & Backend Engineer</p>

        <h1 className="hero-headline">
          <span className="headline-main">
            Building Intelligent Systems.
          </span>
          <span className="headline-accent">
            Automating What Matters.
          </span>
        </h1>

        <p className="hero-description">
          I build AI-powered applications, intelligent agents, and
          automated workflows that solve real-world business problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-primary">
            Explore Projects <span aria-hidden="true">↗</span>
          </a>

          <a href="#contact" className="hero-button hero-button-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="systems-panel">
        <div className="systems-header">
          <span className="systems-heading">AI SYSTEMS</span>
          <span className="systems-label">CORE EXPERTISE</span>
        </div>

        <div className="systems-list">
          {systems.map((system) => (
            <div className="system-item" key={system.number}>
              <span
                className="system-number"
                style={{
                  color: system.accent,
                  borderColor: `${system.accent}65`,
                  backgroundColor: `${system.accent}16`,
                }}
              >
                {system.number}
              </span>

              <span className="system-title">{system.title}</span>

              <span
                className="system-indicator"
                style={{ backgroundColor: system.accent }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        <div className="systems-footer">
          Connecting AI, data, and business workflows.
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .hero-section {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 85vh;
      padding: 80px 0 65px;
      overflow: hidden;
      background: #0a0a0a;
      color: #f5f5f7;
      isolation: isolate;
    }

    .hero-glow {
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      filter: blur(130px);
      pointer-events: none;
    }

    .hero-glow-blue {
      top: -180px;
      right: -100px;
      width: 360px;
      height: 360px;
      background: #007ba7;
      opacity: 0.15;
    }

    .hero-glow-pink {
      bottom: -170px;
      left: -100px;
      width: 280px;
      height: 280px;
      background: #ff2d95;
      filter: blur(140px);
      opacity: 0.1;
    }

    .hero-container {
      position: relative;
      width: min(1120px, 92%);
      margin: 0 auto;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 58px;
      align-items: center;
    }

    .hero-name {
      margin: 0 0 13px;
      color: #00bfff;
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.015em;
    }

    .hero-role {
      margin: 0 0 24px;
      color: #a7a7b3;
      font-size: 0.77rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      line-height: 1.7;
      text-transform: uppercase;
    }

    .hero-headline {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      max-width: 590px;
      margin: 0 0 23px;
      font-family: "Trebuchet MS", "Segoe UI", sans-serif;
      font-size: clamp(2rem, 3.2vw, 3.05rem);
      font-weight: 500;
      line-height: 1.22;
      letter-spacing: -0.045em;
    }

    .headline-main {
      color: #f5f5f7;
      font-weight: 600;
    }

    .headline-accent {
      color: #ff2d95;
      font-weight: 400;
      letter-spacing: -0.035em;
    }

    .hero-description {
      max-width: 490px;
      margin: 0 0 28px;
      color: #b0b0bc;
      font-size: 0.97rem;
      line-height: 1.85;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 13px;
    }

    .hero-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 700;
      text-decoration: none;
      transition:
        transform 180ms ease,
        background 180ms ease,
        border-color 180ms ease;
    }

    .hero-button:hover {
      transform: translateY(-2px);
    }

    .hero-button-primary {
      border: 1px solid #007ba7;
      background: #007ba7;
      color: #ffffff;
    }

    .hero-button-primary:hover {
      border-color: #00a1d6;
      background: #00a1d6;
    }

    .hero-button-outline {
      border: 1px solid #ff2d95;
      background: transparent;
      color: #ff7ab8;
    }

    .hero-button-outline:hover {
      background: rgba(255, 45, 149, 0.08);
    }

    .systems-panel {
      padding: 24px;
      border: 1px solid #292a35;
      border-radius: 16px;
      background: rgba(18, 18, 24, 0.9);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
    }

    .systems-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 20px;
    }

    .systems-heading {
      color: #f5f5f7;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
    }

    .systems-label {
      color: #00bfff;
      font-size: 0.66rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    .systems-list {
      display: grid;
      gap: 10px;
    }

    .system-item {
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 14px 12px;
      border: 1px solid #292a35;
      border-radius: 9px;
      background: #101016;
      transition:
        border-color 180ms ease,
        transform 180ms ease;
    }

    .system-item:hover {
      border-color: #454552;
      transform: translateX(3px);
    }

    .system-number {
      display: grid;
      flex-shrink: 0;
      place-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid;
      border-radius: 8px;
      font-size: 0.72rem;
      font-weight: 800;
    }

    .system-title {
      flex: 1;
      color: #e6e6ec;
      font-size: 0.86rem;
      font-weight: 600;
      line-height: 1.5;
    }

    .system-indicator {
      flex-shrink: 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      opacity: 0.9;
    }

    .systems-footer {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid #292a35;
      color: #9292a0;
      font-size: 0.75rem;
      line-height: 1.6;
    }

    @media (max-width: 850px) {
      .hero-section {
        min-height: auto;
        padding: 75px 0 60px;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 38px;
      }

      .hero-headline {
        font-size: clamp(2rem, 5.5vw, 2.8rem);
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 60px 0 45px;
      }

      .hero-grid {
        gap: 30px;
      }

      .hero-name {
        font-size: 1.1rem;
      }

      .hero-role {
        font-size: 0.7rem;
        letter-spacing: 0.09em;
      }

      .hero-headline {
        font-size: 2rem;
        line-height: 1.25;
      }

      .hero-description {
        font-size: 0.92rem;
      }

      .systems-panel {
        padding: 17px;
      }

      .system-item {
        gap: 10px;
        padding: 12px 9px;
      }

      .system-title {
        font-size: 0.8rem;
      }

      .hero-button {
        padding: 11px 15px;
        font-size: 0.83rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-button,
      .system-item {
        transition: none;
      }

      .hero-button:hover,
      .system-item:hover {
        transform: none;
      }
    }
  `}</style>
</section>

);
}
