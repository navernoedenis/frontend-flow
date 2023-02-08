export type Theme = "light" | "dark";

export type ThemeProviderType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};
