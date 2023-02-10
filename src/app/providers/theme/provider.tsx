import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

 type Theme = 'light' | 'dark';

interface ThemeProviderType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeProviderType>({
  setTheme: () => {},
  theme: 'light',
  toggleTheme: () => {},
});

const defaultTheme: Theme = (localStorage.getItem('theme') as Theme) || 'light';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
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
