import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { Header } from 'widgets/header';
// import { Aside } from 'widgets/aside';

import { authActions } from 'features/auth';
import { useAppDispatch } from 'shared/hooks';
import { applyTheme, getSystemTheme } from 'shared/lib/theme';

import { AppRouter } from './providers/router';
import './styles/global.scss';

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.init());
  }, [dispatch]);

  useEffect(() => {
    const systemThemeListener = () => applyTheme(getSystemTheme());
    systemTheme.addEventListener('change', systemThemeListener);

    return () => {
      systemTheme.removeEventListener('change', systemThemeListener);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="app-container main">
        {/* <Aside /> */}
        <div className="app-page">
          <AppRouter />
        </div>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
