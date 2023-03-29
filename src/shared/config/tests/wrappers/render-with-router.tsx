import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export function renderWithRouter(component: ReactNode) {
  return render(<MemoryRouter>{component}</MemoryRouter>);
}
