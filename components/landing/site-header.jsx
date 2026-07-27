"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="shrink-0">
          <Image
            src="/images/dart-logo.svg"
            alt="Dart Partner"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
            unoptimized
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-brand-ink/70 transition-colors hover:text-brand-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            className="h-9 rounded-lg border-black/10 px-3.5 text-[13px] font-semibold shadow-none"
          >
            Book a Demo
          </Button>
          <Button className="h-9 rounded-lg bg-primary px-3.5 text-[13px] font-semibold text-white shadow-none hover:bg-primary/90">
            Start Selling Today
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-lg border border-black/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-ink/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="h-10 w-full justify-center rounded-lg">
              Book a Demo
            </Button>
            <Button className="h-10 w-full justify-center rounded-lg bg-primary text-white hover:bg-primary/90">
              Start Selling Today
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
