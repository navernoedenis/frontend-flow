import { useTranslation } from 'react-i18next';
import { AppTypography } from '@/shared/ui/app-typography';

function HomePage() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.home',
  });

  return (
    <div data-testid="home-page">
      <AppTypography capitalizeFirstLetter size="large" tag="h1" weight="heavy">
        {t('title')}
      </AppTypography>
    </div>
  );
}

export default HomePage;
