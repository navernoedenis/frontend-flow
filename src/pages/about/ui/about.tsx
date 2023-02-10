import { useTranslation } from 'react-i18next';
import './about.scss';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div className="about-page">
      <h1 className="about-page-title">{t('title')}</h1>
    </div>
  );
};

export default AboutPage;
