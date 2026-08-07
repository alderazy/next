import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { NextResponse } from "next/server";

const COOKIES_NAME = "alderazy";

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request) {
  const { pathname } = request.nextUrl;
  const hasSession = request.cookies.get(COOKIES_NAME)?.value === "true";
  const validpath = pathname.replace(/^\/(ar|en)/, "") || "/";

  const adminPath = validpath.startsWith("/admin");
  const logPath = validpath.startsWith("/login");
  const lang = pathname.split("/")[1] === "ar" ? "ar" : "en";

  if (!hasSession && adminPath) {
    const loginUrl = new URL(`/${lang}/login`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (hasSession && logPath) {
    const adminUrl = new URL(`/${lang}/admin`, request.url);
    return NextResponse.redirect(adminUrl);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};