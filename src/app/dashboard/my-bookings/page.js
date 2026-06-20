"use client";

import { useState } from "react";

export default function MyBookingsPage() {
  // Mock dataset representing passenger seat bookings linked to this user profile
  const [bookings, setBookings] = useState([
    {
      id: "b_101",
      title: "Green Line Scenic Sleeper (Dhaka - Cox's Bazar)",
      seats: 2,
      totalPrice: 5000,
      status: "Pending Payment",
      date: "June 24, 2026",
      departure: "10:30 PM"
    },
    {
      id: "b_102",
      title: "Subarna Express Premier Chair (Chittagong - Dhaka)",
      seats: 1,
      totalPrice: 850,
      status: "Paid",
      date: "July 02, 2026",
      departure: "07:00 AM"
    }
  ]);

  // Handle mock payment validation pipeline
  const handleMockPayment = (bookingId) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === bookingId ? { ...booking, status: "Paid" } : booking
      )
    );
    alert("Payment successful! Your e-ticket pass has been issued.");
  };

  return (
    <div className="max-w-4xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      
      <div className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">My Booked Seats</h2>
        <p className="text-xs text-gray-400 mt-1">Manage your active reservations, check payment parameters, and view your digital travel slips.</p>
      </div>

      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div 
              key={booking.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20 gap-4"
            >
              {/* Left Column: Journey Details */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">ID: {booking.id}</span>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{booking.title}</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 pt-1">
                  <span>📅 <b>Date:</b> {booking.date}</span>
                  <span>⏰ <b>Departure:</b> {booking.departure}</span>
                  <span>🎟️ <b>Seats Selected:</b> {booking.seats}</span>
                </div>
              </div>

              {/* Right Column: Financial Parameters and Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 dark:border-gray-800">
                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-gray-400 uppercase block">Total Cost</span>
                  <span className="text-base font-extrabold text-gray-900 dark:text-white block">৳{booking.totalPrice}</span>
                  
                  {/* Dynamic Status Badging */}
                  <span className={`inline-block text-[10px] font-bold uppercase rounded mt-1 px-1.5 py-0.5 ${
                    booking.status === "Paid" 
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  }`}>
                    ● {booking.status}
                  </span>
                </div>

                {/* Conditional Payment trigger element */}
                <div>
                  {booking.status === "Pending Payment" ? (
                    <button
                      onClick={() => handleMockPayment(booking.id)}
                      className="rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-sm"
                    >
                      Pay Now
                    </button>
                  ) : (
                    <button
                      disabled
                      className="rounded-lg bg-gray-100 dark:bg-gray-900 px-3.5 py-2 text-xs font-semibold text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-800 cursor-not-allowed"
                    >
                      Paid & Issued
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-400">You do not have any pending or confirmed bookings yet.</p>
        </div>
      )}

    </div>
  );
}