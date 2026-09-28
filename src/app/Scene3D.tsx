"use client";

export default function Scene3D() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#FFF9F8]" />

      <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#FCEFF2] opacity-70 blur-3xl" />

      <div className="absolute -left-48 top-[38%] h-[460px] w-[460px] rounded-full bg-[#FCEFF2] opacity-55 blur-3xl" />

      <div className="absolute right-[20%] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#EBC1C8] opacity-20 blur-3xl" />

      <div className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-[#D98F9B] opacity-50" />

      <div className="absolute right-[16%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#D98F9B] opacity-40" />

      <div className="absolute left-[8%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-[#EBC1C8] opacity-60" />

      <div className="absolute right-[8%] bottom-[18%] h-2 w-2 rounded-full bg-[#D98F9B] opacity-35" />
    </div>
  );
}