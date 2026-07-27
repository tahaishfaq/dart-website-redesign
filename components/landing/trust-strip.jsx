"use client";

import { Reveal } from "@/components/landing/reveal";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";
import {
  DashboardSquare02Icon,
  GaugeIcon,
  Shield01Icon,
  SpoonAndForkIcon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";

const trust = [
  { icon: DashboardSquare02Icon, label: "Real-Time Dashboard" },
  { icon: GaugeIcon, label: "Easy-to-use Interface" },
  { icon: Shield01Icon, label: "Secure & Reliable" },
  { icon: SpoonAndForkIcon, label: "Built for Restaurants" },
];

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-white">
      <SectionAtmosphere variant="peach-top" />
      <div className="relative mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-6">
            {trust.map(({ icon, label }, i) => (
              <Reveal
                key={label}
                delay={i * 0.06}
                className="flex items-center justify-center gap-2.5 sm:justify-start"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon icon={icon} size={17} strokeWidth={1.75} />
                </span>
                <span className="text-[13px] font-medium tracking-tight text-brand-ink/75">
                  {label}
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
