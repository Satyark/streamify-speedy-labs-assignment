import { create } from "zustand";

interface SidebarStore {
  isCollapsed: boolean;
  mobileOpen: boolean;
  toggleCollapsed: () => void;
  toggleMobileOpen: () => void;
  setCollapsed: (value: boolean) => void;
  setMobileOpen: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isCollapsed: false,
  mobileOpen: false,
  toggleCollapsed: () =>
    set((state) => ({ isCollapsed: !state.isCollapsed })),
  toggleMobileOpen: () =>
    set((state) => ({ mobileOpen: !state.mobileOpen })),
  setCollapsed: (value) => set({ isCollapsed: value }),
  setMobileOpen: (value) => set({ mobileOpen: value }),
}));
