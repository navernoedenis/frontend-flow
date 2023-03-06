import { applyTheme, getSavedTheme, getSystemTheme } from '.';

applyTheme(getSavedTheme() ?? getSystemTheme());
