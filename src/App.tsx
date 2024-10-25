import "./index.css";
import { useRef } from "react";

import { FaAnglesDown } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Card from "./components/card";
import Tags from "./components/tags";
import ButtonLink from "./components/ButtonLink";
import CardServices from "./components/CardServices";

export function App() {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* INÍCIO DA HOME PAGE */}
      <div
        className="w-full min-h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center p-4"
        style={{
          backgroundImage: "url('https://github.com/user-attachments/assets/a95579a7-5987-4119-8eaf-56cc5e949df0')",
        }}
      >
        <div className="relative inline-block">
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
      {/* FIM DA HOME PAGE */}

      {/* INÍCIO DOS MEUS PROJETOS */}
      <div
        ref={nextSectionRef}
        className="w-full h-screen flex flex-col items-center justify-center bg-bg-info bg-cover px-4"
      >
        <p className="font-poppins text-red-500 text-2xl md:text-3xl text-center">Meu trabalho</p>
        <h1 className="text-2xl md:text-3xl font-title font-bold mt-2">
          Veja os projetos em destaque
        </h1>

        <div className="flex-1 mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-y-auto">
          <a
            href="https://github.com/Ytalo-Alves/TicketIA?tab=readme-ov-file"
            target="_blank"
          >
            <Card
              src="https://github.com/user-attachments/assets/2a4ce9f7-2681-471c-a00c-4d98b8b8aefe"
              alt=""
              title="Ticket AI"
              text="Ticket AI para o evento AI para Devs, integrando com a API do github"
            />
          </a>

          <a href="https://github.com/Ytalo-Alves/web_in.orbit" target="_blank">
            <Card
              src="https://github.com/user-attachments/assets/8b44c1c8-279a-4016-8328-39945bd18396"
              alt=""
              title="Gerenciador de metas"
              text="Aplicação Web para registro de metas com progresso semanal"
            />
          </a>

          <a href="https://github.com/Ytalo-Alves/web_planner">
            <Card
              src="https://github.com/user-attachments/assets/ea657e7f-ba0a-482c-ac92-6c6882a6d8c3"
              alt=""
              title="Planejador de Viagens"
              text="Aplicação web para planejamento de viagens, com o gerenciamento de atividades"
            />
          </a>
        </div>
      </div>
      {/* FIM DOS MEUS PROJETOS */}

      {/* INÍCIO - MEUS SERVIÇOS */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-bg-info bg-cover px-4">

        <span className="text-red-500 text-2xl md:text-3xl font-poppins mt-10">
          Meus serviços
        </span>
        <h1 className="text-2xl md:text-3xl font-title font-bold mt-2 text-center">
          Como posso ajudar o seu negócio
        </h1>

        <div className="flex flex-col md:flex-row mt-10 md:mt-14 gap-6">
          <CardServices
            src="https://github.com/user-attachments/assets/b0f6d0b4-02f7-4190-ae54-55e1352147dd"
            alt=""
            title="Websites e aplicativos"
            text=" Especializado em desenvolvimento de interfaces intuitivas e
              modernas, proporcionando uma experiência de usuário única e
              eficiente para web e aplicativos móveis"
          />

          <CardServices
            src="https://github.com/user-attachments/assets/4860fe9a-5493-4a65-94b8-be2e7ce72e8c"
            alt=""
            title="API e Banco de dados"
            text="Oferecemos criação de serviços de sistema robustos e escaláveis,
              otimizando a performance e a eficiência para atender às
              necessidades específicas de cada projeto."
          />

          <CardServices
            src="https://github.com/user-attachments/assets/87606d46-f64c-4990-80ad-8647207449cc"
            alt=""
            title="DevOps"
            text="Foco na gestão eficiente e na infraestrutura sólida de aplicações,
              garantindo alta disponibilidade, segurança e desempenho otimizado
              para soluções digitais."
          />
        </div>
      </div>
      {/* FIM - MEUS SERVIÇOS */}

      {/* INÍCIO - CONTATOS */}
      <div className="w-full h-screen bg-bg-info bg-cover flex flex-col items-center justify-center px-4">
        <p className="font-poppins text-purple-500 text-2xl md:text-3xl">Contato</p>
        <h1 className="text-2xl md:text-3xl font-title font-bold mt-2">
          Gostou do meu trabalho?
        </h1>
        <p className="font-span text-gray-300 text-sm md:text-xl text-center">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>

        <div className="flex lg:flex-col md:flex-row mt-12 gap-4 md:grid">
          <a href="https://www.linkedin.com/in/ytalo-alves/" target="_blank">
            <ButtonLink
              src="https://github.com/user-attachments/assets/1f3d09d7-b9ba-41af-9d35-46a2782e36d1"
              alt=""
              text="Linkedin"
              Icon={FiArrowUpRight}
              iconProps={{ size: 22, color: "#3b82f6" }}
            />
          </a>

          <a href="https://www.instagram.com/alves_97_/" target="_blank">
            <ButtonLink
              src="https://github.com/user-attachments/assets/2125e777-6f76-4ecd-bc3b-b6d124127e9a"
              alt=""
              text="Instagram"
              Icon={FiArrowUpRight}
              iconProps={{ size: 22, color: "#3b82f6" }}
            />
          </a>

          <a href="https://github.com/Ytalo-Alves/YtaloAlves" target="_blank">
            <ButtonLink
              src="https://github.com/user-attachments/assets/be6e76c1-6f87-4290-9189-2c8099b8e130"
              alt=""
              text="GitHub"
              Icon={FiArrowUpRight}
              iconProps={{ size: 22, color: "#3b82f6" }}
            />
          </a>

          <a href="mailto:ytaloalves10@hotmail.com">
            <ButtonLink
              src="https://github.com/user-attachments/assets/1074fccc-3bc3-479d-8be5-02ec9e7710f9"
              alt=""
              text="E-mail"
              Icon={FiArrowUpRight}
              iconProps={{ size: 22, color: "#3b82f6" }}
            />
          </a>
        </div>
      </div>
      {/* FIM - CONTATOS */}
    </div>
  );
}
