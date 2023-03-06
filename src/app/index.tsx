import { useEffect } from 'react';
import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';

import { authActions } from 'features/auth';
import { useAppDispatch } from 'shared/hooks';
import { applyTheme, getSystemTheme } from 'shared/lib/theme';

import { AppRouter } from './router';
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
      <main className="main">
        <Sidebar />
        <div className="page-container">
          <AppRouter />
        </div>
      </main>
    </div>
  );
}

export default App;
