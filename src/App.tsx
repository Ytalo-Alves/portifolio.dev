import "./index.css";



import { FiArrowUpRight } from "react-icons/fi";
import Card from "./components/card";
import ButtonLink from "./components/ButtonLink";
import CardServices from "./components/CardServices";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

export function App() {

  return (

    <div className="w-full min-h-screen">
      <Home/>
      
      <Projects/>

      

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
              text="LinkedIn"
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
