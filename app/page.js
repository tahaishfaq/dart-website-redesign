import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { AboutDart } from "@/components/landing/about-dart";
import { AtAGlance } from "@/components/landing/at-a-glance";
import { FeatureOrders } from "@/components/landing/feature-orders";
import { FeatureMenu } from "@/components/landing/feature-menu";
import { FeatureInventory } from "@/components/landing/feature-inventory";
import { Analytics } from "@/components/landing/analytics";
import { FeatureReviews } from "@/components/landing/feature-reviews";
import { FeaturePayments } from "@/components/landing/feature-payments";
import { RestaurantTypes } from "@/components/landing/restaurant-types";
import { PlatformModules } from "@/components/landing/platform-modules";
import { WhyDart } from "@/components/landing/why-dart";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <AboutDart />
        <AtAGlance />
        <FeatureOrders />
        <FeatureMenu />
        <FeatureInventory />
        <Analytics />
        <FeatureReviews />
        <FeaturePayments />
        <RestaurantTypes />
        <PlatformModules />
        <WhyDart />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
