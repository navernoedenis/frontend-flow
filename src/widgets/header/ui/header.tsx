import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthModal, authActions, selectAuthMe } from 'features/auth';

import { AppLink } from 'shared/components/app-link';
import { AppButton } from 'shared/components/app-button';
import { AppRoutePath } from 'shared/config/router/router.config';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import classes from './header.module.scss';

function Header() {
  const { t } = useTranslation('header');

  const dispatch = useAppDispatch();
  const me = useAppSelector(selectAuthMe);

  const [isOpenModal, setOpenModal] = useState(false);

  const onShowModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (me) {
      onCloseModal();
    }
  }, [me, onCloseModal]);

  return (
    <div className={classes.header} data-testid="header">
      <div className={classes.links}>
        <AppLink to={AppRoutePath.home} isNavLink>
          {t('navigation.home')}
        </AppLink>

        <AppLink to={AppRoutePath.about} isNavLink>
          {t('navigation.about')}
        </AppLink>

        <AppLink to={AppRoutePath.main} isNavLink>
          {t('navigation.main')}
        </AppLink>
      </div>

      <div className={classes.buttons}>
        {me ? (
          <AppButton onClick={handleLogout}>{t('buttons.logout')}</AppButton>
        ) : (
          <AppButton onClick={onShowModal}>{t('buttons.login')}</AppButton>
        )}
      </div>

      <AuthModal isOpen={isOpenModal} onClose={onCloseModal} />
    </div>
  );
}
export default Header;
