import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaCertificate,
  FaGithub,
  FaGraduationCap,
  FaIdBadge,
  FaLinkedin,
  FaWarehouse,
} from "react-icons/fa";
import {
  HiOutlineBriefcase,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/navigation";
import { PERSONAL_INFO } from "../../constants";

const navIcon: Record<string, ReactNode> = {
  "/": <HiOutlineHome className="h-5 w-5" />,
  "/about": <HiOutlineUser className="h-5 w-5" />,
  "/projects": <HiOutlineBriefcase className="h-5 w-5" />,
  "/services": <HiOutlineCog6Tooth className="h-5 w-5" />,
  "/contacts": <HiOutlineEnvelope className="h-5 w-5" />,
};

const profileDetails = [
  {
    label: "Idade",
    value: "28 anos",
    icon: <FaIdBadge className="h-4 w-4" />,
  },
  {
    label: "Atuação atual",
    value: "Análise de Sistemas e Implantação WMS",
    icon: <FaWarehouse className="h-4 w-4" />,
  },
  {
    label: "Formação",
    value: "Análise e Desenvolvimento de Sistemas",
    icon: <FaGraduationCap className="h-4 w-4" />,
  },
  {
    label: "Base acadêmica",
    value: "Supply Chain & Logistics",
    icon: <FaGraduationCap className="h-4 w-4" />,
  },
  {
    label: "Certificados e foco",
    value: "WMS, ERP, processos, testes funcionais e go-live",
    icon: <FaCertificate className="h-4 w-4" />,
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <aside
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      aria-label="Navegação principal"
    >
      <div className="flex w-[5.25rem] flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-primary/70 p-3 shadow-bento backdrop-blur-2xl">
        <div ref={profileRef} className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((current) => !current)}
            className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-cyan-400/30"
            aria-label="Ver informações do perfil"
            aria-expanded={profileOpen}
            aria-controls="sidebar-profile-popover"
          >
            <img
              src={PERSONAL_INFO.profileImage}
              alt=""
              className="h-full w-full object-cover opacity-95 transition-transform duration-300 group-hover:scale-105"
              width={56}
              height={56}
            />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                id="sidebar-profile-popover"
                initial={{ opacity: 0, x: -8, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[4.25rem] top-0 z-50 w-[22rem] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 p-5 shadow-bento backdrop-blur-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt=""
                      className="h-full w-full object-cover"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-title text-lg font-bold leading-tight text-white">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-text-secondary">
                      {PERSONAL_INFO.title}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Tech + Logistics
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {profileDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200">
                        {detail.icon}
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                          {detail.label}
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-white">
                          {detail.value}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  onClick={() => setProfileOpen(false)}
                  className="mt-4 flex min-h-11 w-full items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-400/35 hover:bg-cyan-400/15"
                >
                  Ver trajetória completa
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav
          className="flex flex-col items-center gap-2 rounded-[1.45rem] border border-white/[0.07] bg-zinc-950/35 p-2"
          aria-label="Páginas do portfólio"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={[
                  "group relative flex h-11 w-11 items-center justify-center rounded-2xl text-sm transition-colors",
                  isActive
                    ? "text-white"
                    : "text-text-tertiary hover:bg-white/[0.05] hover:text-white",
                ].join(" ")}
                aria-label={item.name}
                title={item.name}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-rail-active"
                    className="absolute inset-0 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 shadow-[0_0_28px_-10px_rgba(34,211,238,0.8)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{navIcon[item.path]}</span>

                <span className="pointer-events-none absolute left-[3.35rem] z-20 hidden whitespace-nowrap rounded-xl border border-white/10 bg-zinc-950/95 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-bento backdrop-blur-xl transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 xl:block">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col gap-2 rounded-[1.45rem] border border-white/[0.07] bg-zinc-950/35 p-2">
          <a
            href="https://github.com/ytalo-alves"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-text-tertiary transition-colors hover:bg-white/[0.05] hover:text-white"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ytalo-alves"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-text-tertiary transition-colors hover:bg-white/[0.05] hover:text-white"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>

        <Link
          to="/contacts"
          className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
          aria-label="Fale comigo"
          title="Fale comigo"
        >
          <HiOutlineEnvelope className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </aside>
  );
}
