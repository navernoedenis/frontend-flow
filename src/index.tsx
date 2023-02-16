import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/error-boundary';
import App from './app';

const app = document.getElementById('app-root') as HTMLDivElement;
const root = createRoot(app);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
);
