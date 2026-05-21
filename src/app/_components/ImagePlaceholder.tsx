import type { ReactNode } from "react";

type Props = {
  label?: string;
  hint?: string;
  className?: string;
  rounded?: string;
  tone?: "red" | "navy" | "orange" | "neutral";
  children?: ReactNode;
};

const TONES: Record<NonNullable<Props["tone"]>, string> = {
  red: "from-jk-red/12 via-white to-jk-orange/15 ring-jk-red/15 text-jk-red",
  navy: "from-jk-navy/8 via-white to-jk-navy/5 ring-jk-navy/15 text-jk-navy",
  orange: "from-jk-orange/15 via-white to-jk-yellow/20 ring-jk-orange/20 text-jk-orange",
  neutral: "from-zinc-100 via-white to-zinc-100 ring-jk-border text-jk-navy/60",
};

export default function ImagePlaceholder({
  label = "Image",
  hint = "Photo coming soon",
  className = "",
  rounded = "rounded-2xl",
  tone = "neutral",
  children,
}: Props) {
  return (
    <div
      className={`relative isolate overflow-hidden ${rounded} bg-gradient-to-br ${TONES[tone]} ring-1 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 jk-grid-bg opacity-40" aria-hidden />
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-white/40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/40 blur-3xl" aria-hidden />
      <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {label}
        </span>
        <p className="mt-3 text-xs font-medium text-jk-navy/60">{hint}</p>
        {children}
      </div>
    </div>
  );
}
