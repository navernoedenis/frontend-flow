import classes from './header.module.scss';
import { AppLink } from 'shared/components/app-link';

const Header = () => (
  <div className={classes.header}>
    <div className={classes.links}>
      <AppLink to="/" isInversed isNavLink>
        Home
      </AppLink>
      <AppLink to="/about" isInversed isNavLink>
        About
      </AppLink>
      <AppLink to="/main" isInversed isNavLink>
        Main
      </AppLink>
    </div>
  </div>
);

export default Header;
