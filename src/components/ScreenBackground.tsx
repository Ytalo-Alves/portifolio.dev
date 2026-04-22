type ScreenBackgroundProps = {
  gridOpacityClassName?: string;
};

export default function ScreenBackground({
  gridOpacityClassName = "opacity-[0.12]",
}: ScreenBackgroundProps) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-grid ${gridOpacityClassName} pointer-events-none`}
      />
      <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-indigo-500/[0.12] blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-cyan-500/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-zinc-950/80 pointer-events-none" />
    </>
  );
}

