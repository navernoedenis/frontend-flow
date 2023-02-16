import { useTranslation } from 'react-i18next';
import classes from './about.module.scss';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div className={classes.container}>
      <h1>{t('title')}</h1>
    </div>
  );
}

export default AboutPage;
