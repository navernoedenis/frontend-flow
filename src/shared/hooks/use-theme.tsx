import { useState, useEffect } from 'react';
import { getSavedTheme, applyTheme, type Theme } from 'shared/lib/theme';

const defaultTheme = getSavedTheme() ?? 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return { theme, setTheme, toggleTheme };
}
