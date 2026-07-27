import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Gauge,
  LayoutDashboard,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trust = [
  { icon: LayoutDashboard, label: "Real-Time Dashboard" },
  { icon: Gauge, label: "Easy-to-use Interface" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: UtensilsCrossed, label: "Built for Restaurants" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-cream/40 to-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_55/0.45),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start animate-fade-up">
          <h1 className="max-w-[15ch] text-[2.35rem] leading-[1.08] font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-[3.35rem]">
            The smarter way to run{" "}
            <span className="text-primary">your business.</span>
          </h1>
          <p className="mt-4 max-w-md text-[17px] font-semibold leading-snug text-brand-ink/85">
            Run your business from one powerful dashboard.
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
            From live orders and menu management to earnings, reviews,
            inventory, and analytics, Dart gives you everything you need to
            serve customers faster, make smarter decisions, and grow your
            business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button className="h-11 rounded-xl bg-primary px-5 text-[14px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(249,115,22,0.55)] hover:bg-primary/90">
              Start Selling Today
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-black/10 bg-white px-5 text-[14px] font-semibold shadow-none"
            >
              <CalendarDays data-icon="inline-start" className="size-4" />
              Book a Demo
            </Button>
          </div>

          <ul className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-3 animate-fade-up-delay-2 sm:grid-cols-4 sm:gap-3">
            {trust.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[12px] font-medium text-brand-ink/70"
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-3.5" />
                </span>
                <span className="leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up-delay lg:justify-self-end">
          <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-primary/20 via-transparent to-brand-forest/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_30px_60px_-28px_rgba(15,23,42,0.35)]">
            <Image
              src="/images/Order-Food-Online-Marketplace-07-27-2026_05_15_PM.png"
              alt="Dart Partner restaurant dashboard showing revenue, orders, and analytics"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
