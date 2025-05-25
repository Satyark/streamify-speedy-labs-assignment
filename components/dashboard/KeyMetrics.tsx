import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import useData from '@/store/useData';
import MetricsCard from './MetricsCard';
import { DollarSign, Mic2, Music, TrendingUp, Users } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/lib/utils';

const KeyMetrics = () => {
    const { keyMetrics } = useData();
    const isLoading = false;
    
    if (isLoading) {
        return <div className='grid gap-4 md:grid-cols-2 lg:grid-cols'>
            {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        ))}
        </div>
    }
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>

        <MetricsCard title="Total Users"
        value={formatNumber(keyMetrics.totalUsers)}
        description="Registered users on the platform"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: keyMetrics.growthRate.users, isPositive: keyMetrics.growthRate.users > 0 }}/>
        
        <MetricsCard
        title="Active Users"
        value={formatNumber(keyMetrics.activeUsers)}
        description="Users active in the last 30 days"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 8.2, isPositive: true }}
      />
      
      <MetricsCard
        title="Total Streams"
        value={formatNumber(keyMetrics.totalStreams)}
        description="Total song plays across the platform"
        icon={<Music className="h-4 w-4" />}
        trend={{ value: keyMetrics.growthRate.streams, isPositive: keyMetrics.growthRate.streams > 0 }}
      />
      
      <MetricsCard
        title="Revenue"
        value={formatCurrency(keyMetrics.revenue)}
        description="Total revenue from subscriptions and ads"
        icon={<DollarSign className="h-4 w-4" />}
        trend={{ value: keyMetrics.growthRate.revenue, isPositive: keyMetrics.growthRate.revenue > 0 }}
      />
      
      <MetricsCard
        title="Top Artist"
        value={
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <img
                src={keyMetrics.topArtist.image}
                alt={keyMetrics.topArtist.name}
                className="h-full w-full object-cover"
              />
            </div>
            <span>{keyMetrics.topArtist.name}</span>
          </div>
        }
        description={`${formatNumber(keyMetrics.topArtist.streams)} streams in the last 30 days`}
        icon={<Mic2 className="h-4 w-4" />}
      />
      
      <MetricsCard
        title="User Engagement"
        value={`${((keyMetrics.activeUsers / keyMetrics.totalUsers) * 100).toFixed(1)}%`}
        description="Percentage of total users who are active"
        icon={<TrendingUp className="h-4 w-4" />}
        trend={{ value: 5.3, isPositive: true }}
      />
    </div>
  )
}

export default KeyMetrics;