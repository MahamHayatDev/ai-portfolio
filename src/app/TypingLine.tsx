"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Practical AI Solutions.",
  "Intelligent Systems.",
  "Automated Workflows.",
  "Impactful Innovations.",
];

export default function TypingLine() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const delay = deleting
      ? 40
      : text.length === currentPhrase.length
        ? 1800
        : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <div className="typing-line">
      <span className="typing-intro">I turn complex ideas into</span>

      <span className="typing-output">
        {text}
        <span className="typing-cursor" aria-hidden="true" />
      </span>

      <style jsx>{`
        .typing-line {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          margin-top: 24px;
          font-family: inherit;
          font-size: clamp(1.05rem, 2vw, 1.4rem);
          font-weight: 400;
          line-height: 1.6;
        }

        .typing-intro {
          color: #f5f5f7;
        }

        .typing-output {
          min-height: 1.6em;
          color: #00bfff;
          font-weight: 500;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          margin-left: 4px;
          background: #ff2d95;
          vertical-align: -0.15em;
          animation: blink 0.8s steps(2, start) infinite;
        }

        @keyframes blink {
          to {
            visibility: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .typing-cursor {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
