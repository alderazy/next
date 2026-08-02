import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always", // أو 'always' حسب رغبتك في شكل الـ URL
});

// تصدير الروابط المترجمة لاستخدامها في المكونات (بدل Link و useRouter العادية)
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
