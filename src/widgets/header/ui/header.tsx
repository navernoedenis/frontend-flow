import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/components/app-link';
import { AppRoutePath } from 'shared/config/router/router.config';
import classes from './header.module.scss';

function Header() {
  const { t } = useTranslation();

  return (
    <div className={classes.header} data-testid="header">
      <div className={classes.links}>
        <AppLink to={AppRoutePath.home} isNavLink>
          {t('Home')}
        </AppLink>

        <AppLink to={AppRoutePath.about} isNavLink>
          {t('About')}
        </AppLink>

        <AppLink to={AppRoutePath.main} isNavLink>
          {t('Main')}
        </AppLink>
      </div>
    </div>
  );
}
export default Header;
