# Clerk set-up
1. Install Clerk
2. Add env variables to your .env.local file
3. Add middleware.js to your src folder
4. Add middleware template from the Clerk docs (https://clerk.com/docs/references/nextjs/clerk-middleware#configure-clerk-middleware)
5. Set up private routes in middleware
6. Provide our app with Clerk --> nest your app into ClerkProvider in the global layout.js file
7. Create sign-up and sign-in routes --> catch-all segments (https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#optional-catch-all-segments)
8. Set up your sign-up and sign-in pages
9. Set up a redirect to your own sign-up and sign-in pages in the .env.local file
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
- NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/rollercoasters
- NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/
10. Add UI elements for the user to see if they are signed-in or not!
11. Destructure the userId from auth() to have access to the clerk ID from each user
- We can store this ID (string) to build table relationships