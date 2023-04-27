import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppTypography } from 'shared/ui';
import { classNames } from 'shared/lib/transforms/class-names';

import classes from './language-switcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  const buttonContainer = classNames(classes.container, {
    [className]: !!className,
  });

  return (
    <AppButton
      className={buttonContainer}
      data-testid="language-switcher"
      onClick={onToggleLanguage}
    >
      <AppTypography tag="span" inversed uppercase weight="bold">
        {`${i18n.language}`.slice(0, 2)}
      </AppTypography>
    </AppButton>
  );
};

export default LanguageSwitcher;
