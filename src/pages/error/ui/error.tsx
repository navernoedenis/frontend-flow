import { useTranslation } from 'react-i18next';
import { AppButton, AppTypography } from 'shared/ui';

import classes from './error.module.scss';

function ErrorPage() {
  const { t } = useTranslation('page.error');

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classes.page} data-testid="error-page">
      <div className={classes.container}>
        <AppTypography className={classes.title} tag="h2">
          {t('title')}
        </AppTypography>

        <AppButton onClick={onReload} size="large">
          {t('button')}
        </AppButton>
      </div>
    </div>
  );
}

export default ErrorPage;
