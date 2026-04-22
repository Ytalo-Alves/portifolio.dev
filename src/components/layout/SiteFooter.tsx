import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navigation";
import { PERSONAL_INFO } from "../../constants";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-primary/40">
      <div className="container-custom flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-text-secondary">
            <span className="font-medium text-white">{PERSONAL_INFO.name}</span>
            <span className="text-text-tertiary"> — {PERSONAL_INFO.title}</span>
          </p>
          <p className="mt-1 text-xs text-text-tertiary">
            © {year} — Feito com React, TypeScript e Tailwind
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary"
          aria-label="Links do rodapé"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
