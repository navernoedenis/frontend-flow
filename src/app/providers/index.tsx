import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppStoreProvider } from './store';
import { ErrorBoundary } from './error-boundary';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <BrowserRouter>
    <AppStoreProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </AppStoreProvider>
  </BrowserRouter>
);
