import { NextResponse } from "next/server";

export function middleware(request: any) {
  const url = request.nextUrl.pathname;
  console.log("Middleware triggered for:", url);

  // Define locked routes
  const lockedRoutes = ["/soundwave"];

  if (lockedRoutes.includes(url)) {
    console.log("Redirecting:", url);
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to homepage
  }

  return NextResponse.next(); // Allow access to other pages
}

// Apply middleware only to these specific routes
export const config = {
  matcher: "/:path*", // Ensure proper matching
};
