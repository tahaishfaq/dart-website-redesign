"use client";

import Image from "next/image";
import { FlashIcon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { Appear } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  ScrollRevealWords,
  useCopyScrollProgress,
} from "@/components/landing/scroll-reveal-words";

const HEADLINE =
  "See your business at a glance. Know exactly what’s happening in real time.";
const BODY =
  "The moment you open Dart, your restaurant’s pulse is clear: revenue, live orders, prep time, menu status, and ratings in one view, without digging through reports.";

export function AtAGlance() {
  const { ref: copyRef, scrollYProgress } = useCopyScrollProgress([
    "start 0.88",
    "end 0.5",
  ]);

  return (
    <section
      id="at-a-glance"
      className="relative overflow-x-clip overflow-y-visible bg-transparent py-16 sm:py-20 lg:py-28"
    >
      <SectionAtmosphere variant="peach-bl" />

      <div
        ref={copyRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <Appear>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/12 bg-white/75 px-3.5 py-1.5 text-[13px] font-semibold tracking-tight text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
              <Icon icon={FlashIcon} size={16} strokeWidth={1.75} />
              Real-time overview
            </span>
          </Appear>

          <ScrollRevealWords
            as="h2"
            text={HEADLINE}
            progress={scrollYProgress}
            range={[0, 0.45]}
            ghostOpacity={0.16}
            className="mt-6 text-[2rem] font-medium leading-[1.18] tracking-[-0.035em] text-brand-ink sm:text-4xl sm:leading-[1.14] sm:tracking-[-0.045em] lg:text-[2.75rem]"
          />

          <ScrollRevealWords
            as="p"
            text={BODY}
            progress={scrollYProgress}
            range={[0.3, 0.85]}
            ghostOpacity={0.18}
            className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-brand-ink sm:text-base"
          />
        </div>

        <div className="relative mt-12 lg:mt-16">
          <Appear delay={0.1} y={40}>
            <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_40px_100px_-40px_rgba(40,20,10,0.45)] ring-1 ring-brand-ink/[0.06] sm:rounded-[1.75rem]">
              <Image
                src="/images/dart-admin-orders.png"
                alt="Dart live Orders overview with total orders, in-progress tickets, and delivery status"
                width={1600}
                height={1000}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1152px"
                priority={false}
              />
            </div>
          </Appear>
        </div>
      </div>
    </section>
  );
}
