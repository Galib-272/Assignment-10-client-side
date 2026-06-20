"use client";

import { useState } from "react";
import Link from "next/link";

export default function AllTicketsPage() {
  // Master mock dataset representing verified inventory data
  const masterTickets = [
    { _id: "t_1", title: "Green Line Scenic Sleeper (Dhaka - Cox's Bazar)", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600", price: 2500, transportType: "Bus", from: "Dhaka", to: "Cox's Bazar" },
    { _id: "t_2", title: "Subarna Express Premier Chair (Chittagong - Dhaka)", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600", price: 850, transportType: "Train", from: "Chittagong", to: "Dhaka" },
    { _id: "t_3", title: "US-Bangla Business Class (Dhaka - Sylhet)", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600", price: 7500, transportType: "Plane", from: "Dhaka", to: "Sylhet" },
    { _id: "t_5", title: "Shohagh Business Class (Dhaka - Jessore)", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600", price: 1300, transportType: "Bus", from: "Dhaka", to: "Jessore" },
    { _id: "t_6", title: "Silk City Shovon Chair (Dhaka - Rajshahi)", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600", price: 350, transportType: "Train", from: "Dhaka", to: "Rajshahi" },
    { _id: "t_7", title: "Novoair Economy Saver (Dhaka - Cox's Bazar)", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600", price: 4800, transportType: "Plane", from: "Dhaka", to: "Cox's Bazar" }
  ];

  // Specific Search Locations & Filtering states
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Filter and sort the tickets dynamically on the client side
  const filteredTickets = masterTickets
    .filter((ticket) => {
      const matchesFrom = ticket.from.toLowerCase().includes(searchFrom.toLowerCase());
      const matchesTo = ticket.to.toLowerCase().includes(searchTo.toLowerCase());
      const matchesTransport = selectedTransport === "All" || ticket.transportType === selectedTransport;
      
      return matchesFrom && matchesTo && matchesTransport;
    })
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0; // default layout order
    });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      {/* Search Header Container Block */}
      <div className="border-b border-gray-200 pb-6 dark:border-gray-800 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Available Ticket Listings
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Enter your terminal origins and destinations to find exact route listings.
        </p>
      </div>

      {/* Control Panel: Two Input Search Fields and Dropdowns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mb-10">
        
        {/* 'From' Terminal Search Input */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">From</label>
          <input
            type="text"
            placeholder="e.g. Dhaka"
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-emerald-500"
          />
        </div>

        {/* 'To' Terminal Search Input */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">To</label>
          <input
            type="text"
            placeholder="e.g. Cox's Bazar"
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-emerald-500"
          />
        </div>

        {/* Transport Type Filter (Launches Option Removed) */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Transport Fleet</label>
          <select
            value={selectedTransport}
            onChange={(e) => setSelectedTransport(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
          >
            <option value="All">All Categories</option>
            <option value="Bus">Buses</option>
            <option value="Train">Trains</option>
            <option value="Plane">Flights</option>
          </select>
        </div>

        {/* Pricing Sort Filter */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sort By Price</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Grid Results Content System */}
      {filteredTickets.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTickets.map((ticket) => (
            <div 
              key={ticket._id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 shadow-sm transition hover:shadow-md h-full"
            >
              <div className="relative h-40 w-full bg-gray-100 dark:bg-gray-800">
                <img src={ticket.image} alt={ticket.title} className="h-full w-full object-cover" />
                <span className="absolute top-2 right-2 inline-flex items-center rounded bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white uppercase">
                  {ticket.transportType}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 min-h-[2.5rem]">
                    {ticket.title}
                  </h3>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 p-2 rounded">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">From</span>
                      <span className="font-medium">{ticket.from}</span>
                    </div>
                    <span className="text-gray-300 dark:text-gray-700 font-light">➔</span>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">To</span>
                      <span className="font-medium">{ticket.to}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-base font-extrabold text-gray-900 dark:text-white">৳{ticket.price}</span>
                  <Link 
                    href={`/tickets/${ticket._id}`}
                    className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed rounded-xl border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 font-medium">No routes connect those locations with your current options.</p>
          <button 
            onClick={() => { setSearchFrom(""); setSearchTo(""); setSelectedTransport("All"); setSortOrder("default"); }}
            className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Clear Search
          </button>
        </div>
      )}

    </div>
  );
}