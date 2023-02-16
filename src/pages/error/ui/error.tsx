import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/components/app-button';
import classes from './error.module.scss';

function ErrorPage() {
  const { t } = useTranslation('error');

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <h1 className={classes.title}>{t('title')}</h1>
        <AppButton onClick={onReload} size="large" isSquare>
          {t('button')}
        </AppButton>
      </div>
    </div>
  );
}

export default ErrorPage;
