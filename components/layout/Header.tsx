"use client";

import React from 'react';

import { 
  Bell, 
  HelpCircle, 
  Menu, 
  Search,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/useSidebarStore';
import ModeToggle from '../mode-toggle';

interface HeaderProps {
  className?: string;
}

const Header : React.FC<HeaderProps> = ({ className }) => {
    const { isCollapsed, mobileOpen, toggleMobileOpen } = useSidebarStore();
  return (
    <header className={cn('flex h-16 items-center justify-between border-b border-border px-6', className)}>
      <div className={cn("", isCollapsed ? "w-full" : "w-1/3")}>
        <h1 className="text-xl font-semibold md:hidden">Streamify</h1>
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-8 w-[200px] lg:w-[300px]"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <ModeToggle />
        <Button variant="ghost" className="top-4 right-4 md:hidden" onClick={toggleMobileOpen}>
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
      </div>
    </header>
  )
}

export default Header