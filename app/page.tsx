"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DaysRangeSelector from "@/components/dashboard/DaysRangeSelector";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import KeyMetrics from "@/components/dashboard/KeyMetrics";
import UserGrowth from "@/components/dashboard/UserGrowth";
import RevenuePieChart from "@/components/dashboard/RevenuePieChart";
import TopSongs from "@/components/dashboard/TopSongs";
import StreamTable from "@/components/dashboard/StreamTable";

export default function Dashboard() {
  const { isCollapsed } = useSidebarStore(); 
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1">
        <Sidebar />
        <div className={cn("flex-1", isCollapsed ? "md:ml-16" : "md:ml-64")}>
          <Header />
          <main className="p-6">
            <div className="mb-6" id="key-metrics">
              <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
              <p className="text-md text-muted-foreground">Overview of key metrics and performance indicators</p>
            </div>
            <DaysRangeSelector />

            <div className="space-y-6">
              {/* key metrics */}
              <section >
                <KeyMetrics />
              </section>

              <section className="grid gap-6 md:grid-cols-3" id="user-growth">
                <RevenuePieChart />
                <UserGrowth />
              </section>
              
              <section id="top-songs">
                <TopSongs />
              </section>

              <section id="streams">
                <StreamTable />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
