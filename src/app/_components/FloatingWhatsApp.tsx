import Image from "next/image";
import { WHATSAPP_URL } from "./constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp JK Pipes"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="hidden rounded-full bg-jk-navy px-3.5 py-2 text-xs font-semibold text-white shadow-lg sm:inline-flex">
        Chat on WhatsApp
      </span>
      <span className="relative inline-block h-14 w-14 sm:h-16 sm:w-16">
        <span
          className="absolute inset-0 rounded-full jk-pulse"
          aria-hidden
        />
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          fill
          sizes="64px"
          className="relative object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)] transition group-hover:scale-105"
          priority
        />
      </span>
    </a>
  );
}
