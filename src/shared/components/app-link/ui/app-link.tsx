import { type FC } from 'react';
import { Link, NavLink, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names';

import './app-link.scss';

interface AppLinkProps extends LinkProps {
  isInversed?: boolean;
  isNavLink?: boolean;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className = '',
    children,
    isNavLink = false,
    isInversed = false,
    ...otherProps
  } = props;

  const LinkComponent = isNavLink ? NavLink : Link;

  const linkClasses = classNames('app-link', {
    [className]: Boolean(className),
    'app-link-inversed': isInversed,
  });

  return (
    <LinkComponent to={to} className={linkClasses} {...otherProps}>
      {children}
    </LinkComponent>
  );
};

export default AppLink;
