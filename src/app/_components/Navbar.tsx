"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#applications", label: "Applications" },
  { href: "#why", label: "Why JK Pipes" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_8px_24px_-12px_rgba(17,24,39,0.15)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="JK Pipes — home" className="flex items-center">
          <Image
            src="/JK PIPES LOGO.png"
            alt="JK Pipes"
            width={1341}
            height={498}
            priority
            className="h-16 w-auto sm:h-[68px]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-jk-navy/80 transition hover:bg-jk-red/5 hover:text-jk-red"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-jk-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_-6px_rgba(237,28,36,0.5)] transition hover:bg-jk-red-600"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-jk-navy text-white"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[480px] border-t border-jk-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-white px-4 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-jk-navy hover:bg-jk-surface"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-jk-red px-5 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us Now
          </a>
        </nav>
      </div>
    </header>
  );
}
