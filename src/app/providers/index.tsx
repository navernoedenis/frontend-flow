import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store';
import { ErrorBoundary } from './error-boundary';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
