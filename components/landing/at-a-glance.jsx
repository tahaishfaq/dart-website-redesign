"use client";

import Image from "next/image";
import {
  AnalyticsUpIcon,
  Cancel01Icon,
  ChartAverageIcon,
  CookingPotIcon,
  FlashIcon,
  Package01Icon,
  StarIcon,
  Timer01Icon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";

const ease = [0.16, 1, 0.3, 1];

/** Primary signals partners see first after login */
const primaryMetrics = [
  {
    label: "Today’s revenue",
    value: "₱23,090",
    hint: "+42% vs last week",
    icon: AnalyticsUpIcon,
  },
  {
    label: "Live orders",
    value: "43",
    hint: "Moving through the kitchen",
    icon: Package01Icon,
  },
  {
    label: "Preparation time",
    value: "20 min",
    hint: "Average ticket time",
    icon: Timer01Icon,
  },
  {
    label: "Customer ratings",
    value: "4.8",
    hint: "From live reviews",
    icon: StarIcon,
  },
];

/** Secondary monitor list — quiet proof, not another card wall */
const secondaryMetrics = [
  { label: "Active menu items", value: "128", icon: CookingPotIcon },
  { label: "Daily orders", value: "148", icon: ChartAverageIcon },
  { label: "Cancellation rate", value: "0.0%", icon: Cancel01Icon },
  { label: "Weekly revenue", value: "₱96k", icon: AnalyticsUpIcon },
];

export function AtAGlance() {
  const reduce = useReducedMotion();

  return (
    <section
      id="at-a-glance"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-bl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Intro row */}
        <div className="max-w-2xl">
          <Appear>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white/75 px-3.5 py-1.5 text-[13px] font-semibold tracking-tight text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
              <Icon icon={FlashIcon} size={16} strokeWidth={1.75} />
              Real-time overview
            </span>
          </Appear>

          <Appear delay={0.08}>
            <h2 className="mt-6 text-[2rem] font-medium leading-[1.15] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.12] sm:tracking-[-0.045em] lg:text-[2.75rem]">
              See your business at a glance.{" "}
              <span className="text-brand-ink/40">
                Know exactly what’s happening in real time.
              </span>
            </h2>
          </Appear>

          <Appear delay={0.14}>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-brand-ink/60 sm:text-base">
              The moment you open Dart, your restaurant’s pulse is clear:
              revenue, live orders, prep time, menu status, and ratings in one
              view, without digging through reports.
            </p>
          </Appear>
        </div>

        {/* Product stage: dashboard + floating primary metrics */}
        <div className="relative mt-12 lg:mt-16">
          <Appear delay={0.1} y={40}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_40px_100px_-40px_rgba(40,20,10,0.45)] ring-1 ring-brand-ink/[0.06] sm:rounded-[1.75rem]">
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                <Image
                  src="/images/Order-Food-Online-Marketplace-07-27-2026_05_15_PM.png"
                  alt="Dart Partner live restaurant dashboard showing revenue, orders, and performance"
                  width={1440}
                  height={900}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  priority={false}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a120c]/55 via-[#1a120c]/10 to-transparent"
                  aria-hidden
                />
              </div>

              {/* Glass metric dock — premium SaaS overlay on product */}
              <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-6 lg:bottom-6">
                <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-[0_20px_50px_-24px_rgba(20,10,5,0.55)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
                  <ul className="grid grid-cols-2 divide-x divide-y divide-brand-ink/[0.06] lg:grid-cols-4 lg:divide-y-0">
                    {primaryMetrics.map(
                      ({ label, value, hint, icon }, i) => (
                        <motion.li
                          key={label}
                          className="px-3.5 py-3.5 sm:px-5 sm:py-4"
                          initial={
                            reduce ? false : { opacity: 0, y: 10 }
                          }
                          whileInView={
                            reduce ? undefined : { opacity: 1, y: 0 }
                          }
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.12 + i * 0.06,
                            ease,
                          }}
                        >
                          <div className="flex items-center gap-1.5 text-brand-ink/45">
                            <Icon
                              icon={icon}
                              size={14}
                              strokeWidth={1.75}
                              className="text-primary"
                            />
                            <p className="text-[11px] font-medium tracking-tight">
                              {label}
                            </p>
                          </div>
                          <p className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-2xl">
                            {value}
                          </p>
                          <p className="mt-0.5 text-[11px] text-brand-ink/40">
                            {hint}
                          </p>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </Appear>

          {/* Secondary monitor row — light, editorial, no cards */}
          <Appear delay={0.2}>
            <div className="mt-8 sm:mt-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-ink/30">
                Also monitoring
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-4 border-t border-brand-ink/[0.07] pt-5 sm:gap-x-10">
                {secondaryMetrics.map(({ label, value, icon }) => (
                  <li
                    key={label}
                    className="flex min-w-[9.5rem] items-baseline gap-2.5"
                  >
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon icon={icon} size={13} strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold tracking-tight text-brand-ink">
                        {value}
                      </span>
                      <span className="block text-[12px] text-brand-ink/45">
                        {label}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Appear>

          <Appear delay={0.28}>
            <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-brand-ink/55 sm:text-base">
              <span className="text-brand-ink/35">No spreadsheets.</span>{" "}
              <span className="text-brand-ink/50">No guesswork.</span>{" "}
              <span className="font-semibold text-brand-ink">
                Just the numbers that matter.
              </span>
            </p>
          </Appear>
        </div>
      </div>
    </section>
  );
}
