import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/about" },
  { name: "Projetos", path: "/projects" },
  { name: "Serviços", path: "/services" },
  { name: "Contatos", path: "/contacts" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHoveredPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container-custom mx-auto">
          <div
            className={[
              "relative rounded-full p-[1px] transition-all duration-300",
              isScrolled
                ? "bg-gradient-to-r from-white/20 via-accent/30 to-transparent shadow-header-float"
                : "bg-gradient-to-r from-white/15 via-accent/20 to-transparent",
            ].join(" ")}
          >
            <div
              className={[
                "flex items-center justify-between rounded-full border border-white/10 bg-primary/40 backdrop-blur-xl",
                isScrolled ? "px-4 md:px-6 py-2" : "px-4 md:px-6 py-3",
              ].join(" ")}
            >
              {/* Logo */}
              <Link
                to="/"
                className="group flex items-center gap-2 font-title font-bold tracking-wider"
                aria-label="Ir para a página inicial"
              >
                <motion.span
                  className="text-accent"
                  whileHover={{
                    color: "var(--color-accent-glow)",
                    textShadow: "0 0 12px var(--color-accent-glow)",
                  }}
                >
                  &lt;/&gt;
                </motion.span>
                <span className="text-white transition-colors duration-300 group-hover:text-accent">
                  Ytalo
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav
                className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.02] border border-white/10 p-1"
                onMouseLeave={() => setHoveredPath(location.pathname)}
                aria-label="Navegação principal"
              >
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.path;
                  const isHighlighted = hoveredPath === link.path;

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={[
                        "relative px-4 py-2 text-sm font-medium rounded-full z-10 transition-colors duration-200",
                        isActive ? "text-white" : "text-text-secondary hover:text-white",
                      ].join(" ")}
                      onMouseEnter={() => setHoveredPath(link.path)}
                    >
                      {link.name}
                      {isHighlighted && (
                        <motion.span
                          className={[
                            "absolute inset-0 rounded-full -z-10 border",
                            isActive
                              ? "bg-white/[0.06] border-accent/30"
                              : "bg-white/[0.04] border-white/10",
                          ].join(" ")}
                          layoutId="nav-pill"
                          transition={{
                            type: "spring",
                            stiffness: 360,
                            damping: 32,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Social Icons & Mobile Toggle */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2">
                  <a
                    href="https://github.com/ytalo-alves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="GitHub"
                  >
                    <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                      <FaGithub
                        size={18}
                        className="text-white/90 group-hover:text-accent transition-colors"
                      />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ytalo-alves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="LinkedIn"
                  >
                    <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                      <FaLinkedin
                        size={18}
                        className="text-white/90 group-hover:text-blue-400 transition-colors"
                      />
                    </span>
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden group relative"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">
                    {isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                  </span>
                  <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                    {isMobileMenuOpen ? (
                      <FaTimes size={20} className="text-white" />
                    ) : (
                      <FaBars size={20} className="text-white" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%", opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.6 }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute top-0 right-0 h-full w-full max-w-sm p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-accent/20 to-transparent">
                <div className="h-full rounded-3xl bg-primary/70 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                  <div className="relative h-full flex flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-[0.3em] text-text-tertiary">
                        MENU
                      </span>
                      <button
                        className="group relative"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Fechar menu</span>
                        <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                          <FaTimes size={18} className="text-white" />
                        </span>
                      </button>
                    </div>

                    <nav className="mt-10 flex flex-col gap-2">
                      {NAV_LINKS.map((link, index) => {
                        const isActive = location.pathname === link.path;
                        return (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06 + index * 0.04 }}
                          >
                            <Link
                              to={link.path}
                              className={[
                                "flex items-center justify-between rounded-2xl px-4 py-3 border transition-colors duration-200",
                                isActive
                                  ? "bg-white/[0.06] border-accent/30 text-white"
                                  : "bg-white/[0.02] border-white/10 text-text-secondary hover:text-white hover:border-white/20",
                              ].join(" ")}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="font-title font-bold text-xl">
                                {link.name}
                              </span>
                              <span
                                className={[
                                  "h-2 w-2 rounded-full",
                                  isActive ? "bg-accent shadow-glow" : "bg-white/20",
                                ].join(" ")}
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>

                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <a
                        href="https://github.com/ytalo-alves"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        aria-label="GitHub"
                      >
                        <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                          <FaGithub
                            size={20}
                            className="text-white/90 group-hover:text-accent transition-colors"
                          />
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ytalo-alves"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        aria-label="LinkedIn"
                      >
                        <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/40 via-blue-500/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.06]">
                          <FaLinkedin
                            size={20}
                            className="text-white/90 group-hover:text-blue-400 transition-colors"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
