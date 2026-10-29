"use client";

export default function Scene3D() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="glow-a absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#007BA7] opacity-[0.12] blur-3xl" />

      <div className="glow-b absolute -left-48 top-[38%] h-[460px] w-[460px] rounded-full bg-[#FF2D95] opacity-[0.08] blur-3xl" />

      <div className="glow-a absolute right-[20%] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#007BA7] opacity-[0.08] blur-3xl" />

      <div className="dot dot-1 absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-[#FF2D95] opacity-50" />
      <div className="dot dot-2 absolute right-[16%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#00BFFF] opacity-50" />
      <div className="dot dot-3 absolute left-[8%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-[#00BFFF] opacity-60" />
      <div className="dot dot-4 absolute right-[8%] bottom-[18%] h-2 w-2 rounded-full bg-[#FF2D95] opacity-40" />

      <style jsx>{`
        .glow-a {
          animation: glowDrift 12s ease-in-out infinite;
        }

        .glow-b {
          animation: glowDrift 15s ease-in-out infinite reverse;
        }

        .dot {
          animation: dotFloat 7s ease-in-out infinite;
        }

        .dot-2 {
          animation-duration: 9s;
          animation-delay: 1s;
        }

        .dot-3 {
          animation-duration: 8s;
          animation-delay: 2s;
        }

        .dot-4 {
          animation-duration: 10s;
          animation-delay: 0.5s;
        }

        @keyframes glowDrift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 25px);
          }
        }

        @keyframes dotFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .glow-a,
          .glow-b,
          .dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}