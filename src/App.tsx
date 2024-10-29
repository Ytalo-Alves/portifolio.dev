// App.js
import "./index.css";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Services from "./screens/Services";
import Contacts from "./screens/Contacts";

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Lista das URLs das imagens (exemplo; substitua pelos links do GitHub)
  const imageUrls = [
    "http://github.com/Ytalo-Alves.png",
    "https://github.com/user-attachments/assets/ef1e3965-c476-4cee-b569-2b38d0cdb37f",
    "https://github.com/Ytalo-Alves/TicketIA?tab=readme-ov-file",
    "https://github.com/user-attachments/assets/2a4ce9f7-2681-471c-a00c-4d98b8b8aefe",
    "https://github.com/Ytalo-Alves/web_in.orbit",
    "https://github.com/user-attachments/assets/8b44c1c8-279a-4016-8328-39945bd18396",
    "https://github.com/Ytalo-Alves/web_planner",
    "https://github.com/user-attachments/assets/ea657e7f-ba0a-482c-ac92-6c6882a6d8c3",
    "https://github.com/user-attachments/assets/b0f6d0b4-02f7-4190-ae54-55e1352147dd",
    "https://github.com/user-attachments/assets/4860fe9a-5493-4a65-94b8-be2e7ce72e8c",
    "https://github.com/user-attachments/assets/87606d46-f64c-4990-80ad-8647207449cc",
    "https://github.com/user-attachments/assets/1f3d09d7-b9ba-41af-9d35-46a2782e36d1",
    "https://github.com/user-attachments/assets/2125e777-6f76-4ecd-bc3b-b6d124127e9a",
    "https://github.com/user-attachments/assets/be6e76c1-6f87-4290-9189-2c8099b8e130",
    "https://github.com/user-attachments/assets/1074fccc-3bc3-479d-8be5-02ec9e7710f9"
  ];

  // Função para carregar todas as imagens
  const preloadImages = async () => {
    const promises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;   // resolve quando a imagem carrega
        img.onerror = reject;    // rejeita caso haja um erro ao carregar
      });
    });
    await Promise.all(promises); // Espera todas as promessas das imagens
  };

  useEffect(() => {
    preloadImages().then(() => {
      setIsLoaded(true); // Define que tudo está carregado após as imagens
    }).catch((error) => {
      console.error("Erro ao carregar imagens:", error);
      setIsLoaded(true); // Continua para renderizar a tela mesmo em caso de erro
    });
  }, []);

  return (
    <div className="w-full min-h-screen">
      {!isLoaded ? (
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div id="home">
            <Home />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="contacts">
            <Contacts />
          </div>
        </div>
      )}
    </div>
  );
}
