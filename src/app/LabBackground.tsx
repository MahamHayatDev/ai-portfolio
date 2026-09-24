"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  phase: number;
};

export default function LabBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const profile = new Image();
    profile.src = "/profile.jpg";

    let animationFrame = 0;
    let time = 0;

    const particles: Particle[] = Array.from(
      { length: 130 },
      () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.1 + 0.02,
        opacity: Math.random() * 0.45 + 0.08,
        phase: Math.random() * Math.PI * 2,
      })
    );

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    window.addEventListener("resize", resize);

    function drawGlow(
      x: number,
      y: number,
      radius: number,
      r: number,
      g: number,
      b: number,
      opacity: number
    ) {
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
      );

      gradient.addColorStop(
        0,
        `rgba(${r}, ${g}, ${b}, ${opacity})`
      );

      gradient.addColorStop(
        1,
        `rgba(${r}, ${g}, ${b}, 0)`
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawOrbit(
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      rotation: number,
      opacity: number,
      color: string
    ) {
      ctx.save();

      ctx.translate(cx, cy);
      ctx.rotate(rotation);

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        rx,
        ry,
        0,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = color.replace(
        "OPACITY",
        String(opacity)
      );

      ctx.lineWidth = 1;

      ctx.stroke();

      ctx.restore();
    }

    function drawOrbitNode(
      x: number,
      y: number,
      size: number
    ) {
      drawGlow(
        x,
        y,
        size * 8,
        45,
        240,
        220,
        0.18
      );

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(110, 255, 235, 0.95)";

      ctx.fill();

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        size * 2.8,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(80, 245, 225, 0.28)";

      ctx.lineWidth = 0.7;

      ctx.stroke();
    }

    function drawProfileSystem(
      cx: number,
      cy: number
    ) {
      const size = Math.min(
        58,
        Math.max(44, window.innerWidth * 0.045)
      );

      /*
       * CENTRAL SEA-GREEN GLOW
       */

      drawGlow(
        cx,
        cy,
        size * 3.2,
        25,
        245,
        220,
        0.18
      );

      /*
       * OUTER ROTATING ORBIT
       */

      ctx.save();

      ctx.translate(cx, cy);

      ctx.rotate(time * 0.00045);

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        size + 52,
        size + 22,
        0,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(70, 245, 220, 0.38)";

      ctx.lineWidth = 1.2;

      ctx.stroke();

      /*
       * SECONDARY PURPLE ARC
       */

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        size + 66,
        size + 8,
        0,
        Math.PI * 0.2,
        Math.PI * 1.25
      );

      ctx.strokeStyle =
        "rgba(165, 95, 255, 0.42)";

      ctx.lineWidth = 1;

      ctx.stroke();

      /*
       * MOVING NODE
       */

      const angle = time * 0.002;

      const nodeX =
        Math.cos(angle) * (size + 52);

      const nodeY =
        Math.sin(angle) * (size + 22);

      drawOrbitNode(
        nodeX,
        nodeY,
        2.8
      );

      ctx.restore();

      /*
       * PROFILE BOX
       */

      const boxSize = size * 2;

      const left = cx - boxSize / 2;
      const top = cy - boxSize / 2;

      /*
       * BIG SEA-GREEN OUTER GLOW
       */

      drawGlow(
        cx,
        cy,
        size * 1.8,
        40,
        255,
        225,
        0.12
      );

      /*
       * BOX BACKGROUND
       */

      ctx.save();

      ctx.beginPath();

      ctx.roundRect(
        left,
        top,
        boxSize,
        boxSize,
        18
      );

      ctx.fillStyle =
        "rgba(4, 25, 29, 0.82)";

      ctx.fill();

      /*
       * IMAGE
       */

      ctx.clip();

      if (profile.complete) {
        ctx.drawImage(
          profile,
          left,
          top,
          boxSize,
          boxSize
        );
      }

      ctx.restore();

      /*
       * SEA-GREEN BORDER
       */

      ctx.beginPath();

      ctx.roundRect(
        left,
        top,
        boxSize,
        boxSize,
        18
      );

      ctx.strokeStyle =
        "rgba(75, 255, 225, 0.75)";

      ctx.lineWidth = 1.5;

      ctx.stroke();

      /*
       * INNER BORDER
       */

      ctx.beginPath();

      ctx.roundRect(
        left + 5,
        top + 5,
        boxSize - 10,
        boxSize - 10,
        14
      );

      ctx.strokeStyle =
        "rgba(160, 255, 245, 0.18)";

      ctx.lineWidth = 1;

      ctx.stroke();

      /*
       * FOUR CORNER MARKERS
       */

      const marker = 10;

      ctx.strokeStyle =
        "rgba(100, 255, 235, 0.9)";

      ctx.lineWidth = 1.5;

      // Top-left
      ctx.beginPath();
      ctx.moveTo(left, top + marker);
      ctx.lineTo(left, top);
      ctx.lineTo(left + marker, top);
      ctx.stroke();

      // Top-right
      ctx.beginPath();
      ctx.moveTo(
        left + boxSize - marker,
        top
      );
      ctx.lineTo(
        left + boxSize,
        top
      );
      ctx.lineTo(
        left + boxSize,
        top + marker
      );
      ctx.stroke();

      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(
        left,
        top + boxSize - marker
      );
      ctx.lineTo(
        left,
        top + boxSize
      );
      ctx.lineTo(
        left + marker,
        top + boxSize
      );
      ctx.stroke();

      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(
        left + boxSize - marker,
        top + boxSize
      );
      ctx.lineTo(
        left + boxSize,
        top + boxSize
      );
      ctx.lineTo(
        left + boxSize,
        top + boxSize - marker
      );
      ctx.stroke();

      /*
       * SMALL "AI CORE" LABEL
       */

      ctx.font =
        "9px monospace";

      ctx.fillStyle =
        "rgba(130, 255, 235, 0.7)";

      ctx.fillText(
        "AI CORE",
        left - 2,
        top - 10
      );
    }

    function draw() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      time += 1;

      /*
       * ======================================
       * ATMOSPHERIC BACKGROUND
       * ======================================
       */

      drawGlow(
        width * 0.12,
        height * 0.18,
        width * 0.45,
        25,
        120,
        255,
        0.09
      );

      drawGlow(
        width * 0.87,
        height * 0.2,
        width * 0.45,
        155,
        75,
        255,
        0.075
      );

      drawGlow(
        width * 0.5,
        height * 0.8,
        width * 0.5,
        0,
        220,
        210,
        0.045
      );

      /*
       * ======================================
       * PARTICLES
       * ======================================
       */

      particles.forEach((particle) => {
        particle.y -= particle.speed;

        particle.x +=
          Math.sin(
            time * 0.0005 +
              particle.phase
          ) * 0.02;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x =
            Math.random() * width;
        }

        const pulse =
          Math.sin(
            time * 0.015 +
              particle.phase
          ) *
            0.25 +
          0.75;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(135, 225, 255, " +
          particle.opacity *
            pulse +
          ")";

        ctx.fill();
      });

      /*
       * ======================================
       * MAIN AI ORBITAL SYSTEM
       * ======================================
       */

      const cx = width * 0.72;

      const cy =
        height * 0.28 +
        Math.sin(time * 0.001) * 10;

      /*
       * LARGE HORIZONTAL ORBIT
       */

      drawOrbit(
        cx,
        cy,
        Math.min(width * 0.38, 580),
        Math.min(height * 0.18, 220),
        time * 0.00025,
        0.22,
        "rgba(60, 220, 255, OPACITY)"
      );

      /*
       * LARGE VERTICAL ORBIT
       */

      drawOrbit(
        cx,
        cy,
        Math.min(width * 0.25, 390),
        Math.min(height * 0.34, 400),
        -time * 0.00018,
        0.15,
        "rgba(80, 245, 225, OPACITY)"
      );

      /*
       * DIAGONAL ORBIT
       */

      drawOrbit(
        cx,
        cy,
        Math.min(width * 0.34, 520),
        Math.min(height * 0.25, 300),
        0.65 + time * 0.0002,
        0.12,
        "rgba(175, 95, 255, OPACITY)"
      );

      /*
       * THIN OUTER ORBIT
       */

      drawOrbit(
        cx,
        cy,
        Math.min(width * 0.43, 660),
        Math.min(height * 0.11, 135),
        -0.35 - time * 0.00012,
        0.08,
        "rgba(60, 190, 255, OPACITY)"
      );

      /*
       * ======================================
       * ORBITING NODES
       * ======================================
       */

      const orbitNodes = [
        {
          rx: Math.min(width * 0.38, 580),
          ry: Math.min(height * 0.18, 220),
          speed: 0.001,
          offset: 0,
        },

        {
          rx: Math.min(width * 0.25, 390),
          ry: Math.min(height * 0.34, 400),
          speed: -0.0007,
          offset: 2,
        },

        {
          rx: Math.min(width * 0.34, 520),
          ry: Math.min(height * 0.25, 300),
          speed: 0.0005,
          offset: 4,
        },
      ];

      orbitNodes.forEach((orbit) => {
        const angle =
          time * orbit.speed +
          orbit.offset;

        const x =
          cx +
          Math.cos(angle) * orbit.rx;

        const y =
          cy +
          Math.sin(angle) * orbit.ry;

        drawOrbitNode(
          x,
          y,
          3
        );
      });

      /*
       * ======================================
       * CENTRAL PROFILE
       * ======================================
       */

      drawProfileSystem(
        cx,
        cy
      );

      /*
       * ======================================
       * SMALL FLOATING SYSTEMS
       * ======================================
       */

      const smallNodes = [
        {
          x: width * 0.12,
          y: height * 0.35,
        },

        {
          x: width * 0.88,
          y: height * 0.55,
        },

        {
          x: width * 0.17,
          y: height * 0.78,
        },

        {
          x: width * 0.82,
          y: height * 0.82,
        },
      ];

      smallNodes.forEach(
        (node, index) => {
          const pulse =
            Math.sin(
              time * 0.01 +
                index
            ) *
              3;

          drawOrbitNode(
            node.x,
            node.y + pulse,
            1.8
          );
        }
      );

      /*
       * ======================================
       * CONNECTION LINES
       * ======================================
       */

      const connections = [
        {
          x: cx,
          y: cy,
        },
        ...smallNodes,
      ];

      for (
        let i = 0;
        i < connections.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < connections.length;
          j++
        ) {
          const a =
            connections[i];

          const b =
            connections[j];

          const distance =
            Math.sqrt(
              Math.pow(
                a.x - b.x,
                2
              ) +
                Math.pow(
                  a.y - b.y,
                  2
                )
            );

          if (distance < 700) {
            ctx.beginPath();

            ctx.moveTo(
              a.x,
              a.y
            );

            ctx.lineTo(
              b.x,
              b.y
            );

            ctx.strokeStyle =
              "rgba(80, 210, 230, 0.045)";

            ctx.lineWidth = 0.7;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}