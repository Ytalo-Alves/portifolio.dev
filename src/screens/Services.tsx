import CardServices from "../components/CardServices";

export default function Services(){
  return(
    <div id="services" className="w-full min-h-screen flex flex-col items-center justify-center bg-bg-info bg-cover px-4">

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
  )
}