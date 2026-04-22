import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../../constants/navigation";
import { PERSONAL_INFO } from "../../constants";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const location = useLocation();
  const firstName = PERSONAL_INFO.name.split(" ")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
          onClick={onClose}
        >
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-primary/95 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
              <div className="relative flex h-full flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-text-tertiary">
                    MENU
                  </span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
                    aria-label="Fechar menu"
                  >
                    <FaTimes className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-4 font-title text-2xl font-bold text-white">{firstName}</p>
                <p className="text-sm text-text-secondary">{PERSONAL_INFO.title}</p>

                <nav className="mt-8 flex flex-col gap-1" aria-label="Navegação">
                  {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={onClose}
                        className={[
                          "rounded-xl px-4 py-3.5 font-title text-lg font-bold transition-colors",
                          isActive
                            ? "bg-white/[0.08] text-white ring-1 ring-accent/30"
                            : "text-text-secondary hover:bg-white/[0.04] hover:text-white",
                        ].join(" ")}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto flex gap-2 border-t border-white/10 pt-4">
                  <a
                    href="https://github.com/ytalo-alves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary hover:text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ytalo-alves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
