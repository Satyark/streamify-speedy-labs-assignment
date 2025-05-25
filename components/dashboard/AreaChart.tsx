"use client"
import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useData from '@/store/useData';
import { formatNumber } from '@/lib/utils';


const AreaLineChart = () => {
    const { visualizationData } = useData();
    const userGrowthData = visualizationData.userGrowth;
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
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
    <ResponsiveContainer width="100%" height="100%">
      {/* <ChartContainer config={chartConfig}> */}
          <AreaChart
            data={userGrowthData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="totalUsersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="activeUsersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month" tick={{ fontSize: 12 }} 
            />
            <YAxis
              tickFormatter={(value) => formatNumber(value)}
              tick={{ fontSize: 12 }}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
           <Legend />
            <Area
              type="monotone"
              dataKey="totalUsers"
              name="Total Users"
              stroke="hsl(var(--chart-1))"
              fill="url(#totalUsersGradient)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="activeUsers"
              name="Active Users"
              stroke="hsl(var(--chart-2))"
              fill="url(#activeUsersGradient)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        {/* </ChartContainer> */}
        </ResponsiveContainer>
  )
}

export default AreaLineChart