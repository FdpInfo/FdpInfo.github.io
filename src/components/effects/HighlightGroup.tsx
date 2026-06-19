"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export type HighlightGroupProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * React port of the Highlighter class from the original main.js. Tracks the
 * pointer over the container and writes --mouse-x / --mouse-y custom properties
 * onto each direct child, which the CSS uses to position the radial glow that
 * follows the cursor across the card grid.
 */
export function HighlightGroup({
  as: Tag = "div",
  className,
  children,
}: HighlightGroupProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const size = { w: 0, h: 0 };

    const initContainer = () => {
      size.w = container.offsetWidth;
      size.h = container.offsetHeight;
    };

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < size.w && x > 0 && y < size.h && y > 0;
      if (!inside) return;
      const boxes = Array.from(container.children) as HTMLElement[];
      boxes.forEach((box) => {
        const boxRect = box.getBoundingClientRect();
        const boxX = -(boxRect.left - rect.left) + x;
        const boxY = -(boxRect.top - rect.top) + y;
        box.style.setProperty("--mouse-x", `${boxX}px`);
        box.style.setProperty("--mouse-y", `${boxY}px`);
      });
    };

    initContainer();
    window.addEventListener("resize", initContainer);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initContainer);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement & HTMLDivElement>}
      className={className}
      data-highlighter=""
    >
      {children}
    </Tag>
  );
}
