import { FiArrowUpRight } from "react-icons/fi";
import ButtonLink from "../components/ButtonLink";

export default function Contacts(){
  return(
    <div id="contacts" className="w-full h-screen bg-bg-info bg-cover flex flex-col items-center justify-center px-4">
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
  )
}