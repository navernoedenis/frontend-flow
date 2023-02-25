import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import type { DecoratorFn } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n.config';

export const I18nDecorator: DecoratorFn = (Story) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">
      <Story />
    </Suspense>
  </I18nextProvider>
);
