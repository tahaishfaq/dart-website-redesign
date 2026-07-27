import {
  Building02Icon,
  Coffee02Icon,
  Package01Icon,
  ShoppingBag01Icon,
  SpoonAndForkIcon,
  Store01Icon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";

const types = [
  { icon: SpoonAndForkIcon, label: "Restaurants" },
  { icon: Store01Icon, label: "Cafés" },
  { icon: Coffee02Icon, label: "Coffee Shops" },
  { icon: Building02Icon, label: "Cloud Kitchens" },
  { icon: ShoppingBag01Icon, label: "Takeaways" },
  { icon: Package01Icon, label: "Multi-branch Businesses" },
];

export function RestaurantTypes() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-14 sm:py-16"
    >
      <SectionAtmosphere variant="peach-top" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
          {types.map(({ icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-black/8 bg-white text-brand-ink shadow-sm">
                <Icon icon={icon} size={24} strokeWidth={1.5} />
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
