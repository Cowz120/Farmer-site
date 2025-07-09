"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialActivity = [
  {
    date: "July 25, 2024",
    time: "11:00 A.M",
    type: "Sale",
    livestock: "Bulk Livestock",
    amount: "100,000 KES",
    status: "Pending Pickup",
  },
  {
    date: "July 25, 2024",
    time: "11:00 A.M",
    type: "Sale",
    livestock: "Bulk Livestock",
    amount: "250,000 KES",
    status: "Completed",
  },
  {
    date: "July 25, 2024",
    time: "11:00 A.M",
    type: "Sale",
    livestock: "Bulk Livestock",
    amount: "300,000 KES",
    status: "Completed",
  },
  // … add more rows if needed
];

function RecentActivityTable() {
  const [rows] = useState(initialActivity);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const perPage = 10;
  const router = useRouter();

  const filtered = rows.filter((r) =>
    r.livestock.toLowerCase().includes(filter.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    return sortOrder === "asc"
      ? a.date.localeCompare(b.date)
      : b.date.localeCompare(a.date);
  });

  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="mx-auto max-w-4xl border rounded-2xl p-4 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">RECENT ACTIVITY</h2>

      {/* Controls */}
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 border rounded hover:bg-gray-100">Period</button>
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10 p-2 border rounded w-full"
          />
        </div>
        <button className="p-2 border rounded hover:bg-gray-100"><Filter size={20} /></button>
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} className="p-2 border rounded hover:bg-gray-100">
          <ArrowUpDown size={20} />
        </button>
      </div>

      {/* Table */}
      <Table>
        <TableCaption>Transaction history</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer">Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Transaction Type</TableHead>
            <TableHead>Livestock Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.map((r, idx) => (
            <TableRow key={idx}>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.time}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.livestock}</TableCell>
              <TableCell>{r.amount}</TableCell>
              <TableCell>{r.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="space-x-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`px-2 py-1 border rounded ${page === n ? "bg-gray-200" : ""}`}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <div>
          <span>{perPage} / Page</span>
        </div>
      </div>
    </div>
  );
}

export default RecentActivityTable;
