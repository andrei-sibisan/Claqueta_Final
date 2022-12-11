import { NextResponse } from "next/server";
import isAuthenticated from "./isAuthenticated";

const loginUrl = "/api/login";

export const config = {
  matcher: "/api/users/:path*",
};
export function middleware(req) {
  console.log("Middleware file");
  if (!isAuthenticated(req)) {
    return NextResponse(
      JSON.stringify({ success: false, message: "authentification failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    ).redirect(loginUrl);
  }
}
