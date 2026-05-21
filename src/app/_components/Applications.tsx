import {
  HammerIcon,
  LeafIcon,
  HomeIcon,
  BriefcaseIcon,
  DropletIcon,
  FlameIcon,
} from "./Icons";
import type { SVGProps } from "react";

type App = {
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const apps: App[] = [
  {
    title: "Construction Projects",
    description:
      "Reliable piping solutions for buildings, drainage, plumbing and infrastructure works.",
    Icon: HammerIcon,
  },
  {
    title: "Farms and Agriculture",
    description:
      "Strong pipes for irrigation, water movement and agricultural project use.",
    Icon: LeafIcon,
  },
  {
    title: "Homes & Residential",
    description:
      "PVC, PPR and other pipe solutions for household plumbing and water systems.",
    Icon: HomeIcon,
  },
  {
    title: "Offices & Commercial",
    description:
      "Quality pipes and fittings for business premises and commercial property projects.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Gardens & Outdoor Use",
    description:
      "Durable pipe options for gardens, landscaping and outdoor water systems.",
    Icon: DropletIcon,
  },
  {
    title: "Gas Projects",
    description:
      "Gas pipe solutions for projects that require dependable pipe supply.",
    Icon: FlameIcon,
  },
];

export default function Applications() {
  return (
    <section id="applications" className="relative py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-jk-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jk-orange">
            Applications
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-jk-navy sm:text-4xl lg:text-5xl">
            Built for <span className="text-jk-red">different needs.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-jk-navy/70 sm:text-lg">
            JK Pipes products are suitable for multiple environments and project types.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map(({ title, description, Icon }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-jk-border bg-white p-6 transition hover:border-jk-red/30 hover:shadow-[0_18px_36px_-18px_rgba(237,28,36,0.35)]"
            >
              <span
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-jk-red/10 transition group-hover:scale-125"
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-jk-navy text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-jk-red">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-jk-navy">{title}</h3>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-jk-navy/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
