import type { CSSProperties, ReactNode } from 'react';
import { classNames } from 'shared/lib/transforms/class-names';
import classes from './flexbox.module.scss';

interface FlexboxProps {
  alignItems?: AlignItems;
  children: ReactNode;
  className?: string;
  direction?: Direction;
  gap?: Gap;
  justifyContent?: JustifyContent;
  noShrink?: boolean;
  style?: CSSProperties;
  tag?: keyof JSX.IntrinsicElements;
  wrap?: boolean;
}

type AlignItems = 'start' | 'center' | 'end' | 'stretch';
type Direction = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type Gap = '8' | '12' | '16' | '20';
type JustifyContent = AlignItems | 'around' | 'evenly' | 'between';

function Flexbox(props: FlexboxProps) {
  const {
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
    [classes[`align-${alignItems as string}`]]: !!alignItems,
    [classes[`direction-${direction as string}`]]: !!direction,
    [classes[`gap-${gap as string}`]]: !!gap,
    [classes[`justify-${justifyContent as string}`]]: !!justifyContent,
    [className]: !!className,
  });

  return (
    <Tag className={flexboxClasses} data-testid="flexbox" {...otherProps}>
      {children}
    </Tag>
  );
}

export default Flexbox;
