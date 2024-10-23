import { IconType } from "react-icons";

interface ButtonLinkProps {
  src: string;
  alt: string;
  text: string;
  Icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
}

export default function ButtonLink({ src, alt, text, Icon, iconProps }: ButtonLinkProps){
  return (
    <button className="flex items-center justify-between bg-gray-700 rounded-lg p-5 w-[450px]">
    <div className="flex gap-4">
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
    <Icon {...iconProps} /></button>
  )
}