"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Music, 
  Mic2, 
  Settings, 
  HelpCircle,
  LogOut,
  ArrowLeftToLine,
  ArrowRightToLine
} from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { useSidebarStore } from '@/store/useSidebarStore';

interface SidebarProps {
  className?: string;
}
const Sidebar : React.FC<SidebarProps> = ({ className }) => {
    const { isCollapsed, mobileOpen, toggleCollapsed, toggleMobileOpen } = useSidebarStore();
    

    const sidebarItems = [
        { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, href: '/' },
        { name: 'Analytics', icon: <BarChart2 className="h-5 w-5" />, href: '/#key-metrics' },
        { name: 'User Growth', icon: <Users className="h-5 w-5" />, href: '/#user-growth' },
        { name: 'Top Songs', icon: <Music className="h-5 w-5" />, href: '/#top-songs' },
        { name: 'Streams', icon: <Mic2 className="h-5 w-5" />, href: '/#streams' },
        { name: 'Settings', icon: <Settings className="h-5 w-5" />, href: '/settings' },
        { name: 'Help', icon: <HelpCircle className="h-5 w-5" />, href: '/help' },
      ];
  return (
    <>
    {mobileOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileOpen}
        />
      )}
{/* Sidebar Container */}
    <div
    className={cn(
        'fixed top-0 bottom-0 left-0 z-40 flex flex-col border-r border-border bg-card transition-all duration-300',
        isCollapsed ? 'w-[70px]' : 'w-64',
        mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        className
    )}
    >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center g-2 p-4">
        <div className={cn('flex items-center gap-2', isCollapsed && 'justify-center')}>
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Music className="h-5 w-5 text-primary-foreground" />
            </div>
            {!isCollapsed && <span className="font-semibold text-lg">Streamify</span>}
          </div>
          <Button variant="ghost" className="hidden md:flex" size="icon" onClick={toggleCollapsed}>
            {isCollapsed ? <ArrowRightToLine className="h-10 w-10" /> : <ArrowLeftToLine className="h-10 w-10" />}
        </Button>
        </div>
        {/* Sidebar Content */}
        <div className="flex-1 overflow-auto py-6">
          <nav className="space-y-1 px-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  item.name === 'Dashboard' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
                  isCollapsed && 'justify-center'
                )}
              >
                {item.icon}
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>
        {/* Sidebar Footer */}
        <div className=" flex flex-col gap-2 p-4">
            <div className={cn('flex items-center gap-5 justify-start text-accent-foreground rounded-md', !isCollapsed ? 'bg-accent p-2' : 'bg-transparent')}>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapsed && <span className='text-sm font-medium'>John Doe <p className='text-xs text-muted-foreground'>Admin</p></span>}
            </div>
            <Button variant="ghost" className="w-full">
                <LogOut className="h-5 w-5" />
                {!isCollapsed && <span>Logout</span>}
            </Button>
        </div>
    </div>    
    </>
  )
}

export default Sidebar