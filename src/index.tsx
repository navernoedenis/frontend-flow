import { createRoot } from 'react-dom/client';
import { AppProviders } from 'app/providers';
import App from './app';

import './shared/config/i18n/i18n.config';

const app = document.getElementById('app-root') as HTMLDivElement;
const root = createRoot(app);

root.render(
  <AppProviders>
    <App />
  </AppProviders>,
);
