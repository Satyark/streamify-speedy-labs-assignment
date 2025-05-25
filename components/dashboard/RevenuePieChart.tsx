"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatNumber } from "@/lib/utils"
import { useMemo, useState } from "react"

const revenueData = [
  { source: "Premium Subscriptions", value: 7845620, percentage: 62.4, fill: "hsl(var(--chart-1))" },
  { source: "Family Plans", value: 3256780, percentage: 25.9, fill: "hsl(var(--chart-2))" },
  { source: "Advertisements", value: 1245670, percentage: 9.9, fill: "hsl(var(--chart-3))" },
  { source: "Partnerships", value: 219820, percentage: 1.8, fill: "hsl(var(--chart-4))" },
]

const chartConfig = {
  "Premium Subscriptions": { label: "Premium Subscriptions", color: "hsl(var(--chart-1))" },
  "Family Plans": { label: "Family Plans", color: "hsl(var(--chart-2))" },
  "Advertisements": { label: "Advertisements", color: "hsl(var(--chart-3))" },
  "Partnerships": { label: "Partnerships", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig

export default function RevenuePieChart() {
  const id = "pie-revenue"
  const [activeSource, setActiveSource] = useState(revenueData[0].source)

  const activeIndex = useMemo(
    () => revenueData.findIndex((item) => item.source === activeSource),
    [activeSource]
  )

  return (
    <Card data-chart={id} className="col-span-2 sm:col-span-1">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle className="text-2xl font-semibold">Revenue Breakdown</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">By Source</CardDescription>
        </div>
        <Select value={activeSource} onValueChange={setActiveSource}>
          <SelectTrigger
            className="ml-auto h-7 w-[200px] rounded-lg pl-2.5"
            aria-label="Select a revenue source"
          >
            <SelectValue placeholder="Select source" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {revenueData.map((item) => (
              <SelectItem key={item.source} value={item.source}>
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-sm"
                    style={{ backgroundColor: item.fill }}
                  />
                  {item.source}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={revenueData}
              dataKey="value"
              nameKey="source"
              innerRadius={60}
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
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    const current = revenueData[activeIndex]
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
                          ${formatNumber(current.value)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground text-xs"
                        >
                          {current.percentage}%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
