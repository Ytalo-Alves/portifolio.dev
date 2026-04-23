import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import {
  HiOutlineBriefcase,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../../constants/navigation";
import { PERSONAL_INFO } from "../../constants";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navIcon: Record<string, ReactNode> = {
  "/": <HiOutlineHome className="h-5 w-5" />,
  "/about": <HiOutlineUser className="h-5 w-5" />,
  "/projects": <HiOutlineBriefcase className="h-5 w-5" />,
  "/services": <HiOutlineCog6Tooth className="h-5 w-5" />,
  "/contacts": <HiOutlineEnvelope className="h-5 w-5" />,
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 p-3 backdrop-blur-md lg:hidden"
          onClick={onClose}
        >
          <motion.div
            id="mobile-menu"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex min-h-full w-full max-w-md items-end"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-primary/95 shadow-2xl backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
              <div className="relative p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                      <img
                        src={PERSONAL_INFO.profileImage}
                        alt=""
                        className="h-full w-full object-cover"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="font-title text-lg font-bold text-white">
                        {PERSONAL_INFO.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-text-secondary">
                        Tech + Logistics
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
                    aria-label="Fechar menu"
                  >
                    <FaTimes className="h-4 w-4" />
                  </button>
                </div>

                <nav
                  className="mt-7 grid grid-cols-2 gap-3"
                  aria-label="Navegação"
                >
                  {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={onClose}
                        className={[
                          "relative min-h-[5.75rem] rounded-2xl border p-4 transition-colors",
                          isActive
                            ? "border-cyan-400/25 bg-cyan-400/10 text-white"
                            : "border-white/10 bg-zinc-950/35 text-text-secondary hover:border-white/15 hover:bg-white/[0.04] hover:text-white",
                        ].join(" ")}
                      >
                        <span
                          className={
                            isActive ? "text-cyan-200" : "text-text-tertiary"
                          }
                        >
                          {navIcon[link.path]}
                        </span>
                        <span className="mt-3 block font-title text-base font-bold">
                          {link.name}
                        </span>
                        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                          {link.short}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                  <a
                    href="https://github.com/ytalo-alves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ytalo-alves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <Link
                    to="/contacts"
                    onClick={onClose}
                    className="ml-auto inline-flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-glow"
                  >
                    Fale comigo
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
