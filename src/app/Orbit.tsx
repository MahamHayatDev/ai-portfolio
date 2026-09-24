"use client";

import { useState } from "react";

const SKILLS = [
  { name: "Prompt Engineering", color: "#C9A227" },
  { name: "LangChain", color: "#3D9970" },
  { name: "n8n", color: "#FF6B6B" },
  { name: "Python", color: "#4A90D9" },
  { name: "Next.js", color: "#9B59B6" },
  { name: "FastAPI", color: "#2ECC71" },
];

export default function Orbit() {
  const radius = 150;
  const count = SKILLS.length;
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative mx-auto" style={{ width: 400, height: 400 }}>
      {/* Ambient glow behind everything */}
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(201,162,39,0.15), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Spoke lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {SKILLS.map((s, i) => {
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
          const x = 200 + radius * Math.cos(angle);
          const y = 200 + radius * Math.sin(angle);
          return (
            <line
              key={s.name}
              x1={200} y1={200} x2={x} y2={y}
              stroke={hovered === s.name ? s.color : "var(--rule)"}
              strokeWidth={hovered === s.name ? 2 : 1}
              opacity={hovered === s.name ? 0.8 : 0.4}
              style={{ transition: "all 0.2s ease" }}
            />
          );
        })}
        <circle cx={200} cy={200} r={radius} fill="none" stroke="var(--rule)" strokeWidth={1} opacity={0.5} />
      </svg>

      {/* Center hub */}
      <div
        className="absolute rounded-full flex items-center justify-center text-center text-sm font-serif"
        style={{
          width: 110, height: 110, top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", zIndex: 2,
          background: "var(--bg-panel)", border: "1px solid var(--gold)",
          color: "var(--gold)",
          boxShadow: "0 0 30px rgba(201,162,39,0.25)",
        }}
      >
        AI &amp; Automation
      </div>

      {/* Orbiting nodes */}
      {SKILLS.map((s, i) => {
        const duration = 14 + i * 3; // varied speeds
        const delay = -(i * (duration / count));

        return (
          <div
            key={s.name}
            className="absolute top-1/2 left-1/2"
            style={{
              width: 0, height: 0, zIndex: 2,
              animation: `orbit-spin ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
              animationPlayState: hovered === s.name ? "paused" : "running",
            }}
          >
            <div
              style={{
                position: "absolute", left: radius, top: 0,
                transform: "translate(-50%, -50%)",
                animation: `orbit-counter-spin ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
                animationPlayState: hovered === s.name ? "paused" : "running",
              }}
              onMouseEnter={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="rounded-full flex items-center justify-center text-center text-xs font-semibold px-2 cursor-pointer"
                style={{
                  width: hovered === s.name ? 90 : 76,
                  height: hovered === s.name ? 90 : 76,
                  background: "var(--bg-panel)",
                  border: `1.5px solid ${hovered === s.name ? s.color : "var(--rule)"}`,
                  color: hovered === s.name ? s.color : "var(--ink-dim)",
                  boxShadow: hovered === s.name ? `0 0 24px ${s.color}55` : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {s.name}
              </div>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}