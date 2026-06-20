"use client";

import { useState, use } from "react";
import Link from "next/link";

export default function TicketDetailsPage({ params: paramsPromise }) {
  // Unwrap params safely for Next.js dynamic routing configurations
  const params = use(paramsPromise);
  const ticketId = params.id;

  // Global mock inventory pool to match details instantly against the dynamic parameter ID
  const inventoryPool = [
    { _id: "adv_1", title: "Green Line Scenic Sleeper (Dhaka - Cox's Bazar)", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600", price: 2500, quantity: 12, transportType: "Bus", from: "Dhaka", to: "Cox's Bazar", perks: ["AC Sleeper", "Complimentary Breakfast", "High-Speed Wifi", "Mineral Water"], vendorName: "Green Line Paribahan", departure: "10:30 PM" },
    { _id: "adv_2", title: "Subarna Express Premier Chair (Chittagong - Dhaka)", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600", price: 850, quantity: 4, transportType: "Train", from: "Chittagong", to: "Dhaka", perks: ["AC Chair", "Snacks Pack"], vendorName: "Bangladesh Railway", departure: "07:00 AM" },
    { _id: "adv_3", title: "US-Bangla Business Class (Dhaka - Sylhet)", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600", price: 7500, quantity: 2, transportType: "Plane", from: "Dhaka", to: "Sylhet", perks: ["Business Cabin", "Premium Hot Meal", "Extra Baggage 30KG"], vendorName: "US-Bangla Airlines", departure: "02:15 PM" },
    { _id: "adv_4", title: "Manami Luxury Cruise VIP Cabin (Dhaka - Barisal)", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600", price: 4500, quantity: 8, transportType: "Launch", from: "Dhaka", to: "Barisal", perks: ["VIP Double Bed", "Dinner Included", "Attached Bath"], vendorName: "Manami Launch Fleet", departure: "09:00 PM" },
    { _id: "adv_5", title: "Hanif Enterprise Economy (Dhaka - Rajshahi)", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600", price: 900, quantity: 24, transportType: "Bus", from: "Dhaka", to: "Rajshahi", perks: ["Non-AC Ergonomic seats", "Mineral Water"], vendorName: "Hanif Enterprise", departure: "08:30 AM" },
    { _id: "adv_6", title: "Parabat Express Snigdha (Dhaka - Sreemangal)", image: "https://images.unsplash.com/photo-1519666336592-e225a99dbe2f?auto=format&fit=crop&q=80&w=600", price: 650, quantity: 15, transportType: "Train", from: "Dhaka", to: "Sreemangal", perks: ["Snigdha AC Compartment"], vendorName: "Bangladesh Railway", departure: "06:20 AM" },
    { _id: "t_1", title: "Green Line Scenic Sleeper (Dhaka - Cox's Bazar)", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600", price: 2500, quantity: 12, transportType: "Bus", from: "Dhaka", to: "Cox's Bazar", perks: ["AC Sleeper"], vendorName: "Green Line Paribahan", departure: "10:30 PM" },
    { _id: "t_2", title: "Subarna Express Premier Chair (Chittagong - Dhaka)", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600", price: 850, quantity: 4, transportType: "Train", from: "Chittagong", to: "Dhaka", perks: ["AC Chair"], vendorName: "Bangladesh Railway", departure: "07:00 AM" },
    { _id: "t_3", title: "US-Bangla Business Class (Dhaka - Sylhet)", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600", price: 7500, quantity: 2, transportType: "Plane", from: "Dhaka", to: "Sylhet", perks: ["Business Cabin"], vendorName: "US-Bangla Airlines", departure: "02:15 PM" }
  ];

  // Find targeted item or serve fallback structural state
  const ticket = inventoryPool.find(item => item._id === ticketId) || inventoryPool[0];

  // Interactivity Counter and Modal states
  const [purchaseQty, setPurchaseQty] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState("Rahat"); // Default mock session active user
  const [formEmail, setFormEmail] = useState("rahat@gmail.com");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const incrementQty = () => { if (purchaseQty < ticket.quantity) setPurchaseQty(prev => prev + 1); };
  const decrementQty = () => { if (purchaseQty > 1) setPurchaseQty(prev => prev - 1); };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      alert(`Booking Successful! Total: ৳${ticket.price * purchaseQty}. Head to Dashboard to pay.`);
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Navigation Breadcrumb */}
      <Link href="/tickets" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-500 mb-6 transition">
        ← Back to Ticket Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        
        {/* Left Hand Column: Clean Image presentation */}
        <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 h-[300px] sm:h-[400px]">
          <img src={ticket.image} alt={ticket.title} className="w-full h-full object-cover" />
        </div>

        {/* Right Hand Column: Information Matrix */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20 uppercase">
                {ticket.transportType}
              </span>
              <span className="text-xs text-gray-400">Provided by {ticket.vendorName}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              {ticket.title}
            </h1>

            {/* Journey Grid details */}
            <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl mb-6 text-sm">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Route Path</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">{ticket.from} ➔ {ticket.to}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Departure Time</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">{ticket.departure} (Today)</span>
              </div>
            </div>

            {/* Perks Listing Checklist */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Premium Perks Included:</h3>
              <div className="flex flex-wrap gap-2">
                {ticket.perks?.map((perk, idx) => (
                  <span key={idx} className="inline-flex items-center rounded bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200">
                    ✨ {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing, Quantity Counter and Checkout Box */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-gray-400 block">Unit Ticket Fare</span>
                <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">৳{ticket.price}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 block">Inventory Status</span>
                <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{ticket.quantity} seats remaining</span>
              </div>
            </div>

            {/* Counter Widget element */}
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl mb-4">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Select Seats:</span>
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-950">
                <button onClick={decrementQty} className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold transition">-</button>
                <span className="px-4 py-1 text-sm font-bold text-gray-900 dark:text-gray-100 w-12 text-center">{purchaseQty}</span>
                <button onClick={incrementQty} className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold transition">+</button>
              </div>
              <span className="ml-auto text-xs font-semibold text-gray-400">Subtotal: <b className="text-sm font-bold text-gray-900 dark:text-gray-200">৳{ticket.price * purchaseQty}</b></span>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full text-center rounded-xl bg-emerald-600 py-3.5 text-base font-bold text-white shadow-md hover:bg-emerald-500 transition"
            >
              Book Selected Seats Now
            </button>
          </div>

        </div>
      </div>

      {/* Booking Pipeline Dialog Modal Overlay Backdrop */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">Confirm Your Booking</h2>
            <p className="text-xs text-gray-400 mb-6">Review your seat selections and confirm details to lock this ticket item.</p>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Passenger Name</label>
                <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Contact Email Address</label>
                <input type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
              </div>

              {/* Order Invoice Brief info inside form layout */}
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg text-xs space-y-1 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800/50">
                <div className="flex justify-between"><span>Route Premium:</span><span className="font-medium text-gray-900 dark:text-gray-200">{ticket.title}</span></div>
                <div className="flex justify-between"><span>Seats Counted:</span><span className="font-bold text-gray-900 dark:text-gray-200">{purchaseQty} ticket(s)</span></div>
                <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-1.5 mt-1 font-semibold text-sm">
                  <span className="text-gray-900 dark:text-gray-100">Total Payable Amount:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">৳{ticket.price * purchaseQty}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="w-1/2 text-center rounded-md border border-gray-300 dark:border-gray-700 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitted} className="w-1/2 text-center rounded-md bg-emerald-600 py-2 text-sm font-bold text-white shadow hover:bg-emerald-500 transition disabled:opacity-50">
                  {isSubmitted ? "Processing..." : "Confirm Book"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}