import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { StartSellingCta } from "@/components/landing/start-selling-cta";
import { SectionAtmosphere } from "@/components/landing/section-atmosphere";

export function FinalCta() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white pb-16 sm:pb-20"
    >
      <SectionAtmosphere variant="peach-br" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            <StartSellingCta variant="block" />
            <span className="hidden text-sm text-white/50 sm:inline">or</span>
            <Button
              variant="outline"
              className="h-11 justify-center gap-2.5 rounded-xl border-white/30 bg-transparent px-5 text-center text-[14px] font-semibold text-white shadow-none has-data-[icon=inline-start]:pl-5 hover:bg-white/10 hover:text-white"
            >
              <span data-icon="inline-start" className="inline-flex">
                <Icon icon={Calendar03Icon} size={20} strokeWidth={1.75} />
              </span>
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
