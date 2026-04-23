import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../../constants";

type MobileTopBarProps = {
  menuOpen: boolean;
  onOpenMenu: () => void;
};

export default function MobileTopBar({ menuOpen, onOpenMenu }: MobileTopBarProps) {
  const firstName = PERSONAL_INFO.name.split(" ")[0];

  return (
    <header className="sticky top-0 z-30 px-3 pt-3 lg:hidden">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-white/[0.08] bg-primary/80 px-3 shadow-bento backdrop-blur-2xl">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Início"
        >
          <motion.span
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={PERSONAL_INFO.profileImage}
              alt=""
              className="h-full w-full object-cover"
              width={36}
              height={36}
            />
          </motion.span>
          <span className="min-w-0">
            <span className="block truncate font-title text-sm font-bold text-white transition-colors group-hover:text-cyan-200">
              {firstName}
            </span>
            <span className="block truncate text-[10px] font-mono uppercase tracking-[0.18em] text-text-tertiary">
              tech + logistics
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={onOpenMenu}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-cyan-400/30"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          <FaBarsStaggered className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
