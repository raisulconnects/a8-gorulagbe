import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === "/register") {
    if (session?.user) {
      return NextResponse.redirect(new URL("/my-profile", request.url));
    } else {
      return NextResponse.next();
    }
  }

  // console.log("Session:", session);
  // console.log("Pathname:", pathname);

  if (session?.user) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/animals/:id", "/my-profile", "/register"],
};
