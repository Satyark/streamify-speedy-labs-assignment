import React from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, TooltipProps } from 'recharts';
import { ResponsiveContainer } from 'recharts'
import useData from '@/store/useData';
import { formatNumber } from '@/lib/utils';
import { NameType } from 'recharts/types/component/DefaultTooltipContent';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

const MobileBarChart = () => {
    const { visualizationData } = useData();
    const userGrowthData = visualizationData.userGrowth.slice(5);
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
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userGrowthData}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
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
         <Bar dataKey="totalUsers" fill="url(#totalUsersGradient)" radius={4} />
         <Bar dataKey="activeUsers" fill="url(#activeUsersGradient)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default MobileBarChart