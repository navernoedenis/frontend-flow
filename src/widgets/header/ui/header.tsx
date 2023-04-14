import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthModal, authActions, selectAuthMe } from 'features/auth';

import { AppRoutePath } from 'shared/constants/routes';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { AppButton } from 'shared/ui/app-button';
import { AppLink } from 'shared/ui/app-link';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LanguageSwitcher } from 'shared/ui/language-switcher';

import classes from './header.module.scss';

function Header() {
  const { t } = useTranslation('widgets.header');
  const dispatch = useAppDispatch();
  const me = useAppSelector(selectAuthMe);

  const [isModalOpen, setModalOpen] = useState(false);

  const onModalShow = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (me) {
      onModalClose();
    }
  }, [me, onModalClose]);

  return (
    <header className={classes.header} data-testid="header">
      <div className={`app-container ${classes.container}`}>
        <div className={classes.links}>
          <AppLink to={AppRoutePath.home} isNavLink>
            {t('navigation.home')}
          </AppLink>

          <AppLink to={AppRoutePath.articles} isNavLink>
            {t('navigation.articles')}
          </AppLink>

          {me && (
            <AppLink to={`${AppRoutePath.profiles}/${me.profileId}`} isNavLink>
              {t('navigation.profile')}
            </AppLink>
          )}
        </div>

        <div className={classes.controls}>
          <ThemeSwitcher />
          <LanguageSwitcher />

          {me ? (
            <AppButton onClick={handleLogout}>{t('buttons.logout')}</AppButton>
          ) : (
            <AppButton onClick={onModalShow}>{t('buttons.login')}</AppButton>
          )}
        </div>

        <AuthModal isOpen={isModalOpen} onClose={onModalClose} />
      </div>
    </header>
  );
}

export default Header;
