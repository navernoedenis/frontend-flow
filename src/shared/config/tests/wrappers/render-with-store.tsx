import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import type { ReactNode } from 'react';

import type { AppState, AppPartialState } from 'app/providers/store/types';
import { createStore } from 'app/providers/store';

export function renderWithStore(
  component: ReactNode,
  preloadedState?: AppPartialState,
) {
  const store = createStore(preloadedState as AppState);

  return render(<Provider store={store}>{component}</Provider>);
}
