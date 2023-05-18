import { useTranslation } from 'react-i18next';
import { AppTypography } from 'shared/ui/app-typography';

function NotFoundPage() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.not-found',
  });

  return (
    <div data-testid="not-found-page">
      <AppTypography
        align="center"
        error
        size="huge"
        tag="h1"
        capitalizeFirstLetter
        weight="bold"
      >
        {`${t('title')} :(`}
      </AppTypography>
    </div>
  );
}

export default NotFoundPage;
