"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 sm:grid-cols-2">
          {/* Column 1: Brand & Desc */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
              TicketBari
            </span>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Book bus, train, launch & flight tickets easily with our secure,
              lightning-fast automated system.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  All Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span> support@ticketbari.com
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> +880 1700-000000
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Payment Gateways
            </h3>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              Guaranteed safe checkout
            </p>
            <div className="flex items-center gap-3 text-2xl filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
              {/* Simple semantic representation of payment styling cards */}
              <span className="bg-white border rounded px-2 py-0.5 text-xs font-bold text-blue-800 dark:bg-gray-800 dark:border-gray-700">
                Stripe
              </span>
              <span className="bg-white border rounded px-2 py-0.5 text-xs font-bold text-orange-600 dark:bg-gray-800 dark:border-gray-700">
                Visa
              </span>
              <span className="bg-white border rounded px-2 py-0.5 text-xs font-bold text-red-500 dark:bg-gray-800 dark:border-gray-700">
                MasterCard
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; 2026 TicketBari. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Rebranded X Platform Icon replacing standard bird as requested */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
              aria-label="X (formerly Twitter)"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
