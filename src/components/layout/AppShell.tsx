import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import MobileTopBar from "./MobileTopBar";
import MobileNav from "./MobileNav";
import SiteFooter from "./SiteFooter";
import ScreenBackground from "../ScreenBackground";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary-light focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
      >
        Pular para o conteúdo
      </a>

      <div className="min-h-[100dvh] min-h-screen lg:pl-[17.5rem]">
        <Sidebar />

        <div className="flex min-h-[100dvh] min-h-screen flex-col">
          <MobileTopBar
            menuOpen={mobileOpen}
            onOpenMenu={() => setMobileOpen(true)}
          />
          <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

          <main
            id="main-content"
            className="relative flex-1 w-full"
          >
            <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
              <div className="absolute inset-0">
                <ScreenBackground gridOpacityClassName="opacity-[0.1]" />
              </div>
            </div>
            <div className="relative z-[1]">{children}</div>
          </main>

          <SiteFooter />
        </div>
      </div>
    </>
  );
}
