"use client";

import {
  Message01Icon,
  StarIcon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { Appear, Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE = "Happy customers keep coming back";
const LEAD = "Build trust with every review.";
const BODY =
  "Customer feedback lives directly in your dashboard. Monitor ratings, respond to reviews, and understand how your restaurant is performing from your customers' perspective. Turn great service into repeat visits.";

const capabilities = [
  { label: "Monitor ratings as they come in", icon: StarIcon },
  { label: "Respond to reviews from one place", icon: Message01Icon },
  { label: "See performance through your guests' eyes", icon: ViewIcon },
];

export function FeatureReviews() {
  const reduce = useReducedMotion();
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-br" />

      <div
        ref={copyRef}
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <Appear>
          <figure className="rounded-[1.5rem] bg-[#fff4ee] p-7 ring-1 ring-brand-ink/[0.06] sm:p-9">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    delay: reduce ? 0 : 0.08 + i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-flex text-primary"
                >
                  <Icon icon={StarIcon} size={18} strokeWidth={1.75} />
                </motion.span>
              ))}
            </div>
            <blockquote className="mt-5 text-[1.2rem] font-medium leading-snug tracking-tight text-brand-ink sm:text-[1.35rem]">
              &ldquo;Orders never fall through the cracks anymore. Our kitchen
              and counter finally see the same picture.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[13.5px] text-brand-ink/60">
              <span className="font-semibold text-brand-ink">Sofia Reyes</span>
              {" - "}
              Café manager, Makati
            </figcaption>
          </figure>
        </Appear>

        <div>
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

          <ul className="mt-8 space-y-3">
            {capabilities.map(({ label, icon }, i) => (
              <Reveal key={label} delay={reduce ? 0 : 0.1 + i * 0.06} y={14}>
                <li className="flex items-center gap-3 text-[14.5px] font-medium text-brand-ink/85">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon icon={icon} size={15} strokeWidth={1.75} />
                  </span>
                  {label}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
