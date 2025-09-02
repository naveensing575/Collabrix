import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!.*\\..*|_next).*)',
    "/", 
    "/(api|trpc)(.*)"
  ],
};
