"use client";

import { AnalyticsUpIcon } from "@hugeicons/core-free-icons";
import { useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear, Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Understand what drives your revenue";
const LEAD = "Data that helps you grow.";
const BODY =
  "Powerful insights should not require complicated reports. Track the numbers that matter and make better decisions with confidence.";

const metrics = [
  { label: "Revenue trends", hint: "See how earnings move week to week" },
  { label: "Order performance", hint: "Spot peaks, slowdowns, and bottlenecks" },
  { label: "Customer ratings", hint: "Watch satisfaction in real time" },
  { label: "Weekly sales", hint: "Compare this week against the last" },
  { label: "Best-selling items", hint: "Double down on what guests love" },
  { label: "Restaurant performance", hint: "Compare branches and locations" },
];

export function Analytics() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="analytics"
      className="relative overflow-x-clip overflow-y-visible bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="dual" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <Appear>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white/75 px-3.5 py-1.5 text-[13px] font-semibold tracking-tight text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
              <Icon icon={AnalyticsUpIcon} size={16} strokeWidth={1.75} />
              Live insights
            </span>
          </Appear>

          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.4]}
            ghostOpacity={0.16}
            className="mt-6 text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-[2.75rem]"
          />
          <p className="mt-3 text-[16px] font-semibold tracking-tight text-brand-ink/80">
            {LEAD}
          </p>
          <ScrollRevealWords
            as="p"
            text={BODY}
            progress={scrollYProgress}
            range={[0.28, 0.8]}
            ghostOpacity={0.18}
            className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-brand-ink/70 sm:text-base"
          />
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-brand-ink/8 border-t border-brand-ink/8">
          {metrics.map(({ label, hint }, i) => (
            <Reveal key={label} delay={reduce ? 0 : i * 0.05} y={16}>
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-[1.15rem] font-semibold tracking-tight text-brand-ink sm:text-[1.25rem]">
                  {label}
                </h3>
                <p className="max-w-[32ch] text-[14px] leading-relaxed text-brand-ink/55 sm:text-right">
                  {hint}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-[15px] font-medium leading-relaxed text-brand-ink/80">
            See what is working. Spot opportunities faster. Make better business
            decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
