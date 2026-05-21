import Image from "next/image";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

type Product = {
  name: string;
  short: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    name: "HDPE Pipes",
    short: "Water · Irrigation · Industrial",
    description:
      "Strong and reliable HDPE pipes suitable for water supply, irrigation, construction projects and industrial use.",
    tag: "01",
    image: "/HDPE pipes for constructions.jpg",
    alt: "HDPE pipes for construction projects",
  },
  {
    name: "PPH Pipes",
    short: "Heavy-duty applications",
    description:
      "Durable PPH pipes designed for demanding applications where strength, resistance and long service life are important.",
    tag: "02",
    image: "/black pipes.png",
    alt: "PPH black pipes",
  },
  {
    name: "PPR Pipes",
    short: "Plumbing · Water systems",
    description:
      "Reliable PPR pipes for plumbing, water systems and building projects requiring clean and dependable pipe solutions.",
    tag: "03",
    image: "/green pipes.png",
    alt: "PPR green pipes for plumbing",
  },
  {
    name: "PVC Pipes",
    short: "Plumbing · Drainage · Construction",
    description:
      "Lightweight, durable and versatile PVC pipes for plumbing, drainage and general construction applications.",
    tag: "04",
    image: "/PVC Pipes.jpg",
    alt: "JK PVC pipes",
  },
  {
    name: "Gas Pipes",
    short: "Safe gas installations",
    description:
      "Quality gas pipe solutions suitable for safe and reliable gas-related installations and project needs.",
    tag: "05",
    image: "/Gas pipe.jpg",
    alt: "Gas pipes for installations",
  },
  {
    name: "Pipe Fittings",
    short: "Connect · Join · Complete",
    description:
      "A wide selection of pipe fittings for connecting, joining and completing piping systems efficiently.",
    tag: "06",
    image: "/pipe fittings.png",
    alt: "JK pipe fittings selection",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-jk-surface py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 jk-grid-bg opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jk-red ring-1 ring-jk-red/15">
              Our Products
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-jk-navy sm:text-4xl lg:text-5xl">
              Pipes and fittings for{" "}
              <span className="text-jk-red">every need.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-jk-navy/70 sm:text-lg">
              Explore our range of durable pipes and fittings for different applications — from
              residential plumbing to heavy industrial installations.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-jk-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask about availability
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-16px_rgba(17,24,39,0.18)] ring-1 ring-jk-border transition hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(17,24,39,0.25)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-jk-surface">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-jk-navy shadow">
                <span className="h-1.5 w-1.5 rounded-full bg-jk-red" />
                {p.tag}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-jk-red">
                  {p.short}
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-jk-navy">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-jk-navy/70">{p.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-jk-red transition group-hover:gap-3"
                >
                  Get a quote
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
