import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18n from 'shared/config/i18n/i18n.config-test';

export function renderWithI18n(component: ReactNode) {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
}
