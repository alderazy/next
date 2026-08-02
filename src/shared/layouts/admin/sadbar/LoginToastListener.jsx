"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export default function LoginToastListener() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 1. التحقق من وجود الكويري logged=true
    if (searchParams.get("logged") === "true") {
      toast.success("تم تسجيل الدخول بنجاح! 👋");

      // 2. تنظيف الـ URL ومسح الكويري بدون Re-render كامل للموقع
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("logged");

      const newUrl = newParams.toString()
        ? `${pathname}?${newParams.toString()}`
        : pathname;

      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  return null; // المكون ده بيعمل لوجيك بس مش بيرندر أي UI
}
