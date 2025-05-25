"use client";
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const DaysRangeSelector: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('7d');

  return (
    <div className="flex justify-end mb-6">
      <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)}>
        <ToggleGroupItem value="7d" className="text-xs px-3">7D</ToggleGroupItem>
        <ToggleGroupItem value="30d" className="text-xs px-3">30D</ToggleGroupItem>
        <ToggleGroupItem value="90d" className="text-xs px-3">90D</ToggleGroupItem>
        <ToggleGroupItem value="12m" className="text-xs px-3">12M</ToggleGroupItem>
        <ToggleGroupItem value="all" className="text-xs px-3">All</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default DaysRangeSelector;