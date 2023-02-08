import { useState, useMemo, useCallback, PropsWithChildren } from "react";
import { Theme } from "./types";
import { ThemeContext } from "./context";

const defaultTheme: Theme = (localStorage.getItem("theme") as Theme) || "light";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const memorizedValues = useMemo(() => {
    return { theme, setTheme, toggleTheme };
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={memorizedValues}>
      {children}
    </ThemeContext.Provider>
  );
}
