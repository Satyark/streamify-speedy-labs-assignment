import { TrendingUp } from "lucide-react"
import { Skeleton } from '../ui/skeleton';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import useData from "@/store/useData";
import { calculateGrowth } from "@/lib/utils";
import AreaLineChart from "./AreaChart";
import MobileBarChart from "./MobileBarChart";


const UserGrowth = () => {
    const { visualizationData } = useData();
    const userGrowthData = visualizationData.userGrowth; 
    const novemberData = userGrowthData.find(item => item.month === "Nov");
    const decemberData = userGrowthData.find(item => item.month === "Dec");

    const percentageIncrease = calculateGrowth(Number(decemberData?.activeUsers), Number(novemberData?.activeUsers)).toFixed(2);
    const isLoading = false;

    if (isLoading) {
        return <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
        </div>
    }
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">User Growth</CardTitle>
        <CardDescription>Monthly total and active user growth over the past year</CardDescription>
      </CardHeader>
      {/* Area chart in desktop */}
      <CardContent className="h-[300px] hidden md:block">
        <AreaLineChart />
     </CardContent>
     {/* Bar chart in mobile */}
     <CardContent className="h-[300px] md:hidden">
        <MobileBarChart />
     </CardContent>
     <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Active Users up by <p className="text-emerald-500">{percentageIncrease}%</p> this month <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {novemberData?.month} - {decemberData?.month}
            </div>
          </div>
        </div>
      </CardFooter>
     </Card>
  )
}

export default UserGrowth