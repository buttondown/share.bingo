// middleware.ts
import type { NextRequest } from "next/server";
import { rules } from "./lib/rules";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const text = searchParams.get("text");

  for (const rule of rules) {
    if (request.nextUrl.pathname.startsWith(`/${rule.name}`)) {
      const redirectUrl = rule.render(url || "", text || "");
      return Response.redirect(redirectUrl);
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
