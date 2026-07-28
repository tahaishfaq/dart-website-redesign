"use client";

import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Appear } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import { StartSellingCta } from "@/components/landing/start-selling-cta";

export function FinalCta() {
  return (
    <section
      id="pricing"
      className="relative overflow-x-clip overflow-y-visible bg-transparent pb-4 sm:pb-6 lg:pb-8"
    >
      <SectionAtmosphere variant="peach-br" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Appear y={28}>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-forest px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-primary/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -left-10 size-64 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative max-w-xl">
              <h2 className="text-[2rem] font-medium leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl sm:tracking-[-0.045em] lg:text-[2.75rem]">
                Ready to grow your restaurant?
              </h2>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/72 sm:text-base">
                Join restaurants using Dart to simplify operations, serve
                customers faster, and increase revenue.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center gap-3 lg:mt-0 lg:shrink-0">
              <StartSellingCta variant="block" />
              <span className="hidden text-sm text-white/45 sm:inline">or</span>
              <Button
                variant="outline"
                className="h-11 justify-center gap-2.5 rounded-full border-white/30 bg-transparent px-5 text-center text-[14px] font-semibold text-white shadow-none transition-transform active:scale-[0.98] has-data-[icon=inline-start]:pl-5 hover:bg-white/10 hover:text-white"
              >
                <span data-icon="inline-start" className="inline-flex">
                  <Icon icon={Calendar03Icon} size={20} strokeWidth={1.75} />
                </span>
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Appear>
      </div>
    </section>
  );
}
