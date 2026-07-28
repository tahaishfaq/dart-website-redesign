"use client";

import {
  Building02Icon,
  Coffee02Icon,
  Package01Icon,
  ShoppingBag01Icon,
  SpoonAndForkIcon,
  Store01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const ease = [0.16, 1, 0.3, 1];

const restaurantChips = [
  {
    label: "Cafés",
    icon: Store01Icon,
    tone: "bg-[#ff8a4c] text-white shadow-[0_12px_28px_-14px_rgba(255,100,0,0.55)]",
    place: "-rotate-[8deg] top-[8%] right-[18%] sm:right-[22%]",
  },
  {
    label: "Takeaways",
    icon: ShoppingBag01Icon,
    tone: "bg-[#003223] text-white shadow-[0_12px_28px_-14px_rgba(0,50,35,0.45)]",
    place: "rotate-[7deg] top-[22%] right-[2%] sm:right-[4%]",
  },
  {
    label: "Cloud Kitchens",
    icon: Building02Icon,
    tone: "bg-[#ffe0cc] text-brand-ink shadow-[0_12px_28px_-16px_rgba(255,100,0,0.35)]",
    place: "-rotate-[4deg] top-[42%] right-[20%] sm:right-[26%]",
  },
  {
    label: "Restaurant Chains",
    icon: SpoonAndForkIcon,
    tone: "bg-primary text-white shadow-[0_14px_32px_-14px_rgba(255,100,0,0.5)]",
    place: "rotate-[5deg] top-[58%] right-[0%] sm:right-[2%]",
  },
  {
    label: "Coffee Shops",
    icon: Coffee02Icon,
    tone: "bg-[#fff4ee] text-brand-ink ring-1 ring-brand-ink/10",
    place: "-rotate-[6deg] top-[74%] right-[24%] sm:right-[30%]",
  },
  {
    label: "Multi-branch",
    icon: Package01Icon,
    tone: "bg-[#1a5c48] text-white shadow-[0_12px_28px_-14px_rgba(0,50,35,0.4)]",
    place: "rotate-[9deg] top-[86%] right-[6%] sm:right-[10%]",
  },
];

const HEADLINE = "Everything your restaurant needs. All in one place.";
const BODY_PRIMARY =
  "Stop juggling multiple tools. Dart brings your restaurant operations together in one simple platform, giving you complete visibility over every order, every sale, and every customer.";
const BODY_SUPPORT =
  "Whether you run a café, takeaway, cloud kitchen, or restaurant chain, Dart helps you operate with confidence.";

export function AboutDart() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="features"
      className="relative overflow-x-clip overflow-y-visible bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-tr" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-8">
        <div ref={copyRef} className="max-w-xl">
          <Appear>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white/70 px-3.5 py-1.5 text-[13px] font-semibold tracking-tight text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm">
              <Icon icon={UserGroupIcon} size={16} strokeWidth={1.75} />
              About Dart
            </span>
          </Appear>

          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.38]}
            ghostOpacity={0.16}
            className="mt-6 text-[2rem] font-medium leading-[1.2] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.18] sm:tracking-[-0.04em] lg:text-[2.75rem]"
          />

          <ScrollRevealWords
            as="p"
            text={BODY_PRIMARY}
            progress={scrollYProgress}
            range={[0.28, 0.78]}
            ghostOpacity={0.18}
            className="mt-5 text-[15px] leading-relaxed text-brand-ink sm:text-base sm:leading-relaxed"
          />

          <ScrollRevealWords
            as="p"
            text={BODY_SUPPORT}
            progress={scrollYProgress}
            range={[0.68, 1]}
            ghostOpacity={0.16}
            className="mt-4 text-[15px] leading-relaxed text-brand-ink sm:text-base"
          />
        </div>

        <div className="relative mx-auto h-auto w-full max-w-md sm:max-w-lg lg:h-[24rem] lg:max-w-none">
          <ul className="flex flex-wrap items-center justify-center gap-3 lg:hidden">
            {restaurantChips.map(({ label, icon, tone }, i) => (
              <Appear key={label} delay={0.06 * i}>
                <li
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-tight",
                    tone,
                  ].join(" ")}
                >
                  <Icon icon={icon} size={16} strokeWidth={1.75} />
                  {label}
                </li>
              </Appear>
            ))}
          </ul>

          <div className="absolute inset-0 hidden lg:block">
            {restaurantChips.map(({ label, icon, tone, place }, i) => (
              <motion.div
                key={label}
                className={[
                  "absolute inline-flex items-center gap-2 rounded-full px-3.5 py-2.5 text-[13px] font-semibold tracking-tight will-change-transform",
                  tone,
                  place,
                ].join(" ")}
                initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
                whileInView={
                  reduce ? undefined : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: 0.08 + i * 0.07,
                  ease,
                }}
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, transition: { duration: 0.25 } }
                }
              >
                <Icon icon={icon} size={16} strokeWidth={1.75} />
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
