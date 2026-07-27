"use client";

import { useState } from "react";
import Image from "next/image";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/icon";
import { StartSellingCta } from "@/components/landing/start-selling-cta";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 w-full bg-transparent"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a href="#hero" className="shrink-0">
          <Image
            src="/images/dart-logo.svg"
            alt="Dart Partner"
            width={180}
            height={40}
            className="h-7 w-auto sm:h-8"
            priority
            unoptimized
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium tracking-tight text-brand-ink/80 transition-colors hover:text-brand-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <StartSellingCta variant="nav" />
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-full border border-black/10 bg-transparent lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon
            icon={open ? Cancel01Icon : Menu01Icon}
            size={20}
            strokeWidth={1.75}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/[0.06] bg-transparent px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink/80 hover:bg-black/[0.04]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-3 max-w-6xl border-t border-black/5 pt-3">
            <StartSellingCta variant="full" />
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
