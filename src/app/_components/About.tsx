import Image from "next/image";
import { CheckIcon } from "./Icons";

const highlights = [
  "HDPE, PPH, PPR, PVC & Gas Pipes",
  "Wide range of pipe fittings",
  "Construction, farms, homes, gas & more",
  "Focused on quality, affordability & availability",
];

type Slot = {
  src: string;
  alt: string;
  className: string;
};

const slots: Slot[] = [
  {
    src: "/plumber who uses jk pipes-about us section.png",
    alt: "Plumber working with JK Pipes",
    className: "row-span-2 aspect-[3/4]",
  },
  {
    src: "/connector green.png",
    alt: "JK Pipes green PVC connector",
    className: "aspect-square",
  },
  {
    src: "/Jk pipes pvc in warehouse.png",
    alt: "JK Pipes PVC pipes stacked in warehouse",
    className: "aspect-square",
  },
  {
    src: "/HDPE pipes construction site.jpg",
    alt: "HDPE pipes on a construction site",
    className: "col-span-2 aspect-[16/9]",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="grid grid-cols-2 grid-rows-3 gap-3">
              {slots.map((s) => (
                <div
                  key={s.src}
                  className={`relative overflow-hidden rounded-2xl bg-jk-surface ring-1 ring-jk-border ${s.className}`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block rounded-2xl bg-jk-red px-5 py-4 text-white shadow-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Trusted by
              </p>
              <p className="text-lg font-extrabold">Contractors & Project Owners</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-jk-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jk-red">
            About JK Pipes
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-jk-navy sm:text-4xl lg:text-5xl">
            Strong, durable and reliable plastic pipe solutions for{" "}
            <span className="text-jk-red">every project need.</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-jk-navy/75 sm:text-lg">
            <p>
              JK Pipes provides strong, durable and reliable plastic pipe solutions for different
              project needs. From construction sites and farms to homes, offices, gardens and gas
              installations, we supply pipes and fittings designed for long-lasting performance.
            </p>
            <p>
              Our product range includes <span className="font-semibold text-jk-navy">HDPE pipes,
              PPH pipes, PPR pipes, PVC pipes, Gas pipes</span> and a wide selection of pipe
              fittings. We focus on quality, affordability and availability — making it easy for
              customers, contractors and project owners to get the right piping products when they
              need them.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-xl border border-jk-border bg-white p-3.5"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-jk-red text-white">
                  <CheckIcon className="h-4 w-4" strokeWidth={2.6} />
                </span>
                <span className="text-sm font-medium text-jk-navy">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { k: "5+", v: "Pipe Types" },
              { k: "100%", v: "Project Focus" },
              { k: "TZ", v: "Local Supply" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl bg-jk-navy p-4 text-white shadow-[0_10px_30px_-12px_rgba(17,24,39,0.6)] sm:p-5"
              >
                <p className="text-2xl font-extrabold text-jk-orange sm:text-3xl">{s.k}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
