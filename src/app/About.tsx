"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  const animatedPhrases = ["AI agents", "smart workflows", "RAG assistants", "FinTech tools"];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const phrase = animatedPhrases[phraseIndex];
    let character = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        character += 1;
        setTypedText(phrase.slice(0, character));

        if (character >= phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1300);
          return;
        }

        timeout = setTimeout(tick, 95);
      } else {
        character -= 1;
        setTypedText(phrase.slice(0, character));

        if (character <= 0) {
          setPhraseIndex((current) => (current + 1) % animatedPhrases.length);
          return;
        }

        timeout = setTimeout(tick, 45);
      }
    };

    timeout = setTimeout(tick, 350);
    return () => clearTimeout(timeout);
  }, [phraseIndex]);

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${shown ? "is-visible" : ""}`}
    >
      <div className="about-container">
        {/* LEFT: INTRODUCTION */}

        <div className="about-content">
          <div className="about-label">
            <span>01</span>
            <span className="label-divider" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="typewriter-title" aria-label="I build intelligent AI systems">
            <span className="typewriter-prefix">I build </span>
            <span className="typewriter-phrase">{typedText}</span><span className="typewriter-caret" aria-hidden="true">|</span>
          </h2>

          <p className="about-intro">
            I&apos;m Maham Shaukat, an AI developer building intelligent
            applications and automated workflows that solve real-world
            business problems.
          </p>

          <p className="about-description">
            I work on AI agents, business process automation, RAG-based
            assistants, and backend integrations. My focus is on turning
            ideas into working systems that process information,
            connect tools, and make repetitive work more efficient.
          </p>

          <p className="about-description">
            Through projects in AI automation and financial operations,
            I explore how Python, LangChain, LangGraph, n8n, and modern
            web technologies can solve practical problems.
          </p>

          <div className="about-skills">
            <span className="skills-label">AREAS OF FOCUS</span>

            <div className="skills-list">
              <span>AI Engineering</span>
              <span>Workflow Automation</span>
              <span>FinTech</span>
              <span>Backend Integration</span>
            </div>
          </div>
        </div>

        {/* RIGHT: PHOTO AND EXPERTISE */}

        <div className="about-visual">
          <div className="about-photo-area">
            <div className="photo-outline" />

            <div className="photo-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo.jpg"
                alt="Maham Shaukat"
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          overflow: hidden;
          padding: 115px 28px;
          background: #0a0a0a;
          color: #f5f5f5;
          isolation: isolate;
        }

        .about-section::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -250px;
          right: -220px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: rgba(0, 191, 255, 0.045);
          filter: blur(100px);
          pointer-events: none;
        }

        .about-section::after {
          content: "";
          position: absolute;
          z-index: -1;
          bottom: -250px;
          left: -220px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: rgba(255, 45, 149, 0.035);
          filter: blur(100px);
          pointer-events: none;
        }

        .about-container {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.82fr);
          align-items: start;
          gap: clamp(30px, 4vw, 58px);
          max-width: 1240px;
          margin: 0 auto;
        }

        .about-content {
          min-width: 0;
        }

        .about-label {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 28px;
          color: #00bfff;
          font-family: "Trebuchet MS", "Segoe UI", sans-serif;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .about-label > span:first-child {
          color: #ff2d95;
        }

        .label-divider {
          width: 34px;
          height: 1px;
          background: #34343d;
        }

        .typewriter-title {
          margin: 0 0 24px;
          color: #f5f5f5;
          font-family: "Trebuchet MS", "Segoe UI", sans-serif;
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.035em;
        }

        .typewriter-prefix {
          color: #f5f5f5;
        }

        .typewriter-phrase {
          display: inline;
          color: #00bfff;
          overflow-wrap: anywhere;
        }

        .typewriter-caret {
          display: inline-block;
          margin-left: 2px;
          color: #ff2d95;
          animation: caret-blink 0.8s step-end infinite;
        }

        @keyframes caret-blink {
          50% { opacity: 0; }
        }

        .about-intro {
          max-width: 100%;
          margin: 0 0 18px;
          color: #dedee5;
          font-size: 21px;
          line-height: 1.65;
          font-weight: 700;
        }

        .about-description {
          max-width: 100%;
          margin: 0 0 15px;
          color: #a5a5b2;
          font-size: 16px;
          line-height: 1.85;
        }

        .about-skills {
          margin-top: 30px;
        }

        .skills-label {
          display: block;
          margin-bottom: 15px;
          color: #00bfff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skills-list span {
          padding: 9px 12px;
          border: 1px solid #292932;
          border-radius: 5px;
          background: #111116;
          color: #d4d4de;
          font-size: 11px;
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease;
        }

        .skills-list span:hover {
          border-color: #00bfff;
          color: #00bfff;
          background: #10171c;
        }

        .about-visual {
          min-width: 0;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.8s ease 0.2s,
            transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s;
        }

        .is-visible .about-visual {
          opacity: 1;
          transform: translateY(0);
        }

        .about-photo-area {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          padding: 0 10px 10px 0;
        }

        .photo-outline {
          position: absolute;
          inset: 10px 0 0 10px;
          border: 1px solid #00bfff;
          border-radius: 7px;
          opacity: 0.7;
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .about-photo-area:hover .photo-outline {
          border-color: #ff2d95;
          transform: translate(4px, 4px);
        }

        .photo-frame {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 4 / 4.4;
          border: 1px solid #292932;
          border-radius: 7px;
          background: #111116;
        }

        .about-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          transition: transform 0.7s ease;
        }

        .about-photo-area:hover .about-photo {
          transform: scale(1.035);
        }

        .about-content > * {
          opacity: 0;
          transform: translateY(16px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .is-visible .about-content > * {
          opacity: 1;
          transform: translateY(0);
        }

        .is-visible .about-label {
          transition-delay: 0.05s;
        }

        .is-visible .about-intro {
          transition-delay: 0.25s;
        }

        .is-visible .about-description {
          transition-delay: 0.35s;
        }

        .is-visible .about-skills {
          transition-delay: 0.45s;
        }
        @media (max-width: 1000px) {
          .about-section {
            padding: 90px 24px;
          }
          .about-container {
            gap: 32px;
          }
        }


        @media (max-width: 760px) {
          .about-section {
            padding: 76px 22px;
          }

          .about-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .typewriter-title {
            font-size: clamp(27px, 7vw, 36px);
          }

          .typewriter-phrase {
            white-space: normal;
          }

          .about-intro {
            font-size: 16px;
          }

          .about-description {
            font-size: 13px;
          }

          .about-visual {
            width: 100%;
            max-width: 440px;
            margin: 0 auto;
          }

          .about-photo-area {
            max-width: 350px;
          }
        }
        @media (max-width: 420px) {
          .about-label {
            font-size: 13px;
          }
        }


        @media (prefers-reduced-motion: reduce) {
          .typewriter-caret {
            animation: none !important;
          }

          .about-section *,
          .about-section *::before,
          .about-section *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }

          .about-content > *,
          .about-visual {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}