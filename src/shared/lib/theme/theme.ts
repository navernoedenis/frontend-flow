import { LS_THEME_KEY } from '@/shared/constants/local-storage';
import { Storage } from '@/shared/services';

export type Theme = 'auto' | 'light' | 'dark';
export type LS_Theme = Exclude<Theme, 'auto'>;

export function applyTheme(theme: Theme, persist = false): void {
  document.documentElement.setAttribute('theme', theme);

  if (persist) {
    Storage.local.save(LS_THEME_KEY, theme);
  }
}

export function getSystemTheme(): LS_Theme {
  const key = '(prefers-color-scheme: dark)';
  const media = window.matchMedia(key);
  return media.matches ? 'dark' : 'light';
}

export function getSavedTheme(): LS_Theme | null {
  return Storage.local.get<LS_Theme>(LS_THEME_KEY);
}

export function removeSavedTheme(): void {
  Storage.local.remove(LS_THEME_KEY);
}
