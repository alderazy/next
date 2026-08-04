import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/shared/components/ui/sidebar";

import BtnLoin from "@/shared/layouts/admin/sadbar/BtnLogin";
import Side_barGroupContent from "@/shared/layouts/admin/sadbar/SidebarGroupContent";
import { Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-sidebar">
      {/* 1. الهيدر: اللوجو أو اسم النظام */}
      <SidebarHeader className="px-4 py-[22px] bg-red font-bold border-b">
        لوحة التحكم
      </SidebarHeader>

      {/* 2. المحتوى: القوائم والروابط */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>الرئيسية</SidebarGroupLabel>
          <Side_barGroupContent></Side_barGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>النظام</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings />
                    <span>الإعدادات</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* 3. الفوتر: معلومات الملف الشخصي أو الخروج */}
      <SidebarFooter className="p-4 border-t">
        <BtnLoin />
      </SidebarFooter>
    </Sidebar>
  );
}
