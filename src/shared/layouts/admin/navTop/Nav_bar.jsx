"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggelLang from "@/features/global/ToggleLang";
import { ModeToggle } from "@/providers/theme-toogle";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import { LogoutAction } from "@/lib/services/logOut";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
export default function NavBar() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/ar") ? "ar" : "en";
  const Linkes = [
    { ar: "ملفي الشخصي", en: "Profolio", path: "/admin/portfolio" },
    { ar: "الإعدادات", en: "Settings", path: "/admin/projects" },
    { ar: "الفواتير", en: "Billing", path: "/admin/Billing" },
  ];

  return (
    <div className="flex h-full  items-center justify-between bg-card px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <ModeToggle />
        <ToggelLang />
      </div>
      <div className="flex">
        <div className="me-3">
          <DropdownMenu className="">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <p className="bg-green-600 dark:bg-green-800 -top-4 text-[.7rem] flex justify-center items-center -end-3 w-6 h-6 rounded-full absolute">
                    10
                  </p>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir={lang === "ar" ? "rtl" : "ltr"}
              className={"w-32 absolute -end-8"}
            >
              <DropdownMenuGroup>
                {Linkes.map((e, i) => {
                  return (
                    <DropdownMenuItem key={i + e[lang]} asChild>
                      <Link href={e.path}>{e[lang]}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <button onClick={LogoutAction}>
                    {lang === "ar" ? "خروج" : "log Out"}
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir={lang === "ar" ? "rtl" : "ltr"}
              className={"w-32 absolute -end-8"}
            >
              <DropdownMenuGroup>
                {Linkes.map((e, i) => {
                  return (
                    <DropdownMenuItem key={i + e[lang]} asChild>
                      <Link href={e.path}>{e[lang]}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <button onClick={LogoutAction}>
                    {lang === "ar" ? "خروج" : "log Out"}
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
