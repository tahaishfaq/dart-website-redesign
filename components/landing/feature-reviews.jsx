import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Sofia Reyes",
    rating: 5,
    text: "Food arrived hot and exactly as ordered. Will order again!",
  },
  {
    name: "Mark Tan",
    rating: 4,
    text: "Great portions and fast prep. Packaging was solid.",
  },
  {
    name: "Lina Gomez",
    rating: 5,
    text: "Best truffle pasta in the area. Super reliable service.",
  },
];

const bullets = [
  "Monitor ratings from one dashboard",
  "Respond to reviews and build trust",
  "Understand performance from your customers’ perspective",
  "Turn great service into repeat business",
];

export function FeatureReviews() {
  return (
    <section className="bg-brand-cream/50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]">
          <div className="flex items-center justify-between border-b border-black/6 px-4 py-3">
            <h3 className="text-sm font-bold text-brand-ink">Reviews</h3>
            <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-ink">
              4.8 <Star className="size-3.5 fill-amber-400 text-amber-400" />
            </span>
          </div>
          <ul className="divide-y divide-black/5">
            {reviews.map((review) => (
              <li key={review.name} className="px-4 py-3.5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[13px] font-semibold text-brand-ink">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                  {review.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Badge className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-primary uppercase hover:bg-primary/10">
            Customer Reviews
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Happy customers keep coming back
          </h2>
          <p className="mt-2 text-[16px] font-semibold text-brand-ink/80">
            Build trust with every review.
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Customer feedback is built directly into your dashboard. Monitor
            ratings, respond to reviews, and understand how your restaurant is
            performing from your customers’ perspective.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] text-brand-ink/85"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
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
