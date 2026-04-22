import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../constants/navigation";
import { PERSONAL_INFO } from "../../constants";

const navIcon: Record<string, ReactNode> = {
  "/": <HiOutlineHome className="h-5 w-5" />,
  "/about": <HiOutlineUser className="h-5 w-5" />,
  "/projects": <HiOutlineBriefcase className="h-5 w-5" />,
  "/services": <HiOutlineCog6Tooth className="h-5 w-5" />,
  "/contacts": <HiOutlineEnvelope className="h-5 w-5" />,
};

export default function Sidebar() {
  const { pathname } = useLocation();
  const firstName = PERSONAL_INFO.name.split(" ")[0];

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 z-40 h-screen w-[17.5rem] flex-col border-r border-white/[0.07] bg-primary/85 backdrop-blur-2xl"
      aria-label="Navegação e perfil"
    >
      <div className="border-b border-white/[0.06] px-5 py-6">
        <Link
          to="/"
          className="group flex items-center gap-2 font-title text-lg font-bold tracking-wide text-white"
        >
          <span className="text-accent drop-shadow-[0_0_12px_rgba(139,92,246,0.45)]">
            &lt;/&gt;
          </span>
          <span className="transition-colors group-hover:text-accent">{firstName}</span>
        </Link>

        <div className="mt-5 flex items-start gap-3">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-blue-500/20 blur-md" />
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
              <img
                src={PERSONAL_INFO.profileImage}
                alt=""
                className="h-full w-full object-cover"
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-white">{PERSONAL_INFO.name}</p>
            <p className="mt-0.5 text-xs text-text-secondary leading-snug">
              {PERSONAL_INFO.title}
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary">
                aberto a projetos
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4" aria-label="Páginas do portfólio">
        {NAV_LINKS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={[
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-white/[0.08] text-white"
                  : "text-text-secondary hover:bg-white/[0.04] hover:text-white",
              ].join(" ")}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 -z-10 rounded-xl border border-accent/20 bg-accent/[0.12]"
                  transition={{ type: "spring", stiffness: 380, damping: 35 }}
                />
              )}
              <span
                className={
                  isActive ? "text-accent" : "text-text-tertiary group-hover:text-text-secondary"
                }
              >
                {navIcon[item.path]}
              </span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/[0.06] p-4">
        <div className="mb-3 flex items-center justify-center gap-2">
          <a
            href="https://github.com/ytalo-alves"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-text-secondary transition-colors hover:border-accent/30 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ytalo-alves"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-text-secondary transition-colors hover:border-accent/30 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
        <Link
          to="/contacts"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/15 py-2.5 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-accent/25"
        >
          <HiOutlineEnvelope className="h-4 w-4" />
          Fale comigo
        </Link>
      </div>
    </aside>
  );
}
