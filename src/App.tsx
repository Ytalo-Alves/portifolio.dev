import "./index.css";
import { useRef } from "react";
import Github from "./assets/GitHub.png";
import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import Javascript from "./assets/Javascript.png";
import React from "./assets/React.png";
import Node from "./assets/Node.js.png";
import DEV from "./assets/Code.png";
import Devices from "./assets/Devices.png";
import Hard from "./assets/HardDrives.png";
import Infinity from "./assets/Infinity.png";
import LinkedIn from "./assets/LinkedinLogo.png";
import Instagram from "./assets/InstagramLogo.png";
import GITHUB from "./assets/GithubLogo.png";
import Email from "./assets/EnvelopeSimple.png";
import Ticket_AI from "./assets/Ticket_AI.png";
import inOrbit from "./assets/in.Orbit.png";
import Planner from "./assets/webPlanner.png";


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
    }};

  return (
    <div className="w-full h-screen">
      {/* INÍCIO DA HOME PAGE */}
      <div className="w-full h-screen bg-bg-info bg-center bg-cover flex flex-col items-center justify-center">
        <div className="relative inline-block">
          <img
            src="http://github.com/Ytalo-Alves.png"
            alt=""
            className="rounded-full w-48 border-[4px] border-red-700"
          />
          <img src={DEV} alt="" className="absolute bottom-0 right-6" />
        </div>

        <p className="text-3xl leading-5 font-poppins mt-16">
          Hello World! Meu nome é{" "}
          <span className="text-red-500">Ytalo Alves</span> e sou
        </p>
        <h1 className="text-7xl font-title font-bold mt-2">
          Desenvolvedor Fullstack
        </h1>
        <span className="mt-5 text-center font-span leading-5 text-sm text-gray-400">
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da
          <br /> minha paixão pela tecnologia, contribuindo com soluções
          inovadoras e eficazes para desafios complexos.
        </span>

        <div className="w-[758px] flex mt-20 gap-4">
          <Tags src={Github} alt="" text="Git Hub" />
          <Tags src={HTML} alt="" text="HTML" />
          <Tags src={CSS} alt="" text="CSS" />
          <Tags src={Javascript} alt="" text="JavaScript" />
          <Tags src={React} alt="" text="React" />
          <Tags src={Node} alt="" text="Node.js" />
        </div>

        <button className="mt-24 hover" onClick={scrollToNextSection}>
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
        className="w-full h-screen flex flex-col items-center justify-center bg-bg-info bg-cover"
      >
        <p className="font-poppins text-red-500 text-3xl">Meu trabalho</p>
        <h1 className="text-3xl font-title font-bold mt-2">
          Veja os projetos em destaque
        </h1>
        <div className="mt-14 grid grid-cols-3 gap-6">
          <a href="https://github.com/Ytalo-Alves/TicketIA?tab=readme-ov-file" target="_blank">
          <Card
            src={Ticket_AI}
            alt=""
            title="Ticket AI"
            text="Ticket AI para o evento AI para Devs, integrando com a API do github"
          />
          </a>
          
          <a href="https://github.com/Ytalo-Alves/web_in.orbit" target="_blank">
          <Card
            src={inOrbit}
            alt=""
            title="Gerenciador de metas"
            text="Aplicação Web para registro de metas com progresso semanal"
          />
          </a>
          
          <a href="https://github.com/Ytalo-Alves/web_planner">
          <Card
            src={Planner}
            alt=""
            title="Planejador de Viagens"
            text="Aplicação web para planejamento de viagens, com o gerenciamento de atividades"
          />
          </a>
          
        </div>
      </div>
      {/* FIM DOS MEUS PROJETOS */}

      {/* INÍCIO - MEUS SERVIÇOS */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-bg-info bg-cover">
        <span className="text-red-500 text-3xl font-poppins">
          Meus serviços
        </span>
        <h1 className="text-4xl font-title font-bold mt-2">
          Como posso ajudar o seu negócio
        </h1>

        <div className="flex mt-14 gap-6">
          <CardServices
            src={Devices}
            alt=""
            title="Websites e aplicativos"
            text=" Especializado em desenvolvimento de interfaces intuitivas e
              modernas, proporcionando uma experiência de usuário única e
              eficiente para web e aplicativos móveis"
          />

          <CardServices
            src={Hard}
            alt=""
            title="API e Banco de dados"
            text="Oferecemos criação de serviços de sistema robustos e escaláveis,
              otimizando a performance e a eficiência para atender às
              necessidades específicas de cada projeto."
          />

          <CardServices
            src={Infinity}
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
      <div className="w-full h-screen bg-bg-info bg-cover flex flex-col items-center justify-center">
        <p className="font-poppins text-purple-500 text-xl">Contato</p>
        <h1 className="text-3xl font-title font-bold mt-2">
          Gostou do meu trabalho?
        </h1>
        <p className="font-span text-gray-500">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>

        <div className="flex flex-col mt-12 gap-4">
          <a href="https://www.linkedin.com/in/ytalo-alves/" target="_blank">
          <ButtonLink
            src={LinkedIn}
            alt=""
            text="Linkedin"
            Icon={FiArrowUpRight}
            iconProps={{ size: 22, color: "#3b82f6" }}
          />
          </a>
          
          <a href="https://www.instagram.com/alves_97_/" target="_blank">
          <ButtonLink
            src={Instagram}
            alt=""
            text="Instagram"
            Icon={FiArrowUpRight}
            iconProps={{ size: 22, color: "#3b82f6" }}
          />
          </a>


          <a href="https://github.com/Ytalo-Alves/YtaloAlves" target="_blank">
          <ButtonLink
            src={GITHUB}
            alt=""
            text="GitHub"
            Icon={FiArrowUpRight}
            iconProps={{ size: 22, color: "#3b82f6" }}
          />
          </a>

          <a href="mailto:ytaloalves10@hotmail.com">
          <ButtonLink
            src={Email}
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
