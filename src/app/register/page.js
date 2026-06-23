"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 1. Form Submission Handler to your Cloud Vercel Backend Server
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://assignment-10-server-side-nmsyg5o59.vercel.app'}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      alert(`Account created successfully as a ${role}! Please sign in.`);
      router.push("/login");
    } catch (err) {
      setError(err.message);
    } finaly {
      setLoading(false);
    }
  };

  // 2. Better-Auth Social Google Provider Action
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard"
      });
    } catch (err) {
      console.error("Google Authentication Fault:", err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="sm:mx-auto w-full max-w-md bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Join TicketBari Engine
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Register to purchase or list verified transportation passes.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 dark:bg-red-950/30 p-3 text-xs text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Rahat Ahmed"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rahat@gmail.com"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Account Type Designation
            </label>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <button
                type="button"
                onClick={() => setRole("User")}
                className={`py-2 px-3 text-sm font-semibold rounded-md border text-center transition ${role === "User" ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-gray-300 text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"}`}
              >
                Passenger (User)
              </button>
              <button
                type="button"
                onClick={() => setRole("Vendor")}
                className={`py-2 px-3 text-sm font-semibold rounded-md border text-center transition ${role === "Vendor" ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-gray-300 text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"}`}
              >
                Fleet Manager (Vendor)
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-center rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 transition mt-2 disabled:opacity-50"
          >
            {loading ? "Creating Profile..." : "Sign Up"}
          </button>
        </form>

        {/* --- SOCIAL AUTHENTICATION SEPARATOR AND BUTTON BLOCK --- */}
        <div className="mt-6">
          <div className="relative flex items-center justify-center mb-4">
            <div className="absolute w-full border-t border-gray-200 dark:border-gray-800"></div>
            <span className="relative bg-white dark:bg-gray-950 px-3 text-xs uppercase text-gray-400 font-medium tracking-wider">
              Or continue with
            </span>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/70 transition"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Already registered?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400"
          >
            Sign In Here
          </Link>
        </p>
      </div>
    </div>
  );
}