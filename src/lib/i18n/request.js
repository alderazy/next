import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing"; // أو خريطة اللغات المتاحة عندك

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. قراءة اللغة المطلوبة من المسار (URL)
  let locale = await requestLocale;

  // 2. التحقق مما إذا كانت اللغة مدعومة، وإلا يتم استخدام اللغة الافتراضية
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // 3. تحميل ملف الترجمة الخاص باللغة المحددة ديناميكياً
    messages: (await import(`../message/${locale}.json`)).default,
  };
});
