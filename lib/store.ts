"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: true,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setTheme: (isDark: boolean) => set({ isDark }),
    }),
    {
      name: "theme-storage",
    },
  ),
);

interface NavigationStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeSection: "hero",
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
