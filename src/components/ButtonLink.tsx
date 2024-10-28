import { IconType } from "react-icons";

interface ButtonLinkProps {
  src: string;
  alt: string;
  text: string;
  Icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
  onLoad?: ()=> void;
}

export default function ButtonLink({ src, alt, text, Icon, iconProps, onLoad }: ButtonLinkProps){
  return (
    <button className="flex items-center justify-between bg-gray-700 rounded-lg p-5 lg:w-[450px] md:w-screen">
    <div className="flex gap-4">
      <img src={src} alt={alt} onLoad={onLoad} />
      <span className="hidden sm:block">{text}</span>
    </div>
    <Icon {...iconProps} className="hidden md:inline-block text-3xl text-blue-500"/>
    
    </button>
  )
}