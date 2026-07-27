import { Tick02Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";

const rows = [
  { item: "Chicken Breast", stock: "2.5 kg", status: "Low Stock", tone: "amber" },
  { item: "Mozzarella", stock: "0 kg", status: "Out of Stock", tone: "rose" },
  { item: "Olive Oil", stock: "8 L", status: "In Stock", tone: "emerald" },
  { item: "Basmati Rice", stock: "1.2 kg", status: "Low Stock", tone: "amber" },
  { item: "Tomato Sauce", stock: "14 L", status: "In Stock", tone: "emerald" },
];

const statusClass = {
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  rose: "bg-rose-50 text-rose-700 ring-rose-200",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const bullets = [
  "Automatic alerts when items are low or out of stock",
  "Act before customers are disappointed",
  "Spend less time checking inventory—and more time serving customers",
];

export function FeatureInventory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SectionAtmosphere variant="forest-left" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]">
          <div className="flex items-center justify-between border-b border-black/6 px-4 py-3">
            <h3 className="text-sm font-bold text-brand-ink">Inventory</h3>
            <span className="text-[11px] font-medium text-amber-700">
              2 alerts
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[360px] text-left text-[12px]">
              <thead className="bg-[#FAFAF8] text-[10.5px] font-semibold tracking-wide text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-2.5">Item</th>
                  <th className="px-3 py-2.5">Stock</th>
                  <th className="px-4 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.item} className="border-t border-black/5">
                    <td className="px-4 py-3 font-semibold text-brand-ink">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">{row.stock}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset ${statusClass[row.tone]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Badge className="rounded-full bg-brand-forest/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-brand-forest uppercase hover:bg-brand-forest/10">
            Inventory Alerts
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Never run out unexpectedly
          </h2>
          <p className="mt-2 text-[16px] font-semibold text-brand-ink/80">
            Stay ahead of low stock.
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Running out of best sellers costs sales. Dart automatically alerts
            you when menu items are low or out of stock, so your team can act
            before customers are disappointed.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] text-brand-ink/85"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-forest/15 text-brand-forest">
                  <Icon icon={Tick02Icon} size={12} strokeWidth={2.5} />
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
