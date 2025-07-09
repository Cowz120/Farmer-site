
"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart1 } from "./piechart";

// Livestock data for summary cards

// Chart data and config for ChartBarActive
const barChartData = [
  { browser: "Value Chain", livestock: 260, fill: "var(--color-chrome)" },
  { browser: "Breed", livestock: 200, fill: "var(--color-safari)" },
  { browser: "Gender", livestock: 275, fill: "var(--color-firefox)" },
  { browser: "other", livestock: 90, fill: "var(--color-other)" },
];

const barChartConfig = {
  livestock: {
    label: "livestock",
  },
  chrome: {
    label: "Value Chain",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Breed",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Gender",
    color: "var(--chart-3)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

// ChartBarActive component
export function ChartBarActive() {
  return (
    <Card style={{ width: "251px", height: "full" }}>
      <CardHeader style={{ padding: "8px" }}>
        <CardTitle style={{ fontSize: "14px" }}>Livestock Distribution</CardTitle>
        <CardDescription style={{ fontSize: "10px" }}>
          Livestock by Value Chain, Breed, Gender
        </CardDescription>
      </CardHeader>
      <CardContent style={{ padding: "8px", height: "140px" }}>
        <ChartContainer
          config={barChartConfig}
          style={{ width: "100%", height: "100%" }}
        >
          <BarChart
            accessibilityLayer
            data={barChartData}
            margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) =>
                barChartConfig[value as keyof typeof barChartConfig]?.label
              }
              tick={{ fontSize: 10 }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="livestock"
              strokeWidth={1}
              radius={4}
              barSize={30}
              activeIndex={2}
              activeBar={({ ...props }) => (
                <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              )}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter
        className="flex-col items-start gap-1 text-sm"
        style={{ padding: "8px" }}
      >
        <div className="flex gap-1 font-medium leading-none" style={{ fontSize: "10px" }}>
          Up 5.2% this month <TrendingUp className="h-3 w-3" />
        </div>
        <div
          className="text-muted-foreground leading-none"
          style={{ fontSize: "9px" }}
        >
          Total livestock, last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}



// Midcomponent
import { Search, Filter } from "lucide-react";

export const Midcomponent = () => {
  // Sample data (replace with actual LivestockData source)
  const LivestockData = {
    Meat: 100,
    Dairy: 50,
    Male: 70,
    Female: 80,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 rounded-xl shadow-lg  ">
      {/* Left Section: Chart and Summary */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full lg:w-2/3">
        {/* ChartBarActive Component */}
        <div className="w-full lg:w-1/2 rounded-2xl shadow-md p-4">
          <ChartBarActive />
        </div>

        {/* Livestock Summary Section */}
        <section
          className="w-full lg:w-1/2  border border-gray-200 rounded-2xl shadow-md p-6"
          aria-label="Livestock Summary"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Livestock Summary</h2>
            <div className="flex gap-3">
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search className="text-gray-600" size={20} />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Filter"
              >
                <Filter className="text-gray-600" size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Meat Livestock */}
            <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-gray-600">Meat Livestock</p>
              <p className="text-2xl font-bold text-gray-800">{LivestockData.Meat}</p>
            </div>
            {/* Dairy Livestock */}
            <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-gray-600">Dairy Livestock</p>
              <p className="text-2xl font-bold text-gray-800">{LivestockData.Dairy}</p>
            </div>
            {/* Male Livestock */}
            <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-gray-600">Male</p>
              <p className="text-2xl font-bold text-gray-800">{LivestockData.Male}</p>
            </div>
            {/* Female Livestock */}
            <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-gray-600">Female</p>
              <p className="text-2xl font-bold text-gray-800">{LivestockData.Female}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Right Section: Pie Chart */}
      <div >
        <PieChart1 />
      </div>
    </div>
  );
};


// Page component
export default function Page() {
  return (
    <main className=" ">
      <Midcomponent />
    </main>
  );
}
