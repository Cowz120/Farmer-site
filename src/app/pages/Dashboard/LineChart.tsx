"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear line chart showing revenue and target for 2024"

const chartData = [
  { month: "January", revenue: 900, target: 833.33 },
  { month: "February", revenue: 950, target: 833.33 },
  { month: "March", revenue: 1000, target: 833.33 },
  { month: "April", revenue: 980, target: 833.33 },
  { month: "May", revenue: 1020, target: 833.33 },
  { month: "June", revenue: 1050, target: 833.33 },
  { month: "July", revenue: 1100, target: 833.33 },
  { month: "August", revenue: 1080, target: 833.33 },
  { month: "September", revenue: 1030, target: 833.33 },
  { month: "October", revenue: 990, target: 833.33 },
  { month: "November", revenue: 950, target: 833.33 },
  { month: "December", revenue: 940, target: 833.33 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  target: {
    label: "Target",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

function ChartLine() {
  const totalRevenue = chartData.reduce((sum, data) => sum + data.revenue, 0)
  const totalTarget = chartData.reduce((sum, data) => sum + data.target, 0)
  const percentageDifference = ((totalRevenue - totalTarget) / totalTarget * 100).toFixed(1)

  return (
    <Card className="border-1 rounded-2xl mx-4 p-4" style={{ width: '568px', height: '300px' }}>
      <CardHeader className="p-2">
        <CardTitle className="text-sm">Revenue vs Target - 2024</CardTitle>
        <CardDescription className="text-xs">January - December 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <ChartContainer config={chartConfig} className="h-[200px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 8,
              right: 8,
              top: 8,
              bottom: 8,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              style={{ fontSize: '10px' }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey="revenue"
              type="linear"
              stroke="var(--color-revenue)"
              strokeWidth={1.5}
              dot={false}
            />
            <Line
              dataKey="target"
              type="linear"
              stroke="var(--color-target)"
              strokeWidth={1.5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-xs p-2">
        {/* <div className="flex gap-1 leading-none font-medium">
          Revenue {percentageDifference > 0 ? "exceeding" : "below"} target by {Math.abs(Number(percentageDifference))}% for 2024
          <TrendingUp className="h-3 w-3" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total revenue and target for 2024
        </div> */}
      </CardFooter>
    </Card>
  )
}

export default ChartLine