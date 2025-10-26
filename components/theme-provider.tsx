'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Avoid forcing a server-side theme class to reduce hydration mismatches.
  // Let the client decide the theme; disable automatic color-scheme injection
  // (which writes inline styles) to keep server HTML stable.
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      enableSystem={true}
      storageKey="pranjal-theme"
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  )
}
