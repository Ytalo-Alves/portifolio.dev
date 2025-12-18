import { IconType } from "react-icons";

interface ButtonLinkProps {
  src: string;
  alt: string;
  text: string;
  Icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
  onLoad?: () => void;
}

export default function ButtonLink({
  src,
  alt,
  text,
  Icon,
  iconProps,
  onLoad,
}: ButtonLinkProps) {
  return (
    <button className="glass-light w-full md:w-[450px] flex items-center justify-between p-5 rounded-lg hover-lift transition-all duration-300 group">
      <div className="flex gap-4 items-center">
        <img src={src} alt={alt} className="w-10 h-10" onLoad={onLoad} />
        <span className="font-span font-medium text-text-primary group-hover:text-accent transition-colors">
          {text}
        </span>
      </div>
      <Icon
        {...iconProps}
        className="text-accent group-hover:translate-x-1 transition-transform"
      />
    </button>
  );
}
