import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Points back to your server's deployment base route
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://assignment-10-server-side-nmsyg5o59.vercel.app"
});