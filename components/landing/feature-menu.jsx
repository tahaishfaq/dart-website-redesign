"use client";

import {
  CookingPotIcon,
  FileImportIcon,
  FlashIcon,
  PencilEdit01Icon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Your menu, always up to date";
const LEAD = "Manage your menu in seconds.";
const BODY =
  "Update your restaurant without calling a developer. Add new dishes, edit prices, pause unavailable items, or import your entire menu in minutes. With live menu availability, customers only see what is ready to order.";

const tiles = [
  {
    title: "Menu management",
    body: "Add dishes, edit prices, and organise categories in one place.",
    icon: CookingPotIcon,
    tone: "bg-[#fff4ee] ring-brand-ink/8",
    span: "sm:col-span-1 sm:row-span-1",
  },
  {
    title: "CSV menu import",
    body: "Bring your full menu online in minutes, not days.",
    icon: FileImportIcon,
    tone: "bg-white ring-brand-ink/8",
    span: "sm:col-span-1",
  },
  {
    title: "Live availability",
    body: "Pause sold-out items so guests never order what you cannot serve.",
    icon: FlashIcon,
    tone: "bg-[#003223] text-white ring-transparent",
    span: "sm:col-span-1",
    invert: true,
  },
  {
    title: "One-click updates",
    body: "Change an item once and it syncs everywhere customers order.",
    icon: PencilEdit01Icon,
    tone: "bg-[#ffe0cc] ring-brand-ink/8",
    span: "sm:col-span-1",
  },
];

export function FeatureMenu() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-top" />

      <div
        ref={copyRef}
        className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <div className="max-w-xl lg:pt-4">
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
            className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-brand-ink/70 sm:text-base"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {tiles.map(({ title, body, icon, tone, invert }, i) => (
            <Reveal key={title} delay={reduce ? 0 : i * 0.07} y={24}>
              <motion.article
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className={`flex h-full flex-col rounded-[1.35rem] p-5 ring-1 ${tone}`}
              >
                <span
                  className={`inline-flex size-9 items-center justify-center rounded-full ${
                    invert
                      ? "bg-white/15 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon icon={icon} size={18} strokeWidth={1.75} />
                </span>
                <h3
                  className={`mt-4 text-[15px] font-semibold tracking-tight ${
                    invert ? "text-white" : "text-brand-ink"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-1.5 text-[13.5px] leading-relaxed ${
                    invert ? "text-white/70" : "text-brand-ink/65"
                  }`}
                >
                  {body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
