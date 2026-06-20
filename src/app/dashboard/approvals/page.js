"use client";

import { useState } from "react";

export default function AdminApprovalsPage() {
  // Mock dataset representing newly uploaded vendor route items awaiting verification
  const [pendingListings, setPendingListings] = useState([
    {
      id: "p_901",
      title: "Ena Transport AC Sleeper (Dhaka - Cox's Bazar)",
      vendor: "Ena Paribahan",
      transportType: "Bus",
      price: 2200,
      seats: 36,
      route: "Dhaka ➔ Cox's Bazar",
    },
    {
      id: "p_902",
      title: "Biman Bangladesh Economy Saver (Dhaka - Chittagong)",
      vendor: "Biman Airlines",
      transportType: "Plane",
      price: 4200,
      seats: 12,
      route: "Dhaka ➔ Chittagong",
    },
  ]);

  // Action pipeline to manage approving listings dynamically
  const handleApprove = (id, title) => {
    setPendingListings((prev) => prev.filter((item) => item.id !== id));
    alert(
      `Approved! "${title}" has been successfully injected into the public live inventory list.`,
    );
  };

  // Action pipeline to manage rejecting/declining incomplete listings
  const handleReject = (id) => {
    setPendingListings((prev) => prev.filter((item) => item.id !== id));
    alert("Listing request declined and moved to revision history logs.");
  };

  return (
    <div className="max-w-5xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Admin Control: Route Approvals
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Audit, approve, or decline system-wide transportation schedules
          submitted by verified fleet partners.
        </p>
      </div>

      {pendingListings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50 dark:bg-gray-900/40">
                <th className="py-3 px-4">Route Info</th>
                <th className="py-3 px-4">Fleet Vendor</th>
                <th className="py-3 px-4 text-center">Type</th>
                <th className="py-3 px-4">Fare / Seats</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60 text-sm">
              {pendingListings.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/30 dark:hover:bg-gray-900/10 transition"
                >
                  {/* Route & ID Details */}
                  <td className="py-4 px-4 max-w-xs">
                    <span className="block text-[10px] font-mono text-gray-400">
                      Queue ID: {item.id}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white block line-clamp-1">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500 mt-0.5 block">
                      {item.route}
                    </span>
                  </td>

                  {/* Provider Name */}
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300 font-medium">
                    {item.vendor}
                  </td>

                  {/* Badge Classification */}
                  <td className="py-4 px-4 text-center">
                    <span className="inline-block text-[10px] font-extrabold uppercase rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5">
                      {item.transportType}
                    </span>
                  </td>

                  {/* Metrics Row */}
                  <td className="py-4 px-4">
                    <span className="font-extrabold text-gray-900 dark:text-white block">
                      ৳{item.price}
                    </span>
                    <span className="text-xs text-gray-400 block">
                      {item.seats} Seats Cap
                    </span>
                  </td>

                  {/* Control Interactions */}
                  <td className="py-4 px-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleReject(item.id)}
                        className="rounded-lg border border-red-200 text-red-600 dark:border-red-900/50 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 px-3 py-1.5 text-xs font-semibold transition"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => handleApprove(item.id, item.title)}
                        className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-bold transition shadow-sm"
                      >
                        Approve Live
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            🎉 Review queue clear! No pending ticket verification tasks
            remaining.
          </p>
        </div>
      )}
    </div>
  );
}
