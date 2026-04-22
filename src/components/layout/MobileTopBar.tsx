import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../../constants";

type MobileTopBarProps = {
  menuOpen: boolean;
  onOpenMenu: () => void;
};

export default function MobileTopBar({ menuOpen, onOpenMenu }: MobileTopBarProps) {
  const firstName = PERSONAL_INFO.name.split(" ")[0];

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-white/[0.08] bg-primary/80 px-4 backdrop-blur-xl lg:hidden">
      <Link
        to="/"
        className="group flex min-w-0 items-center gap-2 font-title text-base font-bold tracking-wide"
        aria-label="Início"
      >
        <motion.span
          className="shrink-0 text-accent"
          whileTap={{ scale: 0.95 }}
        >
          &lt;/&gt;
        </motion.span>
        <span className="truncate text-white group-hover:text-accent transition-colors">
          {firstName}
        </span>
        <span className="ml-0.5 hidden min-[380px]:inline text-[10px] font-mono uppercase tracking-widest text-text-tertiary">
          .dev
        </span>
      </Link>
      <button
        type="button"
        onClick={onOpenMenu}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-accent/30"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label="Abrir menu"
      >
        <FaBars className="h-5 w-5" />
      </button>
    </header>
  );
}
