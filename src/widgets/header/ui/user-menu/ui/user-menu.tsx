import { useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { userActions, selectUserAuth, isAdminRole } from '@/entities/user';

import { Dropdown, DropdownItem } from '@/shared/ui/dropdown';
import { LazyImage } from '@/shared/ui/lazy-image';
import { routes } from '@/shared/constants/routes';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import classes from './user-menu.module.scss';

const UserMenu = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'widgets.header',
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const me = useAppSelector(selectUserAuth);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isAdmin = me && isAdminRole(me.roles);

  const handleToggleMenu = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    setMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!me) {
    return null;
  }

  return (
    <>
      <button
        className={classes.button}
        data-testid="user-menu"
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
        {isAdmin && (
          <DropdownItem
            data-testid="user-menu.admin"
            onClick={() => navigate(routes.admin())}
            title={t('menu.admin')}
          />
        )}
        <DropdownItem
          data-testid="user-menu.profile"
          onClick={() => navigate(routes.profile(me.id))}
          title={t('menu.profile')}
        />
        <DropdownItem
          data-testid="user-menu.logout"
          onClick={handleLogout}
          title={t('menu.logout')}
        />
      </Dropdown>
    </>
  );
};

export default UserMenu;
