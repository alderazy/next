import { Readex_Pro } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { routing } from "@/lib/i18n/routing";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;

  // التحقق من صحة اللغة
  if (!routing.locales.includes(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: `%s | ${t("title")}`, // بيخلي العناوين الفرعية تظهر زي: "الرئيسية | اسم الموقع"
      default: t("title"),
    },
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale || "en"}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={readex.className}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--background)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <NextTopLoader
              color="#2563eb"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
            <Toaster
              position="top-center" // مكان ظهور التنبيه (في المنتصف من الأعلى)
              richColors // ألوان واضحة (أخضر للنجاح، أحمر للخطأ)
              closeButton // زرار لإغلاق التنبيه
              dir={locale === "ar" ? "rtl" : "ltr"} // اتجاه الـ Toast حسب لغة الموقع (RTL / LTR)
            />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
