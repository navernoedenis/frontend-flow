import { useTranslation } from 'react-i18next';
import classes from './not-found.module.scss';

function NotFoundPage() {
  const { t } = useTranslation('not-found');

  return (
    <div className={classes.container}>
      <h1>{t('title')}</h1>
    </div>
  );
}

export default NotFoundPage;
