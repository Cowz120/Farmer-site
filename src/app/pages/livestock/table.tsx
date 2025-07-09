"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, Trash2, Search, Filter, ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialAnimals = [
  {
    name: "Cow",
    maleNo: 15,
    femaleNo: 85,
    type: "Cattle",
    totalNo: 100,
    status: "Active",
  },
  {
    name: "Goats",
    maleNo: 300,
    femaleNo: 1000,
    type: "Cattle",
    totalNo: 1300,
    status: "Active",
  },
  {
    name: "Chicken",
    maleNo: 300,
    femaleNo: 1000,
    type: "Cattle",
    totalNo: 1300,
    status: "Active",
  },
  {
    name: "Pigs",
    maleNo: 300,
    femaleNo: 1000,
    type: "Cattle",
    totalNo: 1300,
    status: "Active",
  },
  {
    name: "Fish",
    maleNo: 300,
    femaleNo: 1000,
    type: "Cattle",
    totalNo: 1300,
    status: "Active",
  },
  {
    name: "Sheep",
    maleNo: 300,
    femaleNo: 1000,
    type: "Cattle",
    totalNo: 1300,
    status: "Active",
  },
];

function LivestockTable() {
  const [animals, setAnimals] = useState(initialAnimals);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();

  const handleDelete = (name: string) => {
    setAnimals(animals.filter((animal) => animal.name !== name));
  };

  const handleSort = () => {
    const isAsc = sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");

    const sortedAnimals = [...animals].sort((a, b) => {
      const aValue = a.name;
      const bValue = b.name;
      return isAsc
        ? bValue.localeCompare(aValue)
        : aValue.localeCompare(bValue);
    });
    setAnimals(sortedAnimals);
  };

  const handleView = (name: string | number | boolean) => {
    router.push(`/pages/transaction?name=${encodeURIComponent(name)}`);
  };

  const handleCreateVaccineSchedule = () => {
    router.push("./livestock/VaccineScheduleForm");
  };

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-4xl border-1 rounded-2xl p-4">
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by animal name..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10 p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={() => setFilter("")}
          className="p-2 border rounded hover:bg-gray-100"
          aria-label="Clear filter"
        >
          <Filter size={20} />
        </button>
        <button
          onClick={handleSort}
          className="p-2 border rounded hover:bg-gray-100"
          aria-label="Sort table"
        >
          <ArrowUpDown size={20} />
        </button>
        <button
          onClick={handleCreateVaccineSchedule}
          className="p-2 border rounded hover:bg-gray-100 flex items-center space-x-2"
          aria-label="Create vaccine schedule"
        >
          <span>Create Vaccine Schedule</span>
        </button>
      </div>
      <Table>
        <TableCaption>A list of animals.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Animal Name</TableHead>
            <TableHead>Male No</TableHead>
            <TableHead>Female No</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Total No</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAnimals.map((animal) => (
            <TableRow key={animal.name}>
              <TableCell className="font-medium">{animal.name}</TableCell>
              <TableCell>{animal.maleNo}</TableCell>
              <TableCell>{animal.femaleNo}</TableCell>
              <TableCell>{animal.type}</TableCell>
              <TableCell>{animal.totalNo}</TableCell>
              <TableCell>{animal.status}</TableCell>
              <TableCell>
                <button
                  onClick={() => handleDelete(animal.name)}
                  className="text-red-600 hover:text-red-800 mr-2"
                  aria-label={`Delete ${animal.name}`}
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={() => handleView(animal.name)}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label={`View transactions for ${animal.name}`}
                >
                  <EyeIcon size={20} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default LivestockTable;