import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="pricing" className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[1.5rem] bg-brand-forest px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to grow your restaurant?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Join restaurants using Dart to simplify operations, serve
              customers faster, and increase revenue.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="h-11 rounded-xl bg-primary px-5 text-[14px] font-semibold text-white shadow-none hover:bg-primary/90">
              Start Selling Today
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <span className="hidden text-sm text-white/50 sm:inline">or</span>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-white/30 bg-transparent px-5 text-[14px] font-semibold text-white shadow-none hover:bg-white/10 hover:text-white"
            >
              <CalendarDays data-icon="inline-start" className="size-4" />
              Book a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
