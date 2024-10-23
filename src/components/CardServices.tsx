
interface CardServicesProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

export default function CardServices({src, alt, title, text}: CardServicesProps){
  return (
    <div className="border border-zinc-700 p-5 rounded-lg w-[250px]">
            <img src={src} alt={alt} />
            <h2 className="font-title text-xl mt-6 font-bold">
              {title}
            </h2>
            <p className="text-sm text-gray-400 mt-3 text-balance">
              {text}
            </p>
          </div>
  )
}