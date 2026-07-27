import {
  Building2,
  Coffee,
  Package,
  ShoppingBag,
  Store,
  UtensilsCrossed,
} from "lucide-react";

const types = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Store, label: "Cafés" },
  { icon: Coffee, label: "Coffee Shops" },
  { icon: Building2, label: "Cloud Kitchens" },
  { icon: ShoppingBag, label: "Takeaways" },
  { icon: Package, label: "Multi-branch Businesses" },
];

export function RestaurantTypes() {
  return (
    <section id="solutions" className="bg-brand-cream/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl">
            Designed for restaurants that move fast
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Whether you’re serving 20 orders a day or 2,000, Dart helps your
            team stay organised, reduce mistakes, and deliver a better customer
            experience.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {types.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-black/8 bg-white text-brand-ink shadow-sm">
                <Icon className="size-6" strokeWidth={1.5} />
              </span>
              <span className="text-[13px] font-semibold text-brand-ink/80">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
