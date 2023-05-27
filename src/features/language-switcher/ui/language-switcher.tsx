import { useCallback } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/ui/app-button';
import { AppTypography } from '@/shared/ui/app-typography';
import { classNames } from '@/shared/lib/transforms/class-names';

import classes from './language-switcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const onToggleLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }, [i18n]);

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
