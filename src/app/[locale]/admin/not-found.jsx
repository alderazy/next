"use client";

import Link from "next/link";
import { Button } from "@/shared/components/ui/button"; // أو مسار البوتون عندك

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-black text-muted-foreground/30">404</h1>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
        الصفحة غير موجودة
      </h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md">
        عذراً، الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها لمكان آخر.
      </p>

      <div className="mt-6">
        <Button asChild variant="default">
          <Link href="/admin">الرجوع للرئيسية</Link>
        </Button>
      </div>
    </div>
  );
}
