import { LS_THEME_KEY } from 'shared/constants/local-storage';
import { LocalStorage } from 'shared/services/local-storage/local-storage';

export type Theme = 'auto' | 'light' | 'dark';
export type LS_Theme = Exclude<Theme, 'auto'>;

export function applyTheme(theme: Theme, persist = false): void {
  document.documentElement.setAttribute('theme', theme);

  if (persist) {
    LocalStorage.save(LS_THEME_KEY, theme);
  }
}

export function getSystemTheme(): LS_Theme {
  const key = '(prefers-color-scheme: dark)';
  const media = window.matchMedia(key);
  return media.matches ? 'dark' : 'light';
}

export function getSavedTheme(): LS_Theme | null {
  return LocalStorage.get<LS_Theme>(LS_THEME_KEY);
}

export function removeSavedTheme(): void {
  LocalStorage.remove(LS_THEME_KEY);
}
