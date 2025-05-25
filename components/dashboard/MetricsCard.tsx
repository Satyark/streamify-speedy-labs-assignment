import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { cn } from "@/lib/utils";

  interface MetricCardProps {
    title: string;
    value: string | React.ReactNode;
    description?: string;
    icon?: React.ReactNode;
    trend?: {
      value: number;
      isPositive: boolean;
    };
  }

const MetricsCard = ({ title, value, description, icon, trend}: MetricCardProps) => {
  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">{value}</div>
    {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
    {trend && (
          <div className="mt-2 flex items-center">
            <span
              className={cn(
                'text-xs font-medium',
                trend.isPositive ? 'text-emerald-500' : 'text-rose-500'
              )}
            >
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value).toFixed(1)}%
            </span>
            <span className="ml-1 text-xs text-muted-foreground">from last period</span>
          </div>
        )}
  </CardContent>
</Card>

  )
}

export default MetricsCard