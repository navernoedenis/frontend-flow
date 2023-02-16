import { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/class-names';
import classes from './app-button.module.scss';

type ButtonSize = 'small' | 'medium' | 'large';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSquare?: boolean;
  size?: ButtonSize;
}

function AppButton(props: AppButtonProps) {
  const {
    children,
    className = '',
    isSquare = false,
    size = 'medium',
    ...otherProps
  } = props;

  const buttonClasses = classNames(classes.button, {
    [className]: Boolean(className),
    [classes[size]]: true,
    [classes.square]: isSquare,
  });

  return (
    <button className={buttonClasses} data-testid="app-button" {...otherProps}>
      {children}
    </button>
  );
}

export default AppButton;
