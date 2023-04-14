// middleware.ts
import { rules } from "@/lib/rules";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  for (const rule of rules) {
    if (request.nextUrl.pathname.startsWith(`/${rule.name}`)) {
      const { url, text } = Object.fromEntries(
        request.nextUrl.searchParams.entries()
      );
      const redirectUrl = rule.render(url, text);
      return NextResponse.redirect(redirectUrl);
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
