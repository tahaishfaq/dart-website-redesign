"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * Scroll-scrubbed word reveal (bidirectional).
 * Ghost layer holds layout; fill layer lights up with shared scroll progress.
 */
export function ScrollRevealWords({
  text,
  as: Tag = "p",
  className = "",
  wordClassName = "",
  ghostOpacity = 0.2,
  progress,
  range: blockRange = [0, 1],
}) {
  const reduce = useReducedMotion();
  const words = text.trim().split(/\s+/).filter(Boolean);

  if (reduce || !progress) {
    return <Tag className={className}>{text}</Tag>;
  }

  const [blockStart, blockEnd] = blockRange;
  const blockSpan = Math.max(blockEnd - blockStart, 0.0001);

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => {
          const step = blockSpan / words.length;
          const localStart = blockStart + i * step;
          const start = Math.max(blockStart, localStart - step * 0.35);
          const end = Math.min(blockEnd, localStart + step * 1.15);
          return (
            <Word
              key={`${word}-${i}`}
              progress={progress}
              range={[start, end]}
              ghostOpacity={ghostOpacity}
              className={wordClassName}
            >
              {word}
            </Word>
          );
        })}
      </span>
    </Tag>
  );
}

function Word({ children, progress, range, ghostOpacity, className }) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span
      className={["relative mr-[0.28em] inline-block last:mr-0", className]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className="pointer-events-none select-none text-brand-ink"
        style={{ opacity: ghostOpacity }}
        aria-hidden
      >
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-brand-ink will-change-[opacity]"
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Shared scroll progress for a copy column (headline + body as one cascade). */
export function useCopyScrollProgress(
  offset = ["start 0.9", "end 0.55"]
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  return { ref, scrollYProgress };
}
