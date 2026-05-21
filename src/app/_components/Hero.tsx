import Image from "next/image";
import { WhatsAppIcon, ArrowRightIcon, CheckIcon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

const badges = ["Durable", "Reliable", "Project Ready"];
const trust = ["Quality", "Affordable", "Available"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src="/Hero background image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Readability overlay — strong on mobile, lighter / left-biased on desktop */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/85 to-white/60 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/85 lg:to-white/30"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 jk-radial opacity-70" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] jk-grid-bg opacity-40" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-jk-red/20 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-jk-red shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-jk-red" />
            Quality Pipes for Every Project
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-jk-navy sm:text-5xl lg:text-6xl">
            JK Pipes for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-jk-red">Reliable Projects</span>
              <span
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-md bg-jk-yellow/60"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-jk-navy/80 sm:text-lg">
            High-quality{" "}
            <span className="font-semibold text-jk-navy">HDPE, PPH, PPR, PVC and Gas Pipes</span>{" "}
            for construction, farms, homes, offices, gardens and industrial projects.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2 sm:gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-jk-navy px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-jk-orange" />
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-jk-red px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-15px_rgba(237,28,36,0.55)] transition hover:bg-jk-red-600"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us Now
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-jk-navy/15 bg-white/90 px-7 py-4 text-base font-semibold text-jk-navy backdrop-blur transition hover:border-jk-navy/30 hover:bg-white"
            >
              View Products
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {trust.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 text-sm font-medium text-jk-navy/80"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-jk-red/10 text-jk-red">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating product cards — desktop overlay over the bg image */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] w-full">
            <div className="jk-float absolute -left-4 top-10 flex w-56 items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl ring-1 ring-jk-border backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jk-red/10 text-jk-red">
                <CheckIcon className="h-5 w-5" strokeWidth={2.4} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-jk-navy/60">
                  Tested
                </p>
                <p className="text-sm font-semibold text-jk-navy">Quality Assured</p>
              </div>
            </div>

            <div className="jk-float absolute right-0 bottom-10 flex w-60 items-center gap-3 rounded-2xl bg-jk-navy/95 p-3.5 text-white shadow-xl backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jk-orange/20 text-jk-orange">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  Fast Quote
                </p>
                <p className="text-sm font-semibold">Reply in minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-12 overflow-hidden border-y border-jk-border bg-jk-navy py-4 text-white sm:mt-16">
        <div className="absolute inset-0 jk-stripes opacity-30" aria-hidden />
        <div className="relative flex w-max items-center gap-12 whitespace-nowrap jk-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {[
                "HDPE Pipes",
                "PPH Pipes",
                "PPR Pipes",
                "PVC Pipes",
                "Gas Pipes",
                "Pipe Fittings",
                "Construction",
                "Agriculture",
                "Homes",
                "Offices",
                "Gardens",
                "Industrial",
              ].map((item) => (
                <span
                  key={`${i}-${item}`}
                  className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-jk-orange" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
