import {
  BarChart3,
  ClipboardList,
  CookingPot,
  MessageSquareHeart,
  Package,
  Store,
  Wallet,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "See your business at a glance",
    body: "Know exactly what’s happening in real time — revenue, live orders, prep time, and ratings the moment you log in.",
  },
  {
    icon: ClipboardList,
    title: "Keep every order under control",
    body: "Live order tracking, preparation times, customer details, and delivery status — all from one dashboard.",
  },
  {
    icon: CookingPot,
    title: "Your menu, always up to date",
    body: "Add dishes, edit prices, pause unavailable items, or import your entire menu in minutes.",
  },
  {
    icon: Package,
    title: "Never run out unexpectedly",
    body: "Automatic alerts when items are low or out of stock — act before customers are disappointed.",
  },
  {
    icon: LineChart,
    title: "Understand what drives your revenue",
    body: "Track trends, order performance, best sellers, and restaurant performance without complicated reports.",
  },
  {
    icon: MessageSquareHeart,
    title: "Happy customers keep coming back",
    body: "Monitor ratings, respond to reviews, and turn great service into repeat business.",
  },
  {
    icon: Wallet,
    title: "Payments made simple",
    body: "Track every peso — earnings, transactions, payouts, and payment history from one place.",
  },
  {
    icon: Store,
    title: "Built for restaurants that move fast",
    body: "Whether you serve 20 orders a day or 2,000, stay organised and deliver a better customer experience.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Everything your restaurant needs.{" "}
            <span className="text-primary">All in one place.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Stop juggling multiple tools. Dart brings your restaurant operations
            together in one simple platform, giving you complete visibility over
            every order, every sale, and every customer.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Whether you run a café, takeaway, cloud kitchen, or restaurant
            chain, Dart helps you operate with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-black/6 bg-white p-5 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_16px_32px_-20px_rgba(15,23,42,0.4)]"
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
