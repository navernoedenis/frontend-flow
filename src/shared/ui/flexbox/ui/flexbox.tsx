import { forwardRef } from 'react';
import type { ElementType, CSSProperties, ReactNode } from 'react';
import { classNames } from '@/shared/lib/transforms/class-names';
import classes from './flexbox.module.scss';

interface FlexboxProps {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  children: ReactNode;
  className?: string;
  direction?: Direction;
  gap?: Gap;
  justifyContent?: JustifyContent;
  noShrink?: boolean;
  onClick?: VoidFunction;
  style?: CSSProperties;
  tag?: ElementType;
  wrap?: boolean;
}

type AlignContent = 'start' | 'center' | 'end' | 'stretch';
type AlignItems = 'start' | 'center' | 'end' | 'stretch';
type Direction = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type Gap = '8' | '16' | '20' | '30';
type JustifyContent = AlignItems | 'around' | 'evenly' | 'between';

const Flexbox = forwardRef((props: FlexboxProps, ref) => {
  const {
    alignContent,
    alignItems = 'center',
    children,
    className = '',
    direction,
    gap,
    justifyContent,
    noShrink = false,
    tag: Tag = 'div',
    wrap = false,
    ...otherProps
  } = props;

  const flexboxClasses = classNames(classes.container, {
    [classes.noshrink]: noShrink,
    [classes.wrap]: wrap,
    [classes[`align-items-${alignItems as string}`]]: !!alignItems,
    [classes[`align-content-${alignContent as string}`]]: !!alignContent,
    [classes[`direction-${direction as string}`]]: !!direction,
    [classes[`gap-${gap as string}`]]: !!gap,
    [classes[`justify-${justifyContent as string}`]]: !!justifyContent,
    [className]: !!className,
  });

  return (
    <Tag
      className={flexboxClasses}
      data-testid="flexbox"
      ref={ref}
      {...otherProps}
    >
      {children}
    </Tag>
  );
});

export default Flexbox;
