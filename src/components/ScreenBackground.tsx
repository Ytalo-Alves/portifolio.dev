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
      <div className="absolute top-[-200px] right-[-200px] w-[560px] h-[560px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-240px] left-[-240px] w-[640px] h-[640px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black pointer-events-none" />
    </>
  );
}

