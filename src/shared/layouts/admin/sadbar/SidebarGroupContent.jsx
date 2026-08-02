"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/components/ui/sidebar";
import {
  LayoutDashboard,
  User,
  FolderGit2,
  Mail,
  Briefcase,
  FileText,
} from "lucide-react";

export default function Side_barGroupContent() {
  const t = useTranslations("Sidebar");
  const pathname = usePathname();

  const navItem = [
    {
      title: "dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      title: "contact",
      icon: Mail,
      href: "/admin/contact",
    },
    {
      title: "about",
      icon: User,
      href: "/admin/about",
    },
    {
      title: "cv",
      icon: FileText,
      href: "/admin/cv",
    },
    {
      title: "portfolio",
      icon: Briefcase,
      href: "/admin/portfolio",
    },
    {
      title: "projects",
      icon: FolderGit2,
      href: "/admin/projects",
    },
  ];

  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {navItem.map((e, i) => {
          const normalizedPath = pathname.replace(/^\/(ar|en)/, "") || "/";
          const isActive = normalizedPath === e.href;
          return (
            <SidebarMenuItem
              key={i}
              className={
                isActive
                  ? `relative 
                        !bg-accent !text-accent-foreground font-medium
                        /* إضافة البوردر الجانبي */
                        before:absolute before:top-1/2 before:-translate-y-1/2 
                        before:end-0 before:h-full before:w-1 
                        before:bg-primary `
                  : ""
              }
            >
              <SidebarMenuButton isActive={isActive} tooltip={e.title} asChild>
                <Link href={e.href}>
                  <e.icon />
                  <span>{t(e.title)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroupContent>
  );
}
