import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import { verifySession } from "@/lib/services/session";
import { LogoutAction } from "@/lib/services/logOut";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/components/ui/sidebar";

export default async function AuthButton({ children }) {
  const isAuthenticated = await verifySession();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {isAuthenticated ? (
          /* 🔴 حالة تسجيل الخروج (Server Action مع Form) */
          <form action={LogoutAction} className="w-full">
            <SidebarMenuButton
              type="submit"
              tooltip="تسجيل الخروج"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive font-medium transition-colors"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              <span>logOut</span>
            </SidebarMenuButton>
          </form>
        ) : (
          /* 🟢 حالة تسجيل الدخول (رابط عادي عبر asChild) */
          <SidebarMenuButton
            asChild
            tooltip="تسجيل الدخول"
            className="font-medium transition-colors"
          >
            <Link href="/ar/login">
              <LogIn className="h-4 w-4 shrink-0" />
              <span>تسجيل الدخول</span>
            </Link>
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
