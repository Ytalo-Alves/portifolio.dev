import { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={[
        "relative z-10",
        isCenter ? "text-center" : "text-left",
      ].join(" ")}
    >
      <div
        className={[
          "inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 w-fit",
          isCenter ? "mx-auto" : "",
        ].join(" ")}
      >
        <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
        <span className="text-text-secondary font-mono text-xs tracking-[0.3em] uppercase">
          {label}
        </span>
      </div>

      <h2 className="mt-6 text-3xl md:text-5xl font-title font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={[
            "mt-4 text-text-secondary max-w-2xl",
            isCenter ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}

