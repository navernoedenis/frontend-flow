import type { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/transforms/class-names';

import SpinnerIcon from './assets/spinner.svg';
import classes from './app-button.module.scss';

type ButtonSize = 'small' | 'medium' | 'large';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  size?: ButtonSize;
}

function AppButton(props: AppButtonProps) {
  const {
    onClick,
    children,
    className = '',
    isLoading = false,
    size = 'medium',
    ...otherProps
  } = props;

  const buttonClasses = classNames(classes.button, {
    [classes.loading]: isLoading,
    [classes[size]]: true,
    [className]: !!className,
  });

  return (
    <button
      className={buttonClasses}
      data-testid="app-button"
      onClick={isLoading ? undefined : onClick}
      {...otherProps}
    >
      {children}
      {isLoading && (
        <span className={classes.spinner} data-testid="app-button-spinner">
          <SpinnerIcon />
        </span>
      )}
    </button>
  );
}

export default AppButton;
