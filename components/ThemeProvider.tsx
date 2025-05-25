"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Safely infer props instead of using internal types
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
