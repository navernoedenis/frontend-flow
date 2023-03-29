import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthModal, authActions, selectAuth } from 'features/auth';

import { AppRoutePath } from 'shared/constants/routes';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { AppButton } from 'shared/ui/app-button';
import { AppLink } from 'shared/ui/app-link';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LanguageSwitcher } from 'shared/ui/language-switcher';

import classes from './header.module.scss';

function Header() {
  const { t } = useTranslation('header');

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

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
    if (auth.me) {
      onModalClose();
    }
  }, [auth.me, onModalClose]);

  return (
    <header className={classes.header} data-testid="header">
      <div className={`app-container ${classes.container}`}>
        <div className={classes.links}>
          <AppLink to={AppRoutePath.home} isNavLink>
            {t('navigation.home')}
          </AppLink>

          <AppLink to={AppRoutePath.counter} isNavLink>
            {t('navigation.counter')}
          </AppLink>

          {auth.me && (
            <>
              <AppLink to={AppRoutePath.articles} isNavLink>
                {t('navigation.articles')}
              </AppLink>

              <AppLink to={AppRoutePath.profile} isNavLink>
                {t('navigation.profile')}
              </AppLink>
            </>
          )}
        </div>

        <div className={classes.controls}>
          <ThemeSwitcher />
          <LanguageSwitcher />

          {auth.me ? (
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
