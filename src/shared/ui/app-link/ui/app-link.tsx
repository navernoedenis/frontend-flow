import { Link, NavLink } from 'react-router-dom';

import type { FC } from 'react';
import type { LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/transforms/class-names';
import classes from './app-link.module.scss';

interface AppLinkProps extends LinkProps {
  isInversed?: boolean;
  isNavLink?: boolean;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    className = '',
    isInversed = false,
    isNavLink = false,
    ...otherProps
  } = props;

  const LinkComponent = isNavLink ? NavLink : Link;

  const linkClasses = classNames(classes.link, {
    [className]: Boolean(className),
    [classes.inversed]: isInversed,
  });

  return (
    <LinkComponent
      className={linkClasses}
      data-testid="app-link"
      {...otherProps}
    >
      {children}
    </LinkComponent>
  );
};

export default AppLink;
