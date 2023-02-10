import { useTranslation } from 'react-i18next';
import './main.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div className="main-page">
      <h1 className="main-page-title">{t('title')}</h1>
    </div>
  );
};

export default MainPage;
