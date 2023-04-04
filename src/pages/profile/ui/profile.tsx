import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { EditProfile, getProfile } from 'features/edit-profile';

import { useAppDispatch, useEffectOnce } from 'shared/hooks';
import { AppTypography } from 'shared/ui/app-typography';

import classes from './profile.module.scss';

const translations: string[] = [
  'page.profile',
  'features.edit-profile',
  'entities.profile',
  'entities.select-country',
];

function ProfilePage() {
  const { id = '' } = useParams<{ id: string }>();
  const { t } = useTranslation(translations);
  const dispatch = useAppDispatch();

  useEffectOnce(() => {
    dispatch(getProfile(id));
  });

  return (
    <div data-testid="profile-page">
      <AppTypography
        className={classes.title}
        size="huge"
        tag="h1"
        weight="heavy"
      >
        {t('title')}
      </AppTypography>
      <EditProfile />
    </div>
  );
}

export default ProfilePage;
