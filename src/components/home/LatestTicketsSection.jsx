"use client";

import Link from "next/link";

export default function LatestTicketsSection() {
  // Mock data of 6-8 recent, standard approved tickets 
  const latestTickets = [
    {
      _id: "lat_1",
      title: "Shohagh Business Class (Dhaka - Jessore)",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
      price: 1300,
      quantity: 18,
      transportType: "Bus",
      from: "Dhaka",
      to: "Jessore"
    },
    {
      _id: "lat_2",
      title: "Silk City Express Shovon Chair (Dhaka - Rajshahi)",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600",
      price: 350,
      quantity: 40,
      transportType: "Train",
      from: "Dhaka",
      to: "Rajshahi"
    },
    {
      _id: "lat_3",
      title: "Novoair Economy Saver (Dhaka - Cox's Bazar)",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      price: 4800,
      quantity: 14,
      transportType: "Plane",
      from: "Dhaka",
      to: "Cox's Bazar"
    },
    {
      _id: "lat_4",
      title: "Green Line Water Bus (Dhaka - Barisal)",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600",
      price: 700,
      quantity: 32,
      transportType: "Launch",
      from: "Dhaka",
      to: "Barisal"
    },
    {
      _id: "lat_5",
      title: "Ena Transport Non-AC (Dhaka - Sylhet)",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600",
      price: 570,
      quantity: 22,
      transportType: "Bus",
      from: "Dhaka",
      to: "Sylhet"
    },
    {
      _id: "lat_6",
      title: "Mahanagar Godhuli (Dhaka - Chittagong)",
      image: "https://images.unsplash.com/photo-1519666336592-e225a99dbe2f?auto=format&fit=crop&q=80&w=600",
      price: 650,
      quantity: 8,
      transportType: "Train",
      from: "Dhaka",
      to: "Chittagong"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-800">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
        <div>
          <span className="text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
            Just In
          </span>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Latest Available Routes
          </h2>
        </div>
        <Link 
          href="/tickets" 
          className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 transition"
        >
          See All Tickets <span className="ml-1">→</span>
        </Link>
      </div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestTickets.map((ticket) => (
          <div 
            key={ticket._id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950/60 p-4 shadow-sm transition hover:shadow-md"
          >
            {/* Image Box */}
            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img 
                src={ticket.image} 
                alt={ticket.title} 
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 inline-flex items-center rounded-md bg-slate-900/80 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                {ticket.transportType}
              </span>
            </div>

            {/* Core Card Details */}
            <div className="flex flex-1 flex-col pt-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">
                {ticket.title}
              </h3>
              
              {/* Route Path Info */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1.5">
                <span>{ticket.from}</span>
                <span className="text-gray-300 dark:text-gray-600">➔</span>
                <span>{ticket.to}</span>
              </p>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-50 dark:border-gray-800/80">
                <div>
                  <span className="text-xs text-gray-400 block">Fare</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100">৳{ticket.price}</span>
                </div>
                <Link 
                  href={`/tickets/${ticket._id}`}
                  className="rounded-lg bg-gray-100 dark:bg-gray-800 px-3.5 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition"
                >
                  View Details
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}