import {
  Bell,
  Search,
  Star,
  Timer,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

function Sparkline({ color = "#F97316" }) {
  return (
    <svg viewBox="0 0 120 36" className="h-9 w-full" aria-hidden>
      <path
        d="M0 28 C12 26, 18 20, 28 18 S44 22, 52 14 S68 8, 78 12 S96 22, 108 10 L120 8"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0 28 C12 26, 18 20, 28 18 S44 22, 52 14 S68 8, 78 12 S96 22, 108 10 L120 8 V36 H0 Z"
        fill={color}
        opacity="0.12"
      />
    </svg>
  );
}

const nav = ["Overview", "Orders", "Menu", "Inventory", "Reports"];

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[540px] overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_30px_60px_-28px_rgba(15,23,42,0.35)]">
      <div className="flex">
        <aside className="hidden w-[118px] shrink-0 border-r border-black/6 bg-[#F8F7F4] p-3 sm:block">
          <div className="mb-4 text-[11px] font-extrabold tracking-tight text-brand-ink">
            Dart
          </div>
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li
                key={item}
                className={`rounded-md px-2 py-1.5 text-[10.5px] font-medium ${
                  i === 0
                    ? "bg-primary/12 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-3.5 sm:p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-black/8 bg-[#FAFAF8] px-2.5 text-[11px] text-muted-foreground">
              <Search className="size-3.5" />
              Search orders, menu…
            </div>
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-black/8">
              <Bell className="size-3.5 text-muted-foreground" />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-black/6 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-medium text-muted-foreground">
                Revenue
              </p>
              <p className="mt-1 text-lg font-bold tracking-tight text-brand-ink">
                ₱23,090
              </p>
              <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <TrendingUp className="size-3" />
                +12%
              </div>
              <div className="mt-2">
                <Sparkline />
              </div>
            </div>

            <div className="rounded-xl border border-black/6 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-medium text-muted-foreground">
                Active Orders
              </p>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-lg font-bold tracking-tight text-brand-ink">
                  43
                </p>
                <ShoppingBag className="size-4 text-primary" />
              </div>
              <div className="mt-3 space-y-1.5">
                {["Preparing", "Ready", "On the way"].map((status, i) => (
                  <div
                    key={status}
                    className="flex items-center justify-between text-[10px]"
                  >
                    <span className="text-muted-foreground">{status}</span>
                    <span className="font-semibold text-brand-ink">
                      {[18, 9, 16][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-black/6 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-medium text-muted-foreground">
                Rating
              </p>
              <div className="mt-1 flex items-center gap-1.5">
                <p className="text-lg font-bold tracking-tight text-brand-ink">
                  4.8
                </p>
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Based on 312 reviews
              </p>
            </div>

            <div className="rounded-xl border border-black/6 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-medium text-muted-foreground">
                Avg Prep Time
              </p>
              <div className="mt-1 flex items-center gap-1.5">
                <p className="text-lg font-bold tracking-tight text-brand-ink">
                  18m
                </p>
                <Timer className="size-3.5 text-primary" />
              </div>
              <p className="mt-1 text-[10px] text-emerald-600 font-medium">
                Under 20 min goal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
