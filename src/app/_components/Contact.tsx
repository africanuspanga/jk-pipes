import { PhoneIcon, WhatsAppIcon, InstagramIcon, ArrowRightIcon } from "./Icons";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_TEL,
  WHATSAPP_URL,
  INSTAGRAM_HANDLES,
} from "./constants";

const products = [
  "HDPE Pipes",
  "PPH Pipes",
  "PPR Pipes",
  "PVC Pipes",
  "Gas Pipes",
  "Pipe Fittings",
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28">
      {/* Top CTA strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-jk-orange via-jk-red to-jk-red-700 p-6 text-white shadow-[0_30px_60px_-30px_rgba(237,28,36,0.6)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 jk-stripes opacity-20" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/85">
                Need Pipes for Your Project?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Let&apos;s get your project supplied,{" "}
                <span className="text-jk-yellow">today.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
                Contact JK Pipes for HDPE, PPH, PPR, PVC, Gas Pipes and pipe fittings for your
                construction, farming, home, office, garden or gas project.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-jk-red shadow-xl transition hover:bg-jk-yellow hover:text-jk-navy"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Now
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${PHONE_PRIMARY_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-jk-navy px-6 py-4 text-sm font-semibold text-white transition hover:bg-black"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {PHONE_PRIMARY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact details grid */}
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Phone card */}
          <article className="rounded-2xl border border-jk-border bg-white p-6 shadow-[0_8px_24px_-16px_rgba(17,24,39,0.18)]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jk-red/10 text-jk-red">
              <PhoneIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-jk-navy">Phone & WhatsApp</h3>
            <p className="mt-1 text-sm text-jk-navy/65">Call or message anytime.</p>
            <div className="mt-4 space-y-2">
              <a
                href={`tel:${PHONE_PRIMARY_TEL}`}
                className="block text-base font-semibold text-jk-navy hover:text-jk-red"
              >
                {PHONE_PRIMARY}
              </a>
              <a
                href={`tel:${PHONE_SECONDARY_TEL}`}
                className="block text-base font-semibold text-jk-navy hover:text-jk-red"
              >
                {PHONE_SECONDARY}
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-jk-red hover:gap-3"
            >
              Open WhatsApp <ArrowRightIcon className="h-4 w-4" />
            </a>
          </article>

          {/* Products card */}
          <article className="rounded-2xl border border-jk-border bg-jk-navy p-6 text-white">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jk-orange/20 text-jk-orange">
              <ArrowRightIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold">Products We Supply</h3>
            <p className="mt-1 text-sm text-white/70">Ask about any of the below.</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3">
              {products.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-jk-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </article>

          {/* Instagram card */}
          <article className="rounded-2xl border border-jk-border bg-white p-6 shadow-[0_8px_24px_-16px_rgba(17,24,39,0.18)]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jk-orange/15 text-jk-orange">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-jk-navy">Follow on Instagram</h3>
            <p className="mt-1 text-sm text-jk-navy/65">
              See products, projects and updates.
            </p>
            <ul className="mt-4 space-y-2">
              {INSTAGRAM_HANDLES.map((h) => (
                <li key={h}>
                  <a
                    href={`https://instagram.com/${h.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-jk-navy hover:text-jk-red"
                  >
                    <InstagramIcon className="h-4 w-4" /> {h}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-10 text-center text-sm text-jk-navy/65">
          For product availability, pricing and project supply, contact us directly through
          WhatsApp or phone call.
        </p>
      </div>
    </section>
  );
}
