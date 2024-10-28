import { FaAnglesDown } from "react-icons/fa6";
import Tags from "../components/tags";
import { useRef } from "react";

export default function Home(){

  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return(
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-bg-info bg-cover p-4">
    <div className="relative inline-block animate-fadeDown">
      <img
        src="http://github.com/Ytalo-Alves.png"
        alt=""
        className="rounded-full w-24 md:w-32 lg:w-48 border-[4px] border-red-700"
      />
      <img
        src="https://github.com/user-attachments/assets/ef1e3965-c476-4cee-b569-2b38d0cdb37f"
        alt=""
        className="absolute bottom-0 w-6 md:w-8 lg:w-10 right-2 md:right-4 lg:right-6 "
      />
    </div>

    <p className="text-base md:text-2xl lg:text-3xl leading-5 font-poppins mt-8 md:mt-12 lg:mt-16">
      Hello World! Meu nome é{" "}
      <span className="text-red-500">Ytalo Alves</span> e sou
    </p>
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-title font-bold mt-2">
      Desenvolvedor Fullstack
    </h1>
    <span className="mt-4 md:mt-5 lg:mt-6 text-center font-span leading-5 text-sm md:text-base lg:text-lg text-gray-400 max-w-md md:max-w-lg lg:max-w-2xl px-4">
      Transformo necessidades em aplicações reais, evolventes e funcionais.
      Desenvolvo sistemas através da minha paixão pela tecnologia,
      contribuindo com soluções inovadoras e eficazes para desafios
      complexos.
    </span>

    <div className="flex flex-wrap justify-center mt-12 md:mt-16 mg:mt-20 gap-3 md:gap-4 px-4">
      <Tags
        src="https://github.com/user-attachments/assets/af3d17ac-0592-469d-890e-b1d8987d6e13"
        alt=""
        text="Git Hub"
      />
      <Tags
        src="https://github.com/user-attachments/assets/ed65a025-2308-4318-b0d7-feb8809bb6ab"
        alt=""
        text="HTML"
      />
      <Tags
        src="https://github.com/user-attachments/assets/92dffbb6-091d-4103-b200-aa8dd0bfebbe"
        alt=""
        text="CSS"
      />
      <Tags
        src="https://github.com/user-attachments/assets/3671f089-41f0-4d68-ac9e-7da171fb5ce7"
        alt=""
        text="JavaScript"
      />
      <Tags
        src="https://github.com/user-attachments/assets/7d4e89b6-e387-4e97-b645-9a42c0feadbb"
        alt=""
        text="React"
      />
      <Tags
        src="https://github.com/user-attachments/assets/b179ad38-b689-429a-9606-75fd58bad370"
        alt=""
        text="Node.js"
      />
    </div>

    <button
      className="mt-16 md:mt-20 lg:mt-24 hover"
      onClick={scrollToNextSection}
    >
      <FaAnglesDown
        size={32}
        className="text-[#878EA1] hover:text-red-500 transition-colors duration-300"
      />
    </button>
  </div>
  )
}