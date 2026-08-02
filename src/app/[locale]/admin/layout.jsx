import ToggelLang from "@/features/global/ToggleLang";
import { ModeToggle } from "@/providers/theme-toogle";
import { Suspense } from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/shared/layouts/admin/sadbar/app-sidebar";
import { TooltipProvider } from "@/shared/components/ui/tooltip"; // أو مسار المكون لديك
import LoginToastListener from "@/shared/layouts/admin/sadbar/LoginToastListener";
import NavMobile from "@/shared/layouts/admin/NavMobile";

export default function LayoutAdmin({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider
        style={{
          "--sidebar-width": "18rem",
          "--sidebar-width-icon": "4rem",
        }}
      >
        <AppSidebar />
        <SidebarInset className="flex min-h-screen flex-col h-400  gap-4">
          <header className="sticky top-0 z-10 flex h-20 items-center justify-between bg-card px-4">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <ModeToggle />
              <ToggelLang />
            </div>
          </header>
          <Suspense fallback={null}>
            <LoginToastListener />
          </Suspense>
          <main className="flex-1 bg-card  p-4">{children}</main>

          <footer className="flex bg-card h-20 items-center justify-center ">
            footer
          </footer>

          <NavMobile />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
