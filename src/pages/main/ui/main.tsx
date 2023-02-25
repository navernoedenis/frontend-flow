import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div className="main-page" data-testid="main">
      <h1 className="main-page-title">{t('title')}</h1>
    </div>
  );
}

export default MainPage;
