import ToggelLang from "@/features/global/ToggleLang";
import { ModeToggle } from "@/providers/theme-toogle";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/shared/layouts/admin/sadbar/app-sidebar";
import { TooltipProvider } from "@/shared/components/ui/tooltip"; // أو مسار المكون لديك

export default function LayoutHome({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider
        style={{
          "--sidebar-width": "18rem",
          "--sidebar-width-icon": "4rem",
        }}
      >
        <AppSidebar />
        <SidebarInset className="flex min-h-screen flex-col gap-4">
          <header className="sticky top-0 z-10 flex h-20 items-center justify-between bg-amber-200 px-4">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <ModeToggle />
              <ToggelLang />
            </div>
          </header>

          <main className="flex-1 bg-amber-200 p-4">{children}</main>

          <footer className="flex h-20 items-center justify-center bg-amber-200">
            footer
          </footer>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
