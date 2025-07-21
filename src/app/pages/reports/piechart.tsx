"use client";
import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive pie chart for vaccination data";

const vaccinationData = [
  { category: "totalVaccinated", value: 150, fill: "var(--color-totalVaccinated)" },
  { category: "percentLivestockVaccinated", value: 75, fill: "var(--color-percentLivestockVaccinated)" },
  { category: "recentlyVaccinated", value: 20, fill: "var(--color-recentlyVaccinated)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  totalVaccinated: {
    label: "Total Vaccinated (150)",
    color: "var(--chart-1)",
  },
  percentLivestockVaccinated: {
    label: "% of Livestock Vaccinated (75%)",
    color: "var(--chart-2)",
  },
  recentlyVaccinated: {
    label: "Recently Vaccinated Last 30 Days (20)",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function PieChart1() {
  const id = "pie-interactive";
  const [activeCategory, setActiveCategory] = React.useState(vaccinationData[0].category);

  const activeIndex = React.useMemo(
    () => vaccinationData.findIndex((item) => item.category === activeCategory),
    [activeCategory]
  );
  const categories = React.useMemo(() => vaccinationData.map((item) => item.category), []);

  return (
    <Card data-chart={id} className="flex flex-col " >
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Pie Chart - Vaccination Data</CardTitle>
          <CardDescription>Vaccination Statistics 2025</CardDescription>
        </div>
        <Select value={activeCategory} onValueChange={setActiveCategory}>
          <SelectTrigger
            className="ml-auto h-7 w-[180px] rounded-lg pl-2.5"
            aria-label="Select a category"
          >
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {categories.map((category) => {
              const config = chartConfig[category as keyof typeof chartConfig] || {
                label: category.charAt(0).toUpperCase() + category.slice(1),
                color: "#000000", // Fallback color
              };

              return (
                <SelectItem
                  key={category}
                  value={category}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: config.color || `var(--color-${category})`,
                      }}
                    />
                    {config.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto w-full"
          style={{ width: "387px", height: "180px" }}
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={vaccinationData}
              dataKey="value"
              nameKey="category"
              innerRadius={50}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 20}
                    innerRadius={outerRadius + 10}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {vaccinationData[activeIndex].value.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-sm"
                        >
                          {chartConfig[vaccinationData[activeIndex].category as keyof typeof chartConfig]?.label || "Value"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}