import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';

import classes from './error.module.scss';

function ErrorPage() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.error',
  });

  const onReload = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className={classes.page} data-testid="error-page">
      <div className={classes.container}>
        <AppTypography className={classes.title} tag="h2" size="huge">
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
