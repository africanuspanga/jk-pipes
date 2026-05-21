import Image from "next/image";
import { PhoneIcon, WhatsAppIcon, InstagramIcon } from "./Icons";
import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY,
  PHONE_SECONDARY_TEL,
  WHATSAPP_URL,
  INSTAGRAM_HANDLES,
} from "./constants";

const cols: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Navigate",
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Products", href: "#products" },
      { label: "Applications", href: "#applications" },
      { label: "Why JK Pipes", href: "#why" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "HDPE Pipes", href: "#products" },
      { label: "PPH Pipes", href: "#products" },
      { label: "PPR Pipes", href: "#products" },
      { label: "PVC Pipes", href: "#products" },
      { label: "Gas Pipes", href: "#products" },
      { label: "Pipe Fittings", href: "#products" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-jk-navy text-white">
      <div
        className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-jk-red/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative block h-12 w-12 overflow-hidden rounded-xl bg-white">
                <Image
                  src="/JK PIPES LOGO.png"
                  alt="JK Pipes logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </span>
              <div className="leading-none">
                <p className="text-xl font-extrabold">
                  JK <span className="text-jk-red">Pipes</span>
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Quality • Affordable • Available
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Supplier of durable HDPE, PPH, PPR, PVC and Gas Pipes with fittings — for
              construction, farms, homes, offices, gardens and gas projects across Tanzania.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-jk-red px-4 py-2 text-sm font-semibold text-white hover:bg-jk-red-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE_PRIMARY_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                Call
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-jk-orange">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-jk-orange">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <PhoneIcon className="h-4 w-4 text-jk-orange" />
                <a className="hover:text-white text-white/80" href={`tel:${PHONE_PRIMARY_TEL}`}>
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <PhoneIcon className="h-4 w-4 text-jk-orange" />
                <a className="hover:text-white text-white/80" href={`tel:${PHONE_SECONDARY_TEL}`}>
                  {PHONE_SECONDARY}
                </a>
              </li>
              {INSTAGRAM_HANDLES.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm">
                  <InstagramIcon className="h-4 w-4 text-jk-orange" />
                  <a
                    className="hover:text-white text-white/80"
                    href={`https://instagram.com/${h.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} JK Pipes. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Quality Pipes for Every Project · Bomba Bora kwa Miradi Yako
          </p>
        </div>
      </div>
    </footer>
  );
}
