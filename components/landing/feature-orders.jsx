import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    customer: "Maria Santos",
    id: "#ORD-1042",
    items: "2 items",
    status: "Preparing",
    tone: "amber",
    time: "2m ago",
  },
  {
    customer: "James Lee",
    id: "#ORD-1041",
    items: "4 items",
    status: "On the way",
    tone: "sky",
    time: "8m ago",
  },
  {
    customer: "Ana Cruz",
    id: "#ORD-1040",
    items: "1 item",
    status: "Ready",
    tone: "emerald",
    time: "12m ago",
  },
  {
    customer: "Ken Park",
    id: "#ORD-1039",
    items: "3 items",
    status: "Preparing",
    tone: "amber",
    time: "14m ago",
  },
];

const statusClass = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  sky: "bg-sky-50 text-sky-700 ring-sky-200",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const bullets = [
  "View active orders in real time",
  "Track preparation times",
  "Monitor order status",
  "Keep your kitchen running smoothly",
];

export function FeatureOrders() {
  return (
    <section id="how-it-works" className="bg-brand-cream/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]">
          <div className="flex items-center justify-between border-b border-black/6 px-4 py-3">
            <h3 className="text-sm font-bold text-brand-ink">Orders</h3>
            <span className="text-[11px] font-medium text-muted-foreground">
              Live · 43 active
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px] text-left text-[12px]">
              <thead className="bg-[#FAFAF8] text-[10.5px] font-semibold tracking-wide text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-2.5">Customer</th>
                  <th className="px-3 py-2.5">Order ID</th>
                  <th className="px-3 py-2.5">Items</th>
                  <th className="px-3 py-2.5">Status</th>
                  <th className="px-4 py-2.5">Time</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((row) => (
                  <tr key={row.id} className="border-t border-black/5">
                    <td className="px-4 py-3 font-semibold text-brand-ink">
                      {row.customer}
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">{row.id}</td>
                    <td className="px-3 py-3 text-muted-foreground">{row.items}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset ${statusClass[row.tone]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Badge className="rounded-full bg-brand-forest/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-brand-forest uppercase hover:bg-brand-forest/10">
            Real-time Orders
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Keep every order under control
          </h2>
          <p className="mt-2 text-[16px] font-semibold text-brand-ink/80">
            From kitchen to customer.
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Never lose track of an order again. Dart gives your team complete
            visibility with live order tracking, preparation times, customer
            details, and delivery status—all from one dashboard.
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
      </div>
    </section>
  );
}
