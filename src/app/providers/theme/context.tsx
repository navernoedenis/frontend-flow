import { createContext } from "react";
import { ThemeProviderType } from "./types";

export const ThemeContext = createContext<ThemeProviderType>({
  setTheme: () => {},
  theme: "light",
  toggleTheme: () => {}
});
