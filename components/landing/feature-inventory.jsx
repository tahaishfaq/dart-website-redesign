"use client";

import {
  Alert02Icon,
  Notification01Icon,
  Package01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear, Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Never run out unexpectedly";
const LEAD = "Stay ahead of low stock.";
const BODY =
  "Running out of best sellers costs sales. Dart automatically alerts you when menu items are low or out of stock, so your team can act before customers are disappointed. Spend less time checking inventory, and more time serving customers.";

const rows = [
  {
    title: "Automatic low-stock alerts",
    body: "Get notified the moment an item dips below your threshold.",
    icon: Notification01Icon,
  },
  {
    title: "Act before guests notice",
    body: "Pause or restock early so bestsellers stay available.",
    icon: Alert02Icon,
  },
  {
    title: "Less checking, more serving",
    body: "Stop manual inventory rounds. Let Dart watch stock for you.",
    icon: UserGroupIcon,
  },
];

export function FeatureInventory() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="inventory"
      className="relative overflow-x-clip overflow-y-visible bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="forest-left" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <Appear>
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-[#fff4ee] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            <span className="relative flex size-2.5">
              {!reduce ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
              ) : null}
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            <Icon
              icon={Package01Icon}
              size={16}
              strokeWidth={1.75}
              className="text-primary"
            />
            <span className="text-[13px] font-semibold tracking-tight text-brand-ink">
              Low stock alert
            </span>
            <span className="text-[12px] font-medium text-brand-ink/55">
              3 items need attention
            </span>
          </div>
        </Appear>

        <div className="mt-8 max-w-2xl">
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
            range={[0.28, 0.85]}
            ghostOpacity={0.18}
            className="mt-4 max-w-[50ch] text-[15px] leading-relaxed text-brand-ink/70 sm:text-base"
          />
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-brand-ink/8 border-y border-brand-ink/8">
          {rows.map(({ title, body, icon }, i) => (
            <Reveal key={title} delay={reduce ? 0 : i * 0.08} y={18}>
              <div className="flex items-start gap-4 py-5 sm:gap-5">
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-forest/8 text-brand-forest">
                  <Icon icon={icon} size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-brand-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-brand-ink/65">
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
