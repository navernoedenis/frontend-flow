import type { CSSProperties } from 'react';
import { classNames } from 'shared/lib/class-names';
import classes from './app-skeleton.module.scss';

interface AppSkeletonProps {
  className?: string;
  style?: CSSProperties;
}

const AppSkeleton = ({ className = '', style = {} }: AppSkeletonProps) => {
  const appSkeletonClasses = classNames(classes.container, {
    [className]: !!className,
  });

  return (
    <div
      className={appSkeletonClasses}
      data-testid="app-skeleton"
      style={style}
    />
  );
};

export default AppSkeleton;
