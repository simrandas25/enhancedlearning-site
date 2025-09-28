import type { AuthOptions } from "next-auth";

// Minimal build-safe NextAuth options.
// Add real providers later (e.g., Google, Email) once env vars are configured.
export const authOptions: AuthOptions = {
  providers: [],
  session: { strategy: "jwt" },
};
