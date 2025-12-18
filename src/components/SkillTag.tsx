interface SkillTagProps {
  src: string;
  alt: string;
  text: string;
  onLoad?: () => void;
}

export default function SkillTag({ src, alt, text, onLoad }: SkillTagProps) {
  return (
    <div className="glass-light py-2 px-4 rounded-full flex items-center gap-2 hover-scale transition-all">
      <img
        src={src}
        alt={alt}
        className="w-8 h-8 md:w-10 md:h-10"
        onLoad={onLoad}
      />
      <span className="hidden md:inline-block font-span font-semibold text-text-primary">
        {text}
      </span>
    </div>
  );
}
