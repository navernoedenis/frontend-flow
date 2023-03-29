import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home-page');

  return (
    <div data-testid="home">
      <h1>{t('title')}</h1>
    </div>
  );
};

export default HomePage;
