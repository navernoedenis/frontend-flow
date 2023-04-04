import type { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/class-names';
import classes from './app-button.module.scss';

import SpinnerIcon from './assets/spinner.svg';

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
    'app-transition': true,
    [classes.loading]: isLoading,
    [classes[size]]: true,
    [className]: Boolean(className),
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
        <span className={classes.spinner}>
          <SpinnerIcon />
        </span>
      )}
    </button>
  );
}

export default AppButton;
