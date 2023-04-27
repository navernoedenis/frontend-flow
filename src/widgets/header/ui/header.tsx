import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthModal, selectAuthMe } from 'features/auth';

import { AppRoutePath } from 'shared/constants/routes';
import { useAppSelector } from 'shared/hooks';
import {
  AppButton,
  AppLink,
  Flexbox,
  LanguageSwitcher,
  ThemeSwitcher,
} from 'shared/ui';

import { UserMenu } from './user-menu';
import classes from './header.module.scss';

function Header() {
  const { t } = useTranslation('widgets.header');
  const me = useAppSelector(selectAuthMe);

  const [isModalOpen, setModalOpen] = useState(false);

  const onShowModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (me) {
      onCloseModal();
    }
  }, [me, onCloseModal]);

  return (
    <header className={classes.header} data-testid="header">
      <Flexbox
        className={`app-container ${classes.container}`}
        justifyContent="between"
      >
        <Flexbox gap="12">
          <AppLink to={AppRoutePath.home} isNavLink>
            {t('navigation.home')}
          </AppLink>

          <AppLink to={AppRoutePath.articles} isNavLink>
            {t('navigation.articles')}
          </AppLink>
        </Flexbox>

        <Flexbox className={classes.controls} gap="8">
          <ThemeSwitcher />
          <UserMenu />
          {!me && (
            <AppButton onClick={onShowModal}>{t('buttons.login')}</AppButton>
          )}
          <LanguageSwitcher />
        </Flexbox>
        <AuthModal isOpen={isModalOpen} onClose={onShowModal} />
      </Flexbox>
    </header>
  );
}

export default Header;
