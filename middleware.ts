import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./app/site-content";

const publicPaths = ["/tatuajes-en-el-salvador"];

function getPreferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase();

  if (acceptLanguage?.includes("en")) {
    return "en";
  }

  return "es";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
