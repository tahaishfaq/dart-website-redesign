"use client";

import {
  AnalyticsUpIcon,
  ClipboardIcon,
  CookingPotIcon,
  FavouriteCircleIcon,
  Package01Icon,
  Store01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Everything you need to run your restaurant";

const modules = [
  {
    icon: Store01Icon,
    title: "Brand & Business",
    body: "Manage your restaurant profile, locations, and branches from one place.",
    span: "lg:col-span-2",
    tone: "bg-[#fff4ee]",
  },
  {
    icon: ClipboardIcon,
    title: "Orders",
    body: "Receive, prepare, and manage every order in real time.",
    span: "",
    tone: "bg-white",
  },
  {
    icon: CookingPotIcon,
    title: "Menu Management",
    body: "Keep your menu accurate, updated, and available.",
    span: "",
    tone: "bg-white",
  },
  {
    icon: FavouriteCircleIcon,
    title: "Reviews",
    body: "Build trust and improve customer satisfaction.",
    span: "",
    tone: "bg-[#ffe0cc]",
  },
  {
    icon: AnalyticsUpIcon,
    title: "Analytics",
    body: "Understand your business with live reporting.",
    span: "lg:col-span-2",
    tone: "bg-[#003223]",
    invert: true,
  },
  {
    icon: Package01Icon,
    title: "Inventory",
    body: "Avoid stock shortages before they affect sales.",
    span: "",
    tone: "bg-white",
  },
  {
    icon: Wallet01Icon,
    title: "Payments",
    body: "Track earnings, transactions, and payouts effortlessly.",
    span: "",
    tone: "bg-[#fff4ee]",
  },
];

export function PlatformModules() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="platform"
      className="relative overflow-x-clip overflow-y-visible bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="forest-left" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.5]}
            ghostOpacity={0.16}
            className="text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-[2.75rem]"
          />
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon, title, body, span, tone, invert }, i) => (
            <Reveal
              key={title}
              delay={reduce ? 0 : i * 0.05}
              y={22}
              className={span || undefined}
            >
              <motion.article
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.985 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className={`flex h-full min-h-[9.5rem] flex-col rounded-[1.35rem] p-5 ring-1 ring-brand-ink/[0.06] sm:p-6 ${tone}`}
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
