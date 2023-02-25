import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/class-names';
import classes from './language-switcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
  });

  return (
    <div
      aria-hidden="true"
      className={buttonClasses}
      data-testid="language-switcher"
      onClick={onToggleLanguage}
    >
      {`${i18n.language}`.slice(0, 2)}
    </div>
  );
};

export default LanguageSwitcher;
