"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";

import { LayoutDashboard, FolderGit2, Settings, Mail } from "lucide-react";
export default function NavMobile() {
  const pathName = usePathname();
  const lang = pathName.startsWith("/ar");

  return (
    <Card className="sticky bottom-0 md:hidden rounded-none py-1 start-0 ">
      <div className="flex justify-around items-center">
        <Link href="/">
          <button className="flex justify-center items-center flex-col">
            <LayoutDashboard size={21} />
            <span className="text-[.8rem] mt-1">
              {lang ? "لوحة التحكم" : "dashboard"}
            </span>
          </button>
        </Link>
        <Link href="/projects">
          <button className="flex justify-center items-center flex-col">
            <FolderGit2 size={21} />
            <span className="text-[.8rem] mt-1">
              {lang ? "مشاريع" : "projects"}
            </span>
          </button>
        </Link>
        <div className="grid place-content-center ">
          <Button className="rounded-full w-15 h-15 font-extralight  text-3xl">
            +
          </Button>
        </div>
        <Link href="/settings">
          <button className="flex justify-center items-center flex-col">
            <Settings size={21} />
            <span className="text-[.8rem] mt-1">
              {lang ? "الإعدادات" : "settings"}
            </span>
          </button>
        </Link>
        <Link href="/contact">
          <button className="flex justify-center items-center flex-col">
            <Mail size={21} />
            <span className="text-[.8rem] mt-1">
              {lang ? "مراسله" : "message"}
            </span>
          </button>
        </Link>
      </div>
    </Card>
  );
}
