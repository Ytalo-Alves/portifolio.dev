import Card from "../components/card";

export default function Projects(){
  return(
    <div
    id="projects"
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
  )
}