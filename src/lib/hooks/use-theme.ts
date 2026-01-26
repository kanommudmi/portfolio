import React from "react";
import { ThemeProviderContext, type ThemeProviderState } from "../../lib/contexts/theme-context";

export const useTheme = (): ThemeProviderState => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};