import {
  ChartLineData01Icon,
  Clock01Icon,
  Settings01Icon,
  TradeUpIcon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";

const reasons = [
  {
    icon: Clock01Icon,
    title: "Save time",
    body: "Automate everyday tasks and spend more time serving customers.",
  },
  {
    icon: TradeUpIcon,
    title: "Increase sales",
    body: "Keep your menu available, reduce missed orders, and maximise every opportunity.",
  },
  {
    icon: Settings01Icon,
    title: "Improve operations",
    body: "Manage your entire restaurant from one simple dashboard.",
  },
  {
    icon: ChartLineData01Icon,
    title: "Make smarter decisions",
    body: "Real-time insights help you grow with confidence.",
  },
];

export function WhyDart() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SectionAtmosphere variant="dual" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
          Why restaurants choose <span className="text-primary">Dart</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon, title, body }) => (
            <article key={title} className="rounded-2xl p-1">
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-primary/25 text-primary">
                <Icon icon={icon} size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-[16px] font-bold text-brand-ink">
                {title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
