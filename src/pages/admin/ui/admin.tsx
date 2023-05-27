import { useTranslation } from 'react-i18next';
import { AppTypography } from '@/shared/ui/app-typography';

function AdminPage() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.admin',
  });

  return (
    <div data-testid="admin-page">
      <AppTypography tag="h1" size="large" weight="heavy" capitalizeFirstLetter>
        {t('title')}
      </AppTypography>
    </div>
  );
}

export default AdminPage;
