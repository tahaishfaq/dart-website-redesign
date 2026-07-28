"use client";

import {
  Invoice01Icon,
  Money01Icon,
  Payment01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Payments made simple";
const LEAD = "Know exactly what you have earned.";
const BODY =
  "Track every peso from one place. Earnings, transactions, payouts, and payment history stay clear so you never guess where the money went.";

const strip = [
  { label: "Earnings", icon: Money01Icon },
  { label: "Transactions", icon: Invoice01Icon },
  { label: "Payouts", icon: Wallet01Icon },
  { label: "Payment history", icon: Payment01Icon },
];

export function FeaturePayments() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="payments"
      className="relative overflow-x-clip overflow-y-visible bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-bl" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.4]}
            ghostOpacity={0.16}
            className="text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-[2.75rem]"
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

        <Reveal delay={0.08} y={28}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] bg-brand-ink/[0.08] ring-1 ring-brand-ink/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {strip.map(({ label, icon }, i) => (
              <Reveal key={label} delay={reduce ? 0 : 0.1 + i * 0.06} y={18}>
                <div className="flex flex-col gap-3 bg-white px-5 py-6 sm:px-6">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon icon={icon} size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-[15px] font-semibold tracking-tight text-brand-ink">
                    {label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg text-[15px] font-medium leading-relaxed text-brand-ink/80">
            No manual calculations. No uncertainty. Just complete financial
            visibility.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
