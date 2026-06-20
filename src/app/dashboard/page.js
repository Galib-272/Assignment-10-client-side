"use client";

import { useEffect, useState } from "react";

export default function DashboardIndexPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("ticketbari_mock_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <div className="max-w-4xl">
      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-8 shadow-sm">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">
          Welcome back, {user?.name || "Passenger"}!
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Account Status:{" "}
          <span className="text-emerald-600 font-bold uppercase text-xs tracking-wider">
            {user?.role || "User"} Verified
          </span>
        </p>
      </div>

      {/* Conditional Dashboard UI blocks for demo validation testing */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Completed Journeys
          </span>
          <span className="text-2xl font-black text-gray-900 dark:text-gray-100 block mt-1">
            14
          </span>
        </div>

        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Active Bookings
          </span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block mt-1">
            2 Passes
          </span>
        </div>

        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Wallet Balance
          </span>
          <span className="text-2xl font-black text-gray-900 dark:text-gray-100 block mt-1">
            ৳0.00
          </span>
        </div>
      </div>
    </div>
  );
}
