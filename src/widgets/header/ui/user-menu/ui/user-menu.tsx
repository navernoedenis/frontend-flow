import { useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { authActions, selectAuthMe } from 'features/auth';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { Dropdown, DropdownItem, LazyImage } from 'shared/ui';
import { AppRoutePath } from 'shared/constants/routes';

import classes from './user-menu.module.scss';

const UserMenu = () => {
  const { t } = useTranslation('widgets.header');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const me = useAppSelector(selectAuthMe);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    setMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  if (!me) {
    return null;
  }

  return (
    <>
      <button
        className={classes.button}
        onClick={handleToggleMenu}
        ref={buttonRef}
      >
        <LazyImage className={classes.avatar} src={me.profile.avatar} />
      </button>

      <Dropdown
        className={classes.dropdown}
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        parentRef={buttonRef}
      >
        <DropdownItem
          onClick={() => navigate(`${AppRoutePath.profiles}/${me.id}`)}
          title={t('menu.profile')}
        />
        <DropdownItem onClick={handleLogout} title={t('menu.logout')} />
      </Dropdown>
    </>
  );
};

export default UserMenu;
