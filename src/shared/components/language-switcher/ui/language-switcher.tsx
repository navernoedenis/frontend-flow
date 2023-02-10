import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';

import classes from './language-switcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
  });

  return (
    <div className={buttonClasses} onClick={onToggleLanguage}>
      {i18n.language}
    </div>
  );
};

export default LanguageSwitcher;
