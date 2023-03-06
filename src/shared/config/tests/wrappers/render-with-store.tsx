import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { createAppStore } from 'app/providers/store';
import type { AppState, AppStoreParams } from 'app/providers/store';

export function renderWithStore(
  component: ReactNode,
  params: AppStoreParams = {},
) {
  const { lazyReducers = {}, preloadedState = {} } = params;

  const store = createAppStore({
    lazyReducers,
    preloadedState: preloadedState as AppState,
  });

  return render(<Provider store={store}>{component}</Provider>);
}
