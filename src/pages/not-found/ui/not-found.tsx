import { useTranslation } from 'react-i18next';
import { AppTypography } from 'shared/ui/app-typography';

function NotFoundPage() {
  const { t } = useTranslation('page.not-found');

  return (
    <div data-testid="not-found">
      <AppTypography tag="h1" error>
        {t('title')}
      </AppTypography>
    </div>
  );
}

export default NotFoundPage;
