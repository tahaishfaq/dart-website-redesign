import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const rows = [
  { label: "Today’s earnings", value: "₱23,090.00", tone: "text-brand-ink" },
  { label: "Transactions", value: "128", tone: "text-brand-ink" },
  { label: "Pending payout", value: "₱8,450.00", tone: "text-amber-700" },
  { label: "Last payout", value: "₱14,200.00", tone: "text-emerald-700" },
];

const bullets = [
  "View earnings in one place",
  "Track transactions and payouts",
  "Review full payment history",
  "No manual calculations or uncertainty",
];

export function FeaturePayments() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="order-2 lg:order-1">
          <Badge className="rounded-full bg-brand-forest/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-brand-forest uppercase hover:bg-brand-forest/10">
            Payments
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Payments made simple
          </h2>
          <p className="mt-2 text-[16px] font-semibold text-brand-ink/80">
            Know exactly what you’ve earned.
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Track every peso from one place. View earnings, transactions,
            payouts, and payment history with complete financial visibility.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] text-brand-ink/85"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-forest/15 text-brand-forest">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] lg:order-2">
          <div className="border-b border-black/6 px-4 py-3">
            <h3 className="text-sm font-bold text-brand-ink">Earnings</h3>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              No manual calculations. No uncertainty.
            </p>
          </div>
          <ul className="divide-y divide-black/5">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-3 px-4 py-3.5"
              >
                <span className="text-[13px] text-muted-foreground">
                  {row.label}
                </span>
                <span className={`text-[14px] font-bold ${row.tone}`}>
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
