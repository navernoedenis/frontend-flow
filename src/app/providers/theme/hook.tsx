import { useContext } from 'react';
import { ThemeContext } from './provider';

export function useTheme() {
  return useContext(ThemeContext);
}
