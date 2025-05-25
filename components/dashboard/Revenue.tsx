"use client";
import React, { useState } from 'react'
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useData from '@/store/useData';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { formatCurrency, formatPercentage } from '@/lib/utils';

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))'
];
const Revenue = () => {
    const { visualizationData } = useData();
    const isLoading = false;
    const revenueData = visualizationData.revenueDistribution;

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const onPieEnter = (_: any, index: number) => {
      setActiveIndex(index);
    };
    
    const onPieLeave = () => {
      setActiveIndex(null);
    };
    const CustomTooltip = ({ active, payload }: any) => {
      if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
          <div className="bg-background p-3 border border-border rounded-md shadow-sm">
            <p className="font-medium">{data.source}</p>
            <p className="text-sm">
              Revenue: <span className="font-medium">{formatCurrency(data.value)}</span>
            </p>
            <p className="text-sm">
              Percentage: <span className="font-medium">{formatPercentage(data.percentage)}</span>
            </p>
          </div>
        );
      }
      return null;
    };
    if (isLoading) {
        return <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
        </div>
    }
  return (
    <Card className="col-span-2 sm:col-span-1">
    <CardHeader>
      <CardTitle className='text-2xl font-semibold'>Revenue Distribution</CardTitle>
      <CardDescription className='text-sm text-muted-foreground'>Breakdown of revenue by source</CardDescription>
    </CardHeader>
    <CardContent className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={revenueData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            {visualizationData.revenueDistribution.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                strokeWidth={activeIndex === index ? 2 : 1}
                stroke="hsl(var(--background))"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            formatter={(value, entry, index) => (
              <span className="text-sm">
                {value} ({formatPercentage(visualizationData.revenueDistribution[index].percentage)})
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
  )
}

export default Revenue