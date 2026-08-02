import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const COOKEIS_NSME = "alderazy";

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request) {
  const { pathname } = request.nextUrl;
  const cookiesStore = await cookies();
  const hasSession = cookiesStore.get(COOKEIS_NSME)?.value === "true";
  const validpath = pathname.replace(/^\/(ar|en)/, "") || "/";

  const adminPath = validpath.startsWith("/admin");
  const logPath = validpath.startsWith("/login");
  const lang = pathname.split("/")[1] === "ar" ? "ar" : "en";

  if (!hasSession && adminPath) {
    const loginUrl = new URL(`/${lang}/login`, request.url);
    NextResponse.redirect(loginUrl);
  }
  if (hasSession && logPath) {
    const adminUrl = new URL(`/${lang}/admin`, request.url);
    NextResponse.redirect(adminUrl);
  }

  return handleI18nRouting(request);
}

export const config = {
  // الماتشر ده بيوجه المسار الرئيسي / والمسارات اللي جواه أوتوماتيكياً
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
