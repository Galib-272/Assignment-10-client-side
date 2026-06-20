"use client";

import { useState } from "react";

export default function AddTicketPage() {
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transportType, setTransportType] = useState("Bus");
  const [loading, setLoading] = useState(false);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    setLoading(true);

    // Structural validation checks
    if (!title || !from || !to || !price || !quantity) {
      alert("Please complete all required listing fields.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      alert(`Success! "${title}" has been listed. Awaiting Admin Approval.`);

      // Clear inputs
      setTitle("");
      setFrom("");
      setTo("");
      setPrice("");
      setQuantity("");
      setTransportType("Bus");
    }, 1000);
  };

  return (
    <div className="max-w-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Create Fleet Route Listing
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Submit transport seat availability. Listings will be displayed
          publicly upon validation.
        </p>
      </div>

      <form onSubmit={handleCreateTicket} className="space-y-5">
        {/* Ticket Title Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Route Listing Title
          </label>
          <input
            type="text"
            placeholder="e.g., Ena Transport AC Sleeper (Dhaka - Cox's Bazar)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Location Grid inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              From (Terminal Origin)
            </label>
            <input
              type="text"
              placeholder="e.g., Dhaka"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              To (Terminal Destination)
            </label>
            <input
              type="text"
              placeholder="e.g., Cox's Bazar"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Fleet properties matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Transport Fleet classification */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Transport Type
            </label>
            <select
              value={transportType}
              onChange={(e) => setTransportType(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="Bus">Bus</option>
              <option value="Train">Train</option>
              <option value="Plane">Flight</option>
            </select>
          </div>

          {/* Pricing input unit */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Price (৳ BDT)
            </label>
            <input
              type="number"
              placeholder="1200"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Seat Capacity input allocation */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Available Seats
            </label>
            <input
              type="number"
              placeholder="36"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Trigger Submission button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full text-center rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow hover:bg-emerald-500 transition disabled:opacity-50"
          >
            {loading ? "Publishing Route Item..." : "Publish Route Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
}
