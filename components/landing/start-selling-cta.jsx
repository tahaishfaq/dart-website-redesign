"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const variants = {
  default:
    "h-11 rounded-full px-5 text-[14px] shadow-[0_12px_28px_-12px_rgba(255,100,0,0.7)]",
  nav: "h-10 rounded-full px-5 text-[13px] shadow-[0_8px_20px_-10px_rgba(255,100,0,0.65)]",
  block: "h-11 w-full rounded-xl px-5 text-[14px] shadow-none sm:w-auto",
  full: "h-10 w-full rounded-full px-5 text-[13px] shadow-none",
};

/**
 * Primary conversion CTA used across the landing page.
 * Motion intent:
 * - hierarchy: soft sheen draws attention to the main action
 * - feedback: hover brightens + arrow advances; press scales down
 */
export function StartSellingCta({
  variant = "default",
  className,
  label = "Start Selling Today",
  ...props
}) {
  const reduce = useReducedMotion();
  const words = label.split(" ");
  const iconSize = variant === "nav" || variant === "full" ? 20 : 22;

  return (
    <motion.button
      type="button"
      whileHover={
        reduce
          ? undefined
          : {
              backgroundColor: "color-mix(in srgb, var(--primary) 88%, white)",
            }
      }
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={cn(
        "group/cta relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden border border-transparent bg-primary font-semibold whitespace-nowrap text-white outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50",
        variants[variant] ?? variants.default,
        className
      )}
      {...props}
    >
      {/* CSS sheen loops reliably (Motion infinite x + repeatDelay was stalling off-button) */}
      {!reduce ? (
        <span
          aria-hidden
          className="cta-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
      ) : null}

      <span className="relative z-[1] inline-flex items-center gap-[0.28em]">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:-translate-y-px"
            style={{ transitionDelay: reduce ? undefined : `${i * 35}ms` }}
          >
            {word}
          </span>
        ))}
      </span>

      <span
        data-icon="inline-end"
        className="relative z-[1] inline-flex transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1.5"
      >
        <Icon icon={ArrowRight01Icon} size={iconSize} strokeWidth={2} />
      </span>
    </motion.button>
  );
}
