"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-900 to-gray-950 text-white py-24 sm:py-32">
      {/* Decorative subtle background mesh */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Consistent uniform tag line */}
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30 mb-6">
            ✨ Smart & Fast Ticketing Systems
          </span>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white mb-6">
            Your Premium Gateway to <span className="text-emerald-400">Effortless Travel</span>
          </h1>
          
          <p className="text-lg leading-relaxed text-gray-300 mb-10 max-w-2xl">
            Discover and instantly secure booking access across certified Bus, Train, Launch, and Flight routes nationwide. No hidden premiums, just pure convenience.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/tickets" className="rounded-md bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition">
              Explore Tickets
            </Link>
            <a href="#why-choose-us" className="rounded-md border border-gray-700 bg-gray-900/50 px-6 py-3.5 text-base font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}