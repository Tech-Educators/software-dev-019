//in this file, we are going to determine our public and private routes by matching the route url to a specific pattern
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

//routes to be private (protected) --> this is the only code you need to customise
const isProtected = createRouteMatcher(["/new-rollercoaster", "/rollercoasters(.*)"])

export default clerkMiddleware(async (auth, req) => {
//if the user requests access to a protected route, the auth protection will trigger
if (isProtected(req)) await auth.protect()
})

export const config = {
  matcher: [
    //this is regex
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}