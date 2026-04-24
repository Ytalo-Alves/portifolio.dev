import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaCertificate,
  FaCheckCircle,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaIdBadge,
  FaLinkedin,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaTimes,
  FaWarehouse,
} from "react-icons/fa";
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
    label: "Atuação",
    value: "Análise de Sistemas e Implantação WMS",
    icon: <FaWarehouse className="h-4 w-4" />,
  },
  {
    label: "Formação",
    value: "Análise e Desenvolvimento de Sistemas",
    icon: <FaGraduationCap className="h-4 w-4" />,
  },
  {
    label: "Base",
    value: "Supply Chain & Logistics",
    icon: <FaGraduationCap className="h-4 w-4" />,
  },
];

const profileHighlights = [
  {
    label: "Operação",
    value:
      "Vivência em rotinas logísticas, liderança de equipe e melhoria de fluxo.",
    icon: <FaProjectDiagram className="h-4 w-4" />,
  },
  {
    label: "Sistemas",
    value:
      "Configuração, testes funcionais, documentação e suporte a go-live.",
    icon: <FaCertificate className="h-4 w-4" />,
  },
  {
    label: "Negócio",
    value: "Tradução de necessidades operacionais em requisitos claros.",
    icon: <FaMapMarkerAlt className="h-4 w-4" />,
  },
];

const profileStats = ["28 anos", "Brasil", "WMS / ERP", "Supply Chain"];

const profileStrengths = [
  "Levantamento de requisitos e mapeamento de processos",
  "Configuração, validação e documentação de sistemas",
];

const modalItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function ProfileModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/75 backdrop-blur-lg"
      />

      <motion.div
        id="sidebar-profile-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Informações profissionais"
        initial={{
          opacity: 0,
          y: 34,
          scale: 0.94,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 24,
            mass: 0.9,
            staggerChildren: 0.05,
            delayChildren: 0.06,
          },
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
          filter: "blur(8px)",
          transition: { duration: 0.16, ease: "easeIn" },
        }}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-5 lg:p-8"
      >
        <div className="pointer-events-auto relative w-full max-w-[47rem] overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950/98 p-4 shadow-[0_24px_90px_-20px_rgba(0,0,0,0.95)] backdrop-blur-2xl xl:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.10),transparent_32%)]" />

          <div className="relative">
          <motion.div
            variants={modalItem}
            className="flex items-start justify-between gap-4"
          >
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Perfil profissional
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:border-white/20 hover:text-white"
              aria-label="Fechar perfil"
            >
              <FaTimes className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            variants={modalItem}
            className="mt-4 overflow-hidden rounded-[1.45rem] border border-white/15 bg-gradient-to-br from-white/[0.11] via-white/[0.055] to-cyan-400/[0.055]"
          >
            <div className="grid gap-4 p-4 lg:grid-cols-[0.68fr_1.32fr]">
              <div className="relative min-h-40 overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.035]">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt=""
                  className="h-full min-h-40 w-full object-cover"
                  width={320}
                  height={320}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-transparent p-3">
                  <div className="flex flex-wrap gap-2">
                    {profileStats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <p className="font-title text-3xl font-bold leading-tight text-white">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="mt-1 max-w-xl text-sm font-medium leading-snug text-cyan-100">
                    {PERSONAL_INFO.title}
                  </p>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
                    {PERSONAL_INFO.bio} Minha atuação combina visão prática de
                    operação com análise de sistemas.
                  </p>
                </div>

                <div className="mt-4 grid gap-2">
                  {profileStrengths.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/12 bg-zinc-950/70 px-3 py-2.5 text-sm text-zinc-200"
                    >
                      <FaCheckCircle className="h-4 w-4 shrink-0 text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={modalItem}
            className="mt-3 grid gap-2 md:grid-cols-4"
          >
            {profileDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-xl border border-white/12 bg-white/[0.055] p-3 transition-colors hover:border-cyan-400/25"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200">
                  {detail.icon}
                </span>
                <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-text-tertiary">
                  {detail.label}
                </span>
                <span className="mt-1 block text-sm leading-snug text-zinc-100">
                  {detail.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={modalItem}
            className="mt-3 grid gap-2 md:grid-cols-3"
          >
            {profileHighlights.map((detail) => (
              <div
                key={detail.label}
                className="rounded-xl border border-white/12 bg-zinc-950/75 p-3 transition-colors hover:border-cyan-400/25"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200">
                  {detail.icon}
                </span>
                <span className="mt-2 block font-title text-sm font-bold text-white">
                  {detail.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-zinc-300">
                  {detail.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={modalItem}
            className="mt-4 flex items-center gap-3"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:border-cyan-400/30 hover:text-white"
              aria-label="Enviar e-mail"
              title="Enviar e-mail"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ytalo-alves"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:border-cyan-400/30 hover:text-white"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ytalo-alves"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:border-cyan-400/30 hover:text-white"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <Link
              to="/about"
              onClick={onClose}
              className="ml-auto flex min-h-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Ver trajetória
            </Link>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function Sidebar() {
  const { pathname } = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeProfile = () => setProfileOpen(false);

  return (
    <>
      <aside
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        aria-label="Navegação principal"
      >
        <div className="flex w-[5.25rem] flex-col items-center gap-3 rounded-[2rem] border border-white/10 bg-primary/70 p-3 shadow-bento backdrop-blur-2xl">
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((current) => !current)}
              className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-cyan-400/30"
              aria-label="Ver informações do perfil"
              aria-expanded={profileOpen}
              aria-controls="sidebar-profile-modal"
            >
              <img
                src={PERSONAL_INFO.profileImage}
                alt=""
                className="h-full w-full object-cover opacity-95 transition-transform duration-300 group-hover:scale-105"
                width={56}
                height={56}
              />
            </button>
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
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
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
        </div>
      </aside>

      <AnimatePresence>
        {profileOpen && <ProfileModal onClose={closeProfile} />}
      </AnimatePresence>
    </>
  );
}
