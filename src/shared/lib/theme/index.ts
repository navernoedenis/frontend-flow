export type Theme = 'light' | 'dark';

const LS_THEME_KEY = 'frontend-project:theme';

export function applyTheme(theme: Theme, persist: boolean = true): void {
  document.documentElement.setAttribute('theme', theme);
  if (persist) {
    localStorage.setItem(LS_THEME_KEY, theme);
  }
}

export function getSavedTheme(): Theme | null {
  return localStorage.getItem(LS_THEME_KEY) as Theme | null;
}

export function removeSavedTheme(): void {
  localStorage.removeItem(LS_THEME_KEY);
}
