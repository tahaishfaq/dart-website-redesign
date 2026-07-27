import {
  BarChart3,
  ClipboardList,
  CookingPot,
  MessageSquareHeart,
  Package,
  Store,
  Wallet,
} from "lucide-react";

const modules = [
  {
    icon: Store,
    title: "Brand & Business",
    body: "Manage your restaurant profile, locations, and branches from one place.",
  },
  {
    icon: ClipboardList,
    title: "Orders",
    body: "Receive, prepare, and manage every order in real time.",
  },
  {
    icon: CookingPot,
    title: "Menu Management",
    body: "Keep your menu accurate, updated, and available.",
  },
  {
    icon: MessageSquareHeart,
    title: "Reviews",
    body: "Build trust and improve customer satisfaction.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    body: "Understand your business with live reporting.",
  },
  {
    icon: Package,
    title: "Inventory",
    body: "Avoid stock shortages before they affect sales.",
  },
  {
    icon: Wallet,
    title: "Payments",
    body: "Track earnings, transactions, and payouts effortlessly.",
  },
];

export function PlatformModules() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Everything you need to run your restaurant
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-black/6 bg-white p-5 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.35)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 text-primary">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-[15px] font-bold tracking-tight text-brand-ink">
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
