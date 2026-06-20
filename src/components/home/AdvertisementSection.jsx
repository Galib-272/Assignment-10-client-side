"use client";

import Link from "next/link";

export default function AdvertisementSection() {
  // Mocking exactly 6 admin-approved advertised tickets
  const advertisedTickets = [
    {
      _id: "adv_1",
      title: "Green Line Scenic Sleeper (Dhaka - Cox's Bazar)",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
      price: 2500,
      quantity: 12,
      transportType: "Bus",
      perks: ["AC", "Breakfast", "Wifi", "Water"],
    },
    {
      _id: "adv_2",
      title: "Subarna Express Premier Chair (Chittagong - Dhaka)",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600",
      price: 850,
      quantity: 4,
      transportType: "Train",
      perks: ["AC", "Snacks"],
    },
    {
      _id: "adv_3",
      title: "US-Bangla Business Class (Dhaka - Sylhet)",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      price: 7500,
      quantity: 2,
      transportType: "Plane",
      perks: ["AC", "Premium Meal", "Extra Baggage"],
    },
    {
      _id: "adv_4",
      title: "Manami Luxury Cruise VIP Cabin (Dhaka - Barisal)",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600",
      price: 4500,
      quantity: 8,
      transportType: "Launch",
      perks: ["AC", "Dinner", "Attach Bath"],
    },
    {
      _id: "adv_5",
      title: "Hanif Enterprise Economy (Dhaka - Rajshahi)",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600",
      price: 900,
      quantity: 24,
      transportType: "Bus",
      perks: ["Water Only"],
    },
    {
      _id: "adv_6",
      title: "Parabat Express Snigdha (Dhaka - Sreemangal)",
      image: "https://images.unsplash.com/photo-1519666336592-e225a99dbe2f?auto=format&fit=crop&q=80&w=600",
      price: 650,
      quantity: 15,
      transportType: "Train",
      perks: ["AC"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
          Featured Routes
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Top Sponsored Deals
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 dark:text-gray-400">
          Handpicked premium travel selections curated directly for high availability and comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {advertisedTickets.map((ticket) => (
          <div
            key={ticket._id}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 shadow-sm transition hover:shadow-md h-full"
          >
            <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 flex-shrink-0">
              <img
                src={ticket.image}
                alt={ticket.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-3 right-3 inline-flex items-center rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white uppercase shadow-sm">
                {ticket.transportType}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 min-h-[3.5rem]">
                  {ticket.title}
                </h3>

                <div className="mt-4 flex items-baseline justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Per Unit</span>
                    <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      ৳{ticket.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wider block">Available</span>
                    <span className={`text-sm font-semibold ${ticket.quantity > 5 ? 'text-gray-600 dark:text-gray-300' : 'text-red-500 font-bold'}`}>
                      {ticket.quantity} Seats Left
                    </span>
                  </div>
                </div>

                <div className="mt-4 min-h-[3rem]">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Perks Included:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {ticket.perks.map((perk, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/tickets/${ticket._id}`}
                  className="block w-full text-center rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}