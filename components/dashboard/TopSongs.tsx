"use client";
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import useData from "@/store/useData"
import { formatNumber } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"
import { NameType } from "recharts/types/component/DefaultTooltipContent";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { TopSong } from "@/lib/types";

export default function TopSongs() {
    const isLoading = false;
    const { visualizationData } = useData();
    const topSongs = visualizationData.topSongs;
    if (isLoading) {
      return <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-1/2" />
          ))}
      </div>
  }
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length && typeof payload[0].value === 'number' && typeof payload[1].value === 'number') {
      return (
        <div className="bg-background p-3 border border-border rounded-md shadow-sm">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-primary">
            Total Users: <span className="font-medium">{formatNumber(payload[0].value)}</span>
          </p>
          <p className="text-sm text-chart-2">
            Active Users: <span className="font-medium">{formatNumber(payload[1].value)}</span>
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <Card className="col-span-2 sm:col-span-1">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Top 5 Streamed Songs</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Most popular songs over the past 30 days</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        {/* <ChartContainer config={chartConfig}> */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            accessibilityLayer
            data={topSongs}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" horizontal={false} />
            <XAxis
              dataKey="streams"
              type="number" 
              tickFormatter={(value) => formatNumber(value)}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              width={100}
            />
        <Tooltip content={<CustomTooltip />} />

        {topSongs.map((entry: TopSong, index: number) => (   
            <Bar dataKey="streams" layout="vertical" radius={5} fill={entry.color} key={index}>
                <LabelList
                  dataKey="artist"
                  position="right"
                  style={{ fill: 'hsl(var(--muted-foreground))', fontSize: '11px' }}
                />
            </Bar>
        )) }
        
          </BarChart>
          </ResponsiveContainer>
        {/* </ChartContainer> */}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by <p className="text-emerald-500">5.2%</p> this month <TrendingUp className="h-4 w-4 text-emerald-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
