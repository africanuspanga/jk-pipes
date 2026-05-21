import Image from "next/image";
import { CheckIcon, WhatsAppIcon, ArrowRightIcon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

const benefits = [
  "Lightweight and easy to handle",
  "Durable for long-term use",
  "Suitable for residential and industrial applications",
  "Resistant to corrosion, chemicals and weathering",
  "Available with matching fittings",
];

export default function FeaturedPVC() {
  return (
    <section className="relative overflow-hidden bg-jk-surface py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 jk-grid-bg opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[28px] bg-jk-surface shadow-[0_40px_80px_-30px_rgba(17,24,39,0.35)] ring-1 ring-jk-border">
              <Image
                src="/PVC pipe one.jpg"
                alt="JK PVC pipes"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-5 bottom-10 hidden sm:block rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-jk-border">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-jk-red">
                Featured
              </p>
              <p className="text-base font-extrabold text-jk-navy">JK PVC Range</p>
            </div>
            <div className="absolute -top-4 -right-4 hidden sm:block rounded-full bg-jk-red px-4 py-3 text-white shadow-xl jk-float">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">In Stock</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-jk-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jk-red">
            Featured Product
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-jk-navy sm:text-4xl lg:text-5xl">
            JK PVC Pipes <span className="text-jk-red">and Fittings.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-jk-navy/75 sm:text-lg">
            PVC pipes and fittings are lightweight, versatile and durable. They are widely used in
            plumbing, drainage, residential projects and industrial applications. JK PVC solutions
            are suitable for customers looking for quality, strength and reliable performance.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-jk-border bg-white px-4 py-3"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-jk-orange/15 text-jk-orange">
                  <CheckIcon className="h-4 w-4" strokeWidth={2.6} />
                </span>
                <span className="text-sm font-medium text-jk-navy">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-jk-red px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_30px_-14px_rgba(237,28,36,0.55)] transition hover:bg-jk-red-600"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Request PVC Quote
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-jk-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-jk-navy hover:bg-jk-surface"
            >
              See full range
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
