"use client";

import {
  Building02Icon,
  Coffee02Icon,
  Package01Icon,
  ShoppingBag01Icon,
  SpoonAndForkIcon,
  Store01Icon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Designed for restaurants that move fast";
const BODY =
  "Whether you are serving 20 orders a day or 2,000, Dart helps your team stay organised, reduce mistakes, and deliver a better customer experience.";

const types = [
  { label: "Restaurants", icon: SpoonAndForkIcon },
  { label: "Cafés", icon: Store01Icon },
  { label: "Coffee Shops", icon: Coffee02Icon },
  { label: "Cloud Kitchens", icon: Building02Icon },
  { label: "Takeaways", icon: ShoppingBag01Icon },
  { label: "Multi-branch", icon: Package01Icon },
];

function TypeChip({ label, icon }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-brand-ink/10 bg-white/90 px-5 py-2.5 text-[14px] font-semibold tracking-tight text-brand-ink shadow-[0_12px_28px_-18px_rgba(40,20,10,0.4)] backdrop-blur-sm">
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon icon={icon} size={15} strokeWidth={1.75} />
      </span>
      {label}
    </span>
  );
}

export function RestaurantTypes() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  const track = [...types, ...types];

  return (
    <section
      id="restaurant-types"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-top" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.45]}
            ghostOpacity={0.16}
            className="text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-[2.75rem]"
          />
          <ScrollRevealWords
            as="p"
            text={BODY}
            progress={scrollYProgress}
            range={[0.3, 0.85]}
            ghostOpacity={0.18}
            className="mx-auto mt-5 max-w-[48ch] text-[15px] leading-relaxed text-brand-ink/70 sm:text-base"
          />
        </div>
      </div>

      <Reveal delay={0.1} y={24} className="relative mt-12 lg:mt-16">
        {reduce ? (
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
            {types.map((item) => (
              <TypeChip key={item.label} {...item} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
            />
            <motion.div
              className="flex w-max gap-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {track.map((item, i) => (
                <TypeChip key={`${item.label}-${i}`} {...item} />
              ))}
            </motion.div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
