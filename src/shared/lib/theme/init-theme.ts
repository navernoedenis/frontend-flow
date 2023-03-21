import { applyTheme, getSavedTheme, getSystemTheme } from './theme';

applyTheme(getSavedTheme() ?? getSystemTheme());
