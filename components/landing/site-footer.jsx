import Image from "next/image";

const productLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "Orders" },
  { href: "#menu", label: "Menu" },
  { href: "#analytics", label: "Analytics" },
  { href: "#payments", label: "Payments" },
];

const companyLinks = [
  { href: "#restaurant-types", label: "Who it is for" },
  { href: "#platform", label: "Platform modules" },
  { href: "#why-dart", label: "Why Dart" },
  { href: "#pricing", label: "Book a demo" },
];

export function SiteFooter() {
  return (
    <footer
      id="resources"
      className="relative overflow-x-clip overflow-y-hidden bg-transparent"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 h-56 bg-[radial-gradient(ellipse_at_top,rgba(255,176,136,0.1),transparent_72%)]"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-7 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] lg:gap-12 lg:px-8 lg:py-9">
        <div className="max-w-sm">
          <Image
            src="/images/dart-logo.svg"
            alt="Dart Partner"
            width={180}
            height={40}
            className="h-7 w-auto"
            unoptimized
          />
          <p className="mt-4 text-[14px] leading-relaxed text-brand-ink/65">
            Restaurant operations, simplified. Run orders, menu, inventory,
            reviews, analytics, and payouts from one dashboard.
          </p>
          <a
            href="mailto:hello@dartpartner.com"
            className="mt-4 inline-flex text-[14px] font-medium text-primary transition-colors hover:text-primary/80"
          >
            hello@dartpartner.com
          </a>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold tracking-tight text-brand-ink">
            Product
          </h3>
          <ul className="mt-4 space-y-2.5">
            {productLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14px] text-brand-ink/65 transition-colors hover:text-brand-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold tracking-tight text-brand-ink">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14px] text-brand-ink/65 transition-colors hover:text-brand-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-[12px] text-brand-ink/55">
            © {new Date().getFullYear()} Dart Partner. All rights reserved.
          </p>
          <p className="text-[12px] text-brand-ink/45">
            Built for modern restaurant teams
          </p>
        </div>
      </div>
    </footer>
  );
}
