import { createRoot } from 'react-dom/client';
import { AppProviders } from 'app/providers';
import App from './app';

const app = document.getElementById('app-root') as HTMLDivElement;
const root = createRoot(app);

root.render(
  <AppProviders>
    <App />
  </AppProviders>,
);
