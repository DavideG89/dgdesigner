"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesThemeProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return <NextThemesThemeProvider {...props}>{children}</NextThemesThemeProvider>
}
