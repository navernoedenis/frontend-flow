import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { EditProfile, getProfile } from 'features/edit-profile';
import { selectNetworkStatusOnline } from 'widgets/network-status';

import { useAppDispatch, useAppSelector, useEffectOnce } from 'shared/hooks';
import { AppTypography } from 'shared/ui';

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
  const isOnline = useAppSelector(selectNetworkStatusOnline);

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
      <EditProfile showEditableButtons={isOnline} />
    </div>
  );
}

export default ProfilePage;
