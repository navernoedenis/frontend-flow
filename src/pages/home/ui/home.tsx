import { useTranslation } from 'react-i18next';
import './home.scss';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div className="home-page">
      <h1 className="home-page-title">{t('title')}</h1>
    </div>
  );
};

export default HomePage;
