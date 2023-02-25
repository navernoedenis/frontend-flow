import { LS_THEME_KEY } from 'shared/constants/local-storage';
import { LocalStorage } from 'shared/services/local-storage';

export type Theme = 'light' | 'dark';

export function applyTheme(theme: Theme, persist: boolean = true): void {
  document.documentElement.setAttribute('theme', theme);
  if (persist) {
    LocalStorage.save(LS_THEME_KEY, theme);
  }
}

export function getSavedTheme(): Theme | null {
  return LocalStorage.get<Theme>(LS_THEME_KEY);
}

export function removeSavedTheme(): void {
  LocalStorage.remove(LS_THEME_KEY);
}
