"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("ticketbari_mock_user");
    if (!savedUser) {
      alert("Access Denied. Please log in first.");
      router.push("/login");
    } else {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-sm font-semibold text-emerald-600 animate-pulse">Loading Workspace Security context...</p>
      </div>
    );
  }

  // Define sidebar navigation items based on the user's role
  const getLinksByRole = () => {
    const role = user?.role || "User";
    
    if (role === "Admin") {
      return [
        { label: "Admin Overview", href: "/dashboard" },
        { label: "Manage Users", href: "/dashboard/users" },
        { label: "Route Approvals", href: "/dashboard/approvals" },
      ];
    }
    
    if (role === "Vendor") {
      return [
        { label: "Vendor Overview", href: "/dashboard" },
        { label: "Add New Ticket", href: "/dashboard/add-ticket" },
        { label: "My Fleet Routes", href: "/dashboard/my-tickets" },
      ];
    }
    
    // Standard Passenger / User Links
    return [
      { label: "My Profile", href: "/dashboard" },
      { label: "My Booked Seats", href: "/dashboard/my-bookings" },
    ];
  };

  const navLinks = getLinksByRole();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900/40">
      
      {/* 1. Sidebar Container Element */}
      <aside className="w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 hidden md:block flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-gray-800/60">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded">
            {user?.role} Portal
          </span>
        </div>
        
        <nav className="p-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 2. Main Content Wrapper Frame */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Mobile Sidebar Navigation Helper Header */}
        <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 md:hidden p-4 flex gap-2 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap ${
                pathname === link.href ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </header>

        {/* Render nested individual menu pages */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>

    </div>
  );
}