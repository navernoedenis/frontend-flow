import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store';
import { ErrorBoundary } from './error-boundary';

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>{children}</ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
