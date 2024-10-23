interface TagsProps {
  src: string;
  alt: string;
  text: string;
}

export default function Tags({src, alt, text}: TagsProps) {
  return (
    <div className="bg-gray-700 py-2 px-4 rounded-3xl flex gap-2">
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
}
