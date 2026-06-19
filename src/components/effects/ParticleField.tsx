"use client";

import { useEffect, useRef } from "react";

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export type ParticleFieldProps = {
  quantity?: number;
  staticity?: number;
  ease?: number;
  className?: string;
};

/**
 * Faithful React port of the ParticleAnimation class from the original main.js.
 * Renders a <canvas> that fills its parent element and draws drifting,
 * mouse-reactive white particles. Behaviour (params, easing, edge fade,
 * respawn) is preserved 1:1.
 */
export function ParticleField({
  quantity = 30,
  staticity = 50,
  ease = 50,
  className,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasContainer = canvas.parentElement;
    const context = canvas.getContext("2d");
    if (!canvasContainer || !context) return;

    // Perf/a11y: halve the particle count on small screens, and fully respect
    // prefers-reduced-motion (draw a single static frame, no animation loop).
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;
    const effQuantity = isMobile ? Math.max(3, Math.round(quantity * 0.5)) : quantity;

    const dpr = window.devicePixelRatio || 1;
    const settings = { quantity: effQuantity, staticity, ease };
    let circles: Circle[] = [];
    const mouse = { x: 0, y: 0 };
    const canvasSize = { w: 0, h: 0 };
    let rafId = 0;
    let running = false;

    const circleParams = (): Circle => {
      const x = Math.floor(Math.random() * canvasSize.w);
      const y = Math.floor(Math.random() * canvasSize.h);
      const size = Math.floor(Math.random() * 2) + 1;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.2;
      const dy = (Math.random() - 0.5) * 0.2;
      const magnetism = 0.1 + Math.random() * 4;
      return {
        x,
        y,
        translateX: 0,
        translateY: 0,
        size,
        alpha: 0,
        targetAlpha,
        dx,
        dy,
        magnetism,
      };
    };

    const drawCircle = (circle: Circle, update = false) => {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.translate(translateX, translateY);
      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI);
      context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.fill();
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) circles.push(circle);
    };

    const clearContext = () => {
      context.clearRect(0, 0, canvasSize.w, canvasSize.h);
    };

    const drawParticles = () => {
      clearContext();
      const particleCount = settings.quantity;
      for (let i = 0; i < particleCount; i++) {
        drawCircle(circleParams());
      }
    };

    const remapValue = (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number
    ) => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const resizeCanvas = () => {
      circles.length = 0;
      canvasSize.w = canvasContainer.offsetWidth;
      canvasSize.h = canvasContainer.offsetHeight;
      canvas.width = canvasSize.w * dpr;
      canvas.height = canvasSize.h * dpr;
      canvas.style.width = `${canvasSize.w}px`;
      canvas.style.height = `${canvasSize.h}px`;
      context.scale(dpr, dpr);
    };

    const drawStatic = () => {
      clearContext();
      circles.forEach((c) => {
        c.alpha = c.targetAlpha;
        drawCircle({ ...c }, true);
      });
    };

    const initCanvas = () => {
      resizeCanvas();
      drawParticles();
      if (reduced) drawStatic();
    };

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = canvas.getBoundingClientRect();
      const { w, h } = canvasSize;
      const x = clientX - rect.left - w / 2;
      const y = clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -(w / 2) && y < h / 2 && y > -(h / 2);
      if (inside) {
        mouse.x = x;
        mouse.y = y;
      }
    };

    const animate = () => {
      clearContext();
      circles.forEach((circle, i) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
        );
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX +=
          (mouse.x / (settings.staticity / circle.magnetism) -
            circle.translateX) /
          settings.ease;
        circle.translateY +=
          (mouse.y / (settings.staticity / circle.magnetism) -
            circle.translateY) /
          settings.ease;
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.h + circle.size
        ) {
          circles.splice(i, 1);
          drawCircle(circleParams());
        } else {
          drawCircle({ ...circle }, true);
        }
      });
      if (running) rafId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      animate();
    };
    const stop = () => {
      running = false;
      window.cancelAnimationFrame(rafId);
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);

    let io: IntersectionObserver | null = null;
    if (!reduced) {
      // Only run the animation loop while the canvas is actually on-screen.
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) start();
            else stop();
          }
        },
        { threshold: 0 }
      );
      io.observe(canvasContainer);
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      stop();
      io?.disconnect();
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      circles = [];
    };
  }, [quantity, staticity, ease]);

  return <canvas ref={canvasRef} className={className} />;
}
