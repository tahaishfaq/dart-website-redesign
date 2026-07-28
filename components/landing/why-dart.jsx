"use client";

import {
  ChartLineData01Icon,
  Clock01Icon,
  Settings01Icon,
  TradeUpIcon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear, Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Why restaurants choose Dart";

const reasons = [
  {
    icon: Clock01Icon,
    title: "Save time",
    body: "Automate everyday tasks and spend more time serving customers.",
    span: "lg:col-span-6",
    tone: "bg-[#003223]",
    invert: true,
    featured: true,
  },
  {
    icon: TradeUpIcon,
    title: "Increase sales",
    body: "Keep your menu available, reduce missed orders, and maximise every opportunity.",
    span: "lg:col-span-2",
    tone: "bg-[#fff4ee]",
  },
  {
    icon: Settings01Icon,
    title: "Improve operations",
    body: "Manage your entire restaurant from one simple dashboard.",
    span: "lg:col-span-2",
    tone: "bg-white",
  },
  {
    icon: ChartLineData01Icon,
    title: "Make smarter decisions",
    body: "Real-time insights help you grow with confidence.",
    span: "lg:col-span-2",
    tone: "bg-[#ffe0cc]",
  },
];

export function WhyDart() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="why-dart"
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
              <Icon icon={TradeUpIcon} size={16} strokeWidth={1.75} />
              Why Dart
            </span>
          </Appear>

          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.5]}
            ghostOpacity={0.16}
            className="mt-6 text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-[2.75rem]"
          />
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {reasons.map(
            ({ icon, title, body, span, tone, invert, featured }, i) => (
              <Reveal
                key={title}
                delay={reduce ? 0 : i * 0.06}
                y={22}
                className={span || undefined}
              >
                <motion.article
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className={`flex h-full min-h-[10rem] flex-col rounded-[1.35rem] p-6 ring-1 ring-brand-ink/[0.06] sm:p-7 ${tone}`}
                >
                  <span
                    className={`inline-flex size-10 items-center justify-center rounded-full ${
                      invert
                        ? "bg-white/15 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon icon={icon} size={20} strokeWidth={1.75} />
                  </span>
                  <h3
                    className={`mt-5 font-semibold tracking-tight ${
                      invert ? "text-white" : "text-brand-ink"
                    } ${featured ? "text-[1.2rem] sm:text-[1.35rem]" : "text-[16px]"}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed ${
                      invert ? "text-white/70" : "text-brand-ink/65"
                    } ${featured ? "max-w-[36ch] text-[15px]" : "text-[13.5px]"}`}
                  >
                    {body}
                  </p>
                </motion.article>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
