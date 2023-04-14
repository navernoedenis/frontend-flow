import { useTranslation } from 'react-i18next';
import { AppTypography } from 'shared/ui/app-typography';

function HomePage() {
  const { t } = useTranslation('page.home');

  return (
    <div data-testid="home-page">
      <AppTypography tag="h1" size="huge" weight="heavy">
        {t('title')}
      </AppTypography>
    </div>
  );
}

export default HomePage;
