import { useState, useEffect } from 'react';
import type { Theme } from '@/shared/lib/theme';
import {
  applyTheme,
  getSavedTheme,
  getSystemTheme,
  removeSavedTheme,
} from '@/shared/lib/theme';

const defaultTheme: Theme = getSavedTheme() ?? 'auto';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    if (theme === 'auto') {
      removeSavedTheme();
      applyTheme(getSystemTheme());
    } else {
      applyTheme(theme, true);
    }
  }, [theme]);

  return { theme, setTheme };
}
