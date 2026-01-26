import React from "react";
import {
  ThemeProviderContext,
  type ThemeProviderProps,
  type ThemeProviderState,
} from "../lib/contexts/theme-context";

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<ThemeProviderState["theme"]>(
    () => (localStorage.getItem(storageKey) as ThemeProviderState["theme"]) || defaultTheme
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  } as ThemeProviderState; // Cast to ThemeProviderState

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}