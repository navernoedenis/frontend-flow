import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18n from 'shared/config/i18n/i18n.config-test';

import type { AppState, AppPartialState } from 'app/providers/store/types';
import { createStore } from 'app/providers/store';

export function renderWithAll(
  component: ReactNode,
  preloadedState?: AppPartialState,
) {
  const store = createStore(preloadedState as AppState);

  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>{component}</MemoryRouter>
      </I18nextProvider>
    </Provider>,
  );
}
