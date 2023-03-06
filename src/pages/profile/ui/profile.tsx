import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProfile, profileReducer, ProfileCard } from 'entities/profile';

import { LazyReducers } from 'shared/lib/lazy-reducers';
import { useAppDispatch } from 'shared/hooks/use-store';

import type { AppReducersLazy } from 'app/providers/store';
import classes from './profile.module.scss';

const reducers: AppReducersLazy = {
  profile: profileReducer,
};

function ProfilePage() {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <LazyReducers reducers={reducers}>
      <div className={classes.container} data-testid="profile">
        <h1 className={classes.title}>{t('page-title')}</h1>
        <ProfileCard />
      </div>
    </LazyReducers>
  );
}

export default ProfilePage;
