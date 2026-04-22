import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import AppShell from "./components/layout/AppShell";
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
        <div className="fixed inset-0 bg-grid z-0 pointer-events-none opacity-[0.12]"></div>

        {/* Orbes ambiente: índigo + ciano */}
        <div className="fixed -top-32 left-1/4 h-[22rem] w-[22rem] rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-1/3 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />
        <div className="fixed bottom-0 right-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px] pointer-events-none z-0" />

        <div className="relative z-10">
          {!isLoaded ? (
            <LoadingScreen />
          ) : (
            <AppShell>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </AppShell>
          )}
        </div>
      </div>
    </Router>
  );
}
