import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, StoreProvider } from 'app/providers';

import App from './app';
import './shared/config/i18n/i18n.config';

const app = document.getElementById('app-root') as HTMLDivElement;
const root = createRoot(app);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       // eslint-disable-next-line no-console
//       .then(() => console.log('ServiceWorker registered'))
//       // eslint-disable-next-line no-console
//       .catch((error) => console.log('ServiceWorker failed: ', error));
//   });
// }

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
