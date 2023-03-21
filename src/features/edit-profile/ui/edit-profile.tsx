import { useState, useEffect, useMemo, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';

import { ProfileCard } from 'entities/profile';
import type { Profile } from 'entities/profile';
import type { Country } from 'entities/country';

import { AppButton } from 'shared/components/app-button';
import { PageLoader } from 'shared/components/page-loader';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { deepCopy } from 'shared/lib/deep-copy';

import { updateProfile } from '../api/update-profile/update-profile';
import { ValidateProfileError } from '../model/constants';
import { validateProfile } from '../model/lib/validate-profile/validate-profile';

import { selectProfile } from '../model/selectors/select-profile/select-profile';
import type {
  ErrorsRecord,
  ProfileFormCountryField,
  ProfileFormDigitField,
  ProfileFormTextField,
} from '../model/types';

import classes from './edit-profile.module.scss';

const EditProfile = () => {
  const { t } = useTranslation('edit-profile');
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);

  const [isDisabled, onToggleDisabled] = useReducer((prev) => !prev, true);
  const [profileCopy, setProfileCopy] = useState<Profile | null>(null);
  const [errors, setErrors] = useState<ValidateProfileError[]>([]);

  useEffect(() => {
    if (profile?.data) {
      setProfileCopy(deepCopy(profile.data));
    }
  }, [profile]);

  const errorsRecord: ErrorsRecord = useMemo(
    () => ({
      [ValidateProfileError.AGE_EMPTY]: t('errors.age_empty'),
      [ValidateProfileError.AGE_RANGE_LESS]: t('errors.age_range_less'),
      [ValidateProfileError.AVATAR_EMPTY]: t('errors.avatar_empty'),
      [ValidateProfileError.AVATAR_INVALID_URL]: t('errors.avatar_invalid_url'),
      [ValidateProfileError.NAME_EMPTY]: t('errors.name_empty'),
      [ValidateProfileError.NAME_RANGE]: t('errors.name_range'),
      [ValidateProfileError.POSITION_EMPTY]: t('errors.position_empty'),
      [ValidateProfileError.POSITION_RANGE_LESS]: t(
        'errors.position_range_less',
      ),
    }),
    [t],
  );

  const onUpdateProfile = () => {
    if (!profileCopy) return;
    const profileErrors = validateProfile(profileCopy);

    if (!profileErrors.length) {
      dispatch(updateProfile(profileCopy)).then(() => {
        setErrors([]);
        onToggleDisabled();
      });
    } else {
      setErrors(profileErrors);
    }
  };

  const onCancelEditing = () => {
    if (profile?.data) {
      setProfileCopy(profile.data);
      setErrors([]);
      onToggleDisabled();
    }
  };

  const onChangeDigitField = (event: ChangeEvent<HTMLInputElement>) => {
    if (!profileCopy) return;
    const { name, value } = event.target as ProfileFormDigitField;
    const REGEX_NOT_NUMBERS = /\D/g;
    const number = +value.replace(REGEX_NOT_NUMBERS, '');
    setProfileCopy({ ...profileCopy, [name]: number });
  };

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    if (!profileCopy) return;
    const { name, value } = event.target as ProfileFormTextField;
    setProfileCopy({ ...profileCopy, [name]: value });
  };

  const onSelectCountryField = (country: Country) => {
    if (!profileCopy) return;

    const { name, value }: ProfileFormCountryField = {
      name: 'country',
      value: country,
    };

    setProfileCopy({ ...profileCopy, [name]: value });
  };

  if (!profile || profile.isLoading) {
    return <PageLoader />;
  }

  if (!profileCopy) {
    return null;
  }

  const hasErrors = !!profile.error || !!errors.length;

  return (
    <div data-testid="edit-profile">
      {hasErrors && (
        <div className={classes.errors}>
          {profile.error && (
            <span className={classes.error}>{profile.error}</span>
          )}
          {errors.map((error) => (
            <h4 className={classes.error} key={error}>
              {errorsRecord[error]}
            </h4>
          ))}
        </div>
      )}

      <ProfileCard
        isDisabled={isDisabled}
        profile={profileCopy}
        formEvents={{
          onChangeDigitField,
          onChangeTextField,
          onSelectCountryField,
        }}
      />

      <div className={classes.buttons}>
        {isDisabled ? (
          <AppButton onClick={onToggleDisabled}>{t('buttons.edit')}</AppButton>
        ) : (
          <>
            <AppButton onClick={onCancelEditing}>
              {t('buttons.cancel')}
            </AppButton>
            <AppButton onClick={onUpdateProfile}>{t('buttons.save')}</AppButton>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
