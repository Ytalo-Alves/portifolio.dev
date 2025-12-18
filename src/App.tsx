import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Services from "./screens/Services";
import Contacts from "./screens/Contacts";
import { PRELOAD_IMAGES } from "./constants";

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all images
  const preloadImages = async () => {
    const promises = PRELOAD_IMAGES.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    await Promise.all(promises);
  };

  useEffect(() => {
    preloadImages()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Erro ao carregar imagens:", error);
        setIsLoaded(true); // Continue mesmo com erro
      });
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen bg-primary text-text-primary relative overflow-hidden">
        {/* Background Grid Effect */}
        <div className="fixed inset-0 bg-grid z-0 pointer-events-none opacity-[0.15]"></div>

        {/* Ambient Glow */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none z-0"></div>

        <div className="relative z-10">
          {!isLoaded ? (
            <LoadingScreen />
          ) : (
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contacts" element={<Contacts />} />
                </Routes>
              </main>
            </>
          )}
        </div>
      </div>
    </Router>
  );
}
