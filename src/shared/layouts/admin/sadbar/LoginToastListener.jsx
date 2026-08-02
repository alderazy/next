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
      console.log(router);
    }
  }, [searchParams, router, pathname]);

  return null; // المكون ده بيعمل لوجيك بس مش بيرندر أي UI
}
