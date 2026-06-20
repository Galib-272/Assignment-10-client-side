"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(`Account created successfully as a ${role}! Please sign in.`);
      router.push("/login");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="sm:mx-auto w-full max-w-md bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
        {/* Header Block */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Join TicketBari Engine
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Register to purchase or list verified transportation passes.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
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

          {/* Email Address */}
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

          {/* Password */}
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

          {/* System Designation Role Selector Element */}
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

          {/* Submit Trigger element */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-center rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 transition mt-2 disabled:opacity-50"
          >
            {loading ? "Creating Profile..." : "Sign Up"}
          </button>
        </form>

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
