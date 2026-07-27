import {
  Cancel01Icon,
  StarIcon,
  Timer01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";

function Spark({ color = "#F97316", up = true }) {
  const d = up
    ? "M0 26 C10 24, 18 18, 28 16 S48 20, 58 12 S78 6, 90 10 L110 4"
    : "M0 8 C14 10, 24 16, 36 18 S58 14, 70 20 S90 28, 110 24";
  return (
    <svg viewBox="0 0 110 32" className="mt-2 h-8 w-full" aria-hidden>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const metrics = [
  {
    label: "Today’s revenue",
    value: "₱23,090.00",
    meta: "+42% vs last week",
    metaClass: "text-emerald-600",
    body: <Spark color="#F97316" />,
  },
  {
    label: "Live orders",
    value: "43",
    meta: "Daily orders tracked",
    metaClass: "text-muted-foreground",
    body: (
      <div className="mt-3 flex items-center gap-2 text-primary">
        <Icon icon={UserIcon} size={16} />
        <span className="text-[11px] font-medium text-muted-foreground">
          Peak lunch service
        </span>
      </div>
    ),
  },
  {
    label: "Preparation time",
    value: "20 min",
    meta: "Active menu items live",
    metaClass: "text-muted-foreground",
    body: (
      <div className="mt-3 flex items-center gap-2 text-primary">
        <Icon icon={Timer01Icon} size={16} />
        <span className="text-[11px] font-medium text-muted-foreground">
          On track
        </span>
      </div>
    ),
  },
  {
    label: "Cancellation rate",
    value: "0.0%",
    meta: "No cancels today",
    metaClass: "text-emerald-600",
    body: (
      <div className="mt-3 flex items-center gap-2 text-rose-500">
        <Icon icon={Cancel01Icon} size={16} />
        <span className="text-[11px] font-medium text-muted-foreground">
          Clean service day
        </span>
      </div>
    ),
  },
  {
    label: "Customer ratings",
    value: "4.0",
    meta: "Weekly revenue in view",
    metaClass: "text-muted-foreground",
    body: (
      <div className="mt-3 flex items-center gap-1 text-amber-400">
        {Array.from({ length: 4 }).map((_, i) => (
          <Icon key={i} icon={StarIcon} size={14} />
        ))}
        <Icon icon={StarIcon} size={14} className="opacity-40" />
      </div>
    ),
  },
];

export function Analytics() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SectionAtmosphere variant="dual" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Understand what drives your revenue.{" "}
            <span className="text-primary">Data that helps you grow.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Powerful insights shouldn’t require complicated reports. Track
            revenue trends, order performance, customer ratings, weekly sales,
            best-selling items, and restaurant performance.
          </p>
          <p className="mt-3 text-[15px] font-medium text-brand-ink/75">
            See what’s working. Spot opportunities faster. Make better business
            decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((m) => (
            <article
              key={m.label}
              className="rounded-2xl border border-black/6 bg-white p-4 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.4)]"
            >
              <p className="text-[11px] font-medium text-muted-foreground">
                {m.label}
              </p>
              <p className="mt-1.5 text-xl font-extrabold tracking-tight text-brand-ink">
                {m.value}
              </p>
              <p className={`mt-1 text-[11px] font-medium ${m.metaClass}`}>
                {m.meta}
              </p>
              {m.body}
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[14px] text-muted-foreground">
          No spreadsheets. No guesswork. Just the numbers that matter.
        </p>
      </div>
    </section>
  );
}
