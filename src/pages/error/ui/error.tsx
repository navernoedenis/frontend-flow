import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/app-button';
import classes from './error.module.scss';

const ErrorPage = () => {
  const { t } = useTranslation('error-page');

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classes.page} data-testid="error-page">
      <div className={classes.container}>
        <h1 className={classes.title}>{t('title')}</h1>
        <AppButton onClick={onReload} size="large">
          {t('button')}
        </AppButton>
      </div>
    </div>
  );
};

export default ErrorPage;
