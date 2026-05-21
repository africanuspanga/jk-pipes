import Image from "next/image";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

const points = [
  "Haimomonyoki",
  "Nguvu na imara",
  "Ubora wa kimataifa",
  "Bei nafuu",
  "Inapatikana kwa urahisi",
];

export default function SwahiliCTA() {
  return (
    <section className="relative overflow-hidden bg-jk-red py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 jk-stripes opacity-25" aria-hidden />
      <div
        className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-jk-orange/35 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-32 -bottom-20 h-80 w-80 rounded-full bg-jk-yellow/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            Kiswahili
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Bomba Bora kwa{" "}
            <span className="text-jk-yellow">Mahitaji Yako.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Kwa mahitaji ya miradi, mashambani, majumbani, maofisini, kwenye garden na matumizi ya
            gas — JK Pipes inakuletea bomba na fittings zenye ubora, uimara na bei nafuu.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-2 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur sm:px-4 sm:text-sm"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-jk-yellow text-jk-navy">
                  <CheckIcon className="h-3 w-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-jk-red shadow-[0_18px_38px_-14px_rgba(0,0,0,0.45)] transition hover:bg-jk-yellow hover:text-jk-navy"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Wasiliana Nasi WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] ring-1 ring-white/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]">
              <Image
                src="/irrigation pipes.jpg"
                alt="Irrigation pipes from JK Pipes used on farms"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 sm:block">
              <div className="rounded-2xl bg-jk-navy px-5 py-3 text-white shadow-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-jk-orange">
                  Tagline
                </p>
                <p className="text-sm font-extrabold">Uimara na Ubora wa Hali ya Juu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
