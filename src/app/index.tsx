import { useEffect } from 'react';
import { AppRouter } from 'pages';
import './styles/global.scss';

import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';

import { authActions } from 'features/auth';

import { useAppDispatch } from 'shared/hooks';
import { classNames } from 'shared/lib/class-names';

import 'shared/config/i18n/i18n.config';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.init());
  }, [dispatch]);

  return (
    <div className={classNames('app')}>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="page-container">
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
