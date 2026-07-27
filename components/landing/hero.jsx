"use client";

import { useRef } from "react";
import Image from "next/image";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Appear } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/site-header";
import { StartSellingCta } from "@/components/landing/start-selling-cta";

const avatars = [
  "https://picsum.photos/seed/dart-partner-chef/80/80",
  "https://picsum.photos/seed/dart-partner-owner/80/80",
  "https://picsum.photos/seed/dart-partner-manager/80/80",
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Copy lifts and exits cleanly so the product shot owns the scroll.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const copyOpacity = useTransform(scrollYProgress, (progress) => {
    if (reduce) return 1;
    if (progress <= 0.22) return 1;
    if (progress >= 0.5) return 0;
    // Ease the mid fade so copy clears before the shot dominates.
    const t = (progress - 0.22) / (0.5 - 0.22);
    return 1 - t * t;
  });
  // Shot lags + scales in — classic depth, product comes toward you.
  const shotY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 64]);
  const shotScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
    >
      {/* Soft peach / blush gradient - Flexfolio-inspired, Dart-tinted */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[#fff9f6]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,rgba(255,160,120,0.38),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_15%,rgba(255,120,80,0.16),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_40%,rgba(255,200,180,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,#ffffff_92%)]" />
      </div>

      <SiteHeader />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-8 text-center sm:px-6 sm:pt-10 lg:pt-12">
        {/* Split y / opacity so Motion binds both; no CSS transition on scrubbed values */}
        <motion.div
          style={reduce ? undefined : { y: copyY }}
          className="flex w-full flex-col items-center will-change-transform [transition:none]"
        >
          <motion.div
            style={reduce ? undefined : { opacity: copyOpacity }}
            className="flex w-full flex-col items-center [transition:none]"
          >
            <Appear delay={0.04}>
              <h1 className="max-w-[18ch] pb-1 text-[2.35rem] font-medium leading-[1.15] tracking-[-0.04em] text-brand-ink sm:text-5xl sm:tracking-[-0.05em] lg:text-[3.4rem] lg:leading-[1.12] lg:tracking-[-0.055em]">
                The smarter way to run your{" "}
                <span className="relative inline-block whitespace-nowrap px-[0.18em]">
                  {/* Soft SaaS highlighter stroke - lighter + tighter height */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-[10%] -top-[6%] -bottom-[10%] -rotate-[1deg]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/brush-mark-final.png"
                      alt=""
                      className="h-full w-full object-fill opacity-[0.55] brightness-110 saturate-90 contrast-95"
                      draggable={false}
                    />
                  </span>
                  <span className="relative z-[1]">business</span>
                </span>
                .
              </h1>
            </Appear>

            <Appear delay={0.12}>
              <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-brand-ink/65 sm:text-base">
                One powerful dashboard for your whole restaurant. Orders, menus,
                earnings, reviews, inventory, and analytics in one place so you
                can serve faster and grow with confidence.
              </p>
            </Appear>

            <Appear
              delay={0.22}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <StartSellingCta />
              <Button
                variant="outline"
                className="h-11 justify-center gap-2.5 rounded-full border-black/10 bg-white/80 px-5 text-center text-[14px] font-semibold text-brand-ink shadow-none backdrop-blur-sm transition-transform active:scale-[0.98] has-data-[icon=inline-start]:pl-5"
              >
                <span data-icon="inline-start" className="inline-flex">
                  <Icon icon={Calendar03Icon} size={20} strokeWidth={1.75} />
                </span>
                Book a Demo
              </Button>
            </Appear>

            <Appear delay={0.34} className="mt-10 w-full max-w-[48ch] sm:mt-12">
              <div className="flex w-full items-center">
                <div
                  className="h-px min-w-0 flex-1 border-t border-dashed border-brand-ink/20"
                  aria-hidden
                />

                {/* Web glass approximation for reviews chip */}
                <div className="relative mx-0 inline-flex shrink-0 items-center gap-2.5 rounded-full border border-dashed border-brand-ink/20 bg-white/30 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/22 sm:gap-3 sm:px-3.5 sm:py-[0.4rem]">
                  <span
                    className="absolute top-1/2 left-0 z-10 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-ink/20 bg-white shadow-[0_1px_2px_rgba(40,20,10,0.12)]"
                    aria-hidden
                  />
                  <span
                    className="absolute top-1/2 right-0 z-10 size-2 translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-ink/20 bg-white shadow-[0_1px_2px_rgba(40,20,10,0.12)]"
                    aria-hidden
                  />

                  <div className="flex items-center pl-0.5">
                    {avatars.map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={24}
                        height={24}
                        className={[
                          "size-5 rounded-full border border-white/90 object-cover sm:size-6",
                          i > 0 ? "-ml-1.5" : "",
                        ].join(" ")}
                        style={{ zIndex: avatars.length - i }}
                      />
                    ))}
                  </div>

                  <span className="h-3.5 w-px bg-brand-ink/20" aria-hidden />

                  <p className="text-[11px] font-semibold tracking-tight text-brand-ink/80 sm:text-[12px]">
                    2.4k+ Reviews
                  </p>

                  <span className="h-3.5 w-px bg-brand-ink/20" aria-hidden />

                  <div className="flex items-center gap-1 pr-0.5">
                    <span className="text-[11px] font-semibold tracking-tight text-brand-ink/80 sm:text-[12px]">
                      5.0
                    </span>
                    <span
                      className="text-[10px] leading-none tracking-[0.04em] text-[#f5b301] sm:text-[11px]"
                      aria-label="5 out of 5 stars"
                    >
                      ★★★★★
                    </span>
                  </div>
                </div>

                <div
                  className="h-px min-w-0 flex-1 border-t border-dashed border-brand-ink/20"
                  aria-hidden
                />
              </div>
            </Appear>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-6xl flex-1 px-4 pb-0 sm:mt-14 sm:px-6 lg:mt-16 lg:px-8">
        <motion.div
          style={reduce ? undefined : { y: shotY, scale: shotScale }}
          className="origin-top will-change-transform [transition:none]"
        >
          <Appear delay={0.4} y={40}>
            <div className="relative overflow-hidden rounded-[1.25rem] bg-white shadow-[0_28px_80px_-28px_rgba(40,20,10,0.35)] sm:rounded-[1.5rem]">
              <Image
                src="/images/Order-Food-Online-Marketplace-07-27-2026_05_15_PM.png"
                alt="Dart Partner restaurant dashboard showing revenue, orders, and analytics"
                width={1440}
                height={900}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
              />
            </div>
          </Appear>
        </motion.div>
      </div>
    </section>
  );
}
