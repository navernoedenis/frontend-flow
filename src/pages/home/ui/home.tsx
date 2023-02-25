import { useTranslation } from 'react-i18next';
import classes from './home.module.scss';

function HomePage() {
  const { t } = useTranslation('home');

  return (
    <div className={classes.container} data-testid="home">
      <h1>{t('title')}</h1>
    </div>
  );
}

export default HomePage;
