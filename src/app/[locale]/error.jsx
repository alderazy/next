"use client";

import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // تقدر تبعت الخطأ لخدمة تتبع الأخطاء زي Sentry هنا
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="rounded-full bg-destructive/10 p-4 text-destructive mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-foreground">حدث خطأ غير متوقع!</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md">
        لم نتمكن من تحميل هذه الصفحة بشكل صحيح. يرجى المحاولة مرة أخرى.
      </p>

      <div className="mt-6 flex items-center gap-3">
        {/* إعادة محاولة تحميل مكونات الصفحة */}
        <Button onClick={() => reset()} variant="default">
          إعادة المحاولة
        </Button>
        <Button onClick={() => window.location.reload()} variant="outline">
          تحديث الصفحة
        </Button>
      </div>
    </div>
  );
}
