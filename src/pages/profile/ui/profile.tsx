import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store';
import { EditProfile, getProfile, profileReducer } from 'features/edit-profile';

import { LazyReducers } from 'shared/lib/lazy-reducers';
import { useAppDispatch } from 'shared/hooks';

import classes from './profile.module.scss';

const reducers: AppReducersLazy = {
  profile: profileReducer,
};

const translations: string[] = [
  'profile-page',
  'edit-profile',
  'profile',
  'select-country',
];

const ProfilePage = () => {
  const { t } = useTranslation(translations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__IS_STORYBOOK__) return;
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="profile-page">
        <h1 className={classes.title}>{t('title')}</h1>
        <EditProfile />
      </div>
    </LazyReducers>
  );
};

export default ProfilePage;
