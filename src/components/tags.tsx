interface TagsProps {
  src: string;
  alt: string;
  text: string;
}

export default function Tags({src, alt, text}: TagsProps) {
  return (
    <div className="bg-gray-700 py-2 px-4 rounded-3xl flex items-center gap-2">
      <img src={src} alt={alt} className="w-8 md:w-10 md:h-10"/>
      <span className="hidden md:inline-block items-center font-semibold md:font-bold ">{text}</span>
    </div>
  );
}
