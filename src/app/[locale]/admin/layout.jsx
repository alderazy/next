import { Suspense } from "react";
import { SidebarProvider, SidebarInset } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/shared/layouts/admin/sadbar/app-sidebar";
import Nav_Bar from "@/shared/layouts/admin/navTop/Nav_bar";
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
        <SidebarInset className="flex min-h-screen flex-col ">
          <header className="sticky top-0 z-10 h-18 bg-[var(--card)]">
            <Nav_Bar></Nav_Bar>
          </header>
          <Suspense fallback={null}>
            <LoginToastListener />
          </Suspense>
          <main className="p-4 min-h-screen ">{children}</main>

          <footer className="flex bg-card h-20 items-center justify-center ">
            footer
          </footer>

          <NavMobile />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
