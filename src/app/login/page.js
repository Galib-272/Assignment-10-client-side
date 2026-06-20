"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // For fast role-based routing mock testing
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const mockSessionUser = {
      name: email.split("@")[0] || "User",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
      role: role // Triggers User, Vendor, or Admin conditional layout trees
    };
    
    localStorage.setItem("ticketbari_mock_user", JSON.stringify(mockSessionUser));
    
    // Trigger absolute full refresh to reload local context components instantly
    window.location.href = "/dashboard";
  }, 800);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="sm:mx-auto w-full max-w-md bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
        
        {/* Branding Title Header */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Sign in to TicketBari
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Securely access your active travel itineraries and bookings.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Address Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rahat@gmail.com"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Structural Simulation Role Selector */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Simulate Profile Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="User">Standard User Dashboard</option>
              <option value="Vendor">Vendor Dashboard</option>
              <option value="Admin">System Administrator</option>
            </select>
          </div>

          {/* Form Trigger Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-center rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 transition disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Not a member yet?{" "}
          <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">
            Create an Account
          </Link>
        </p>

      </div>
    </div>
  );
}