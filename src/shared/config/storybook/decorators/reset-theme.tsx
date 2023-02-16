import { useEffect } from 'react';
import { type DecoratorFn } from '@storybook/react';
import { applyTheme } from 'shared/lib/theme';

export const ResetThemeDecorator: DecoratorFn = (Story) => {
  useEffect(() => {
    applyTheme('light', false);
  }, []);

  return <Story />;
};
