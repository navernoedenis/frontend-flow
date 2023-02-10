import { AppRouter } from 'pages';
import { useTheme } from './providers/theme';
import './styles/global.scss';

import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';

import { classNames } from 'shared/lib/class-names';

import 'shared/config/i18n/i18n.config';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { [theme]: true })}>
      <Header />

      <div className="main">
        <Sidebar />
        <div className="page-container">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
