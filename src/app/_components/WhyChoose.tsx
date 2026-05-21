import {
  ShieldIcon,
  PriceIcon,
  TruckIcon,
  LayersIcon,
  UsersIcon,
  SparkleIcon,
} from "./Icons";
import type { SVGProps } from "react";

type Reason = {
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const reasons: Reason[] = [
  {
    title: "Quality Products",
    description:
      "Our pipes and fittings are selected to support long-lasting performance and reliable use.",
    Icon: ShieldIcon,
  },
  {
    title: "Affordable Options",
    description:
      "Practical pipe solutions at competitive prices for different customer needs.",
    Icon: PriceIcon,
  },
  {
    title: "Available Supply",
    description:
      "Get the right pipes and fittings for your projects quickly and easily.",
    Icon: TruckIcon,
  },
  {
    title: "Strong and Durable",
    description:
      "Designed for strength, stability and everyday project demands.",
    Icon: LayersIcon,
  },
  {
    title: "Suitable for Many Uses",
    description:
      "Construction, farms, homes, offices, gardens and gas projects — we cover it.",
    Icon: SparkleIcon,
  },
  {
    title: "Trusted for Projects",
    description:
      "A dependable choice for contractors, builders, homeowners, farmers and project owners.",
    Icon: UsersIcon,
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden bg-jk-navy py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 jk-stripes opacity-[0.06]" aria-hidden />
      <div
        className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-jk-red/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-jk-orange/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jk-orange">
              Why Choose JK Pipes?
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Quality. Affordable.{" "}
              <span className="text-jk-orange">Available.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg lg:col-span-5">
            JK Pipes focuses on strong products, practical pricing and reliable availability for
            customers who need dependable pipe solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-jk-orange/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jk-red text-white shadow-[0_10px_24px_-10px_rgba(237,28,36,0.7)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-extrabold">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{description}</p>
              <span
                className="absolute -bottom-0.5 left-6 h-0.5 w-12 bg-jk-orange transition-all duration-300 group-hover:w-24"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
