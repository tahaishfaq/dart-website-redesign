"use client";

import {
  Clock01Icon,
  CookingPotIcon,
  DeliveryTruck01Icon,
  FlashIcon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear, Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Keep every order under control";
const LEAD = "From kitchen to customer.";
const BODY =
  "Never lose track of an order again. Dart gives your team complete visibility with live order tracking, preparation times, customer details, and delivery status, all from one dashboard.";

const capabilities = [
  { label: "View active orders", icon: FlashIcon },
  { label: "Track prep times", icon: Clock01Icon },
  { label: "Monitor status", icon: DeliveryTruck01Icon },
  { label: "Keep the kitchen moving", icon: CookingPotIcon },
];

export function FeatureOrders() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-right" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <Appear>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white/75 px-3.5 py-1.5 text-[13px] font-semibold tracking-tight text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
              <Icon icon={DeliveryTruck01Icon} size={16} strokeWidth={1.75} />
              Live orders
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
            range={[0.28, 0.85]}
            ghostOpacity={0.18}
            className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-brand-ink/70 sm:text-base"
          />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {capabilities.map(({ label, icon }, i) => (
            <Reveal key={label} delay={reduce ? 0 : i * 0.06} y={20}>
              <motion.div
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="flex items-center gap-3 rounded-[1.15rem] border border-brand-ink/[0.07] bg-white/80 px-4 py-3.5 shadow-[0_16px_40px_-28px_rgba(40,20,10,0.35)] backdrop-blur-sm"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon icon={icon} size={18} strokeWidth={1.75} />
                </span>
                <span className="text-[14px] font-semibold tracking-tight text-brand-ink">
                  {label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
