interface CardProps {
  src : string;
  alt : string;
  title: string;
  text: string;
  onLoad?: ()=> void;
}
export default function Card({src, alt, text, title, onLoad}: CardProps) {
  return(
      
        <div className='bg-gray-700 p-3 rounded-lg max-w-80'>
          <img src={src} alt={alt} className='rounded-md w-[306px] h-[156px]' onLoad={onLoad} />
          <h2 className='mt-6 font-title font-bold mb-2'>{title}</h2>
          <span className='text-gray-400 text-sm'>{text}</span>
        </div>
       
    
  )
}