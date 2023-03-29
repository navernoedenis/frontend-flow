import type { DecoratorFn } from '@storybook/react';
import { applyTheme } from 'shared/lib/theme';
import type { Theme } from 'shared/lib/theme';

export const ThemeDecorator = (theme: Theme): DecoratorFn => (Story) => {
  applyTheme(theme);
  return <Story />;
};
