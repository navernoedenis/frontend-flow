import type { ReactNode } from 'react';
import { classNames } from 'shared/lib/class-names';
import classes from './app-typography.module.scss';

interface AppTypographyProps {
  align?: 'start' | 'center' | 'right';
  capitalize?: boolean;
  capitalizeFirstLetter?: boolean;
  children: ReactNode;
  className?: string;
  error?: boolean;
  lineClamp?: number;
  noShrink?: boolean;
  onClick?: VoidFunction;
  size?: 'small' | 'medium' | 'large' | 'huge';
  tag?: keyof JSX.IntrinsicElements;
  uppercase?: boolean;
  weight?: 'normal' | 'bold' | 'heavy';
}

const AppTypography = ({
  align = 'start',
  capitalize = false,
  capitalizeFirstLetter = false,
  children,
  className = '',
  error = false,
  lineClamp = 0,
  noShrink = false,
  onClick,
  size = 'medium',
  tag: Tag = 'p',
  uppercase = false,
  weight = 'normal',
  ...otherProps
}: AppTypographyProps) => {
  const appTypographyClasses = classNames(classes.container, {
    [classes.capitalize]: capitalize,
    [classes.capitalizeFirstLetter]: capitalizeFirstLetter,
    [classes.ellipsis]: lineClamp > 0,
    [classes.error]: error,
    [classes.noShrink]: noShrink,
    [classes.uppercase]: uppercase,
    [classes[`size-${size}`]]: true,
    [classes[`weight-${weight}`]]: true,
    [className]: !!className,
  });

  return (
    <Tag
      className={appTypographyClasses}
      data-testid="app-typography"
      onClick={onClick}
      style={{ WebkitLineClamp: lineClamp, textAlign: align }}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

export default AppTypography;
