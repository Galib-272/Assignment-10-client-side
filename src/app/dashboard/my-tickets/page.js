"use client";

export default function MyTicketsPage() {
  const customFleet = [
    { id: "f_1", title: "Hanif Enterprise Economy (Dhaka - Rajshahi)", price: 900, available: 24, status: "Approved" },
    { id: "f_2", title: "Ena Transport Hino Luxury (Dhaka - Sylhet)", price: 1400, available: 10, status: "Pending review" }
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Active Listed Fleet Cargo</h2>
        <p className="text-xs text-gray-400">Track and manage booking counts or live review validation pipeline updates.</p>
      </div>

      <div className="overflow-hidden border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-950 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-left text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <tr>
              <th className="px-6 py-3">Fleet Route Description</th>
              <th className="px-6 py-3">Price Rate</th>
              <th className="px-6 py-3">Remaining Capacity</th>
              <th className="px-6 py-3">System State</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
            {customFleet.map((fleet) => (
              <tr key={fleet.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/40 transition">
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{fleet.title}</td>
                <td className="px-6 py-4">৳{fleet.price}</td>
                <td className="px-6 py-4">{fleet.available} Seats left</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold ${fleet.status === "Approved" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400"}`}>
                    ● {fleet.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}