import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';

import type { AppReducersLazy } from '@/app/providers/store';
import type { Profile } from '@/entities/profile';
import type { Country } from '@/entities/country';

import { selectAuthMe } from '@/features/auth';
import { ProfileForm, ProfileFormSkeleton } from '@/entities/profile';

import { AppTypography } from '@/shared/ui/app-typography';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { deepCopy } from '@/shared/lib/deep-copy';
import { LazyReducers } from '@/shared/lib/components';

import { EditButtons } from './edit-buttons';

import { updateProfile } from '../api/update-profile/update-profile';
import { profileReducer } from '../model/slice';
import { validateProfile } from '../model/lib/validate-profile/validate-profile';
import { ValidateProfileError } from '../model/constants';
import {
  selectProfileData,
  selectProfileError,
  selectProfileLoading,
} from '../model/selectors';

import type {
  ErrorsRecord,
  ProfileFormCountryField,
  ProfileFormDigitField,
  ProfileFormTextField,
} from '../model/types';

import classes from './edit-profile.module.scss';

const reducers: AppReducersLazy = {
  profile: profileReducer,
};

function EditProfile() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.edit-profile',
  });

  const dispatch = useAppDispatch();
  const me = useAppSelector(selectAuthMe);

  const profile = useAppSelector(selectProfileData);
  const error = useAppSelector(selectProfileError);
  const isLoading = useAppSelector(selectProfileLoading);

  const [isDisabled, setDisabled] = useState(true);
  const [profileForm, setProfileForm] = useState<Profile | null>(null);
  const [errors, setErrors] = useState<ValidateProfileError[]>([]);

  useEffect(() => {
    if (profile) {
      setProfileForm(deepCopy(profile));
    }
  }, [profile]);

  const errorsRecord: ErrorsRecord = useMemo(
    () => ({
      [ValidateProfileError.AGE_EMPTY]: t('errors.age_empty'),
      [ValidateProfileError.AGE_RANGE_LESS]: t('errors.age_range_less'),
      [ValidateProfileError.AVATAR_EMPTY]: t('errors.avatar_empty'),
      [ValidateProfileError.AVATAR_INVALID_URL]: t('errors.avatar_invalid_url'),
      [ValidateProfileError.POSITION_EMPTY]: t('errors.position_empty'),
      [ValidateProfileError.POSITION_RANGE_LESS]: t(
        'errors.position_range_less',
      ),
    }),
    [t],
  );

  const onToggleDisabled = useCallback(() => {
    setDisabled((prev) => !prev);
  }, []);

  const onUpdateProfile = () => {
    if (!profileForm) return;
    const profileErrors = validateProfile(profileForm);

    if (!profileErrors.length) {
      dispatch(updateProfile(profileForm)).then(() => {
        setErrors([]);
        onToggleDisabled();
      });
    } else {
      setErrors(profileErrors);
    }
  };

  const onCancelEditing = useCallback(() => {
    if (profile) {
      setProfileForm(profile);
      setErrors([]);
      onToggleDisabled();
    }
  }, [onToggleDisabled, profile]);

  const onChangeDigitField = (event: ChangeEvent<HTMLInputElement>) => {
    if (!profileForm) return;
    const { name, value } = event.target as ProfileFormDigitField;
    const REGEX_NOT_NUMBERS = /\D/g;
    const number = +value.replace(REGEX_NOT_NUMBERS, '');
    setProfileForm({ ...profileForm, [name]: number });
  };

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    if (!profileForm) return;
    const { name, value } = event.target as ProfileFormTextField;
    setProfileForm({ ...profileForm, [name]: value });
  };

  const onSelectCountryField = (country: Country) => {
    if (!profileForm) return;

    const { name, value }: ProfileFormCountryField = {
      name: 'country',
      value: country,
    };

    setProfileForm({ ...profileForm, [name]: value });
  };

  if (isLoading || (!profile && !error)) {
    return (
      <LazyReducers reducers={reducers}>
        <ProfileFormSkeleton />
      </LazyReducers>
    );
  }

  const isMyProfile = me?.id === profile?.id;

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="edit-profile">
        <div className={classes.errors}>
          {error && (
            <AppTypography
              className={classes.error}
              data-testid="edit-profile-error"
              error
            >
              {error}
            </AppTypography>
          )}

          {errors.map((error) => (
            <AppTypography
              className={classes.error}
              data-testid="edit-profile-error"
              error
              key={error}
            >
              {errorsRecord[error]}
            </AppTypography>
          ))}
        </div>

        {profileForm && (
          <ProfileForm
            isDisabled={isDisabled}
            profile={profileForm}
            formEvents={{
              onChangeDigitField,
              onChangeTextField,
              onSelectCountryField,
            }}
          />
        )}

        {isMyProfile && (
          <EditButtons
            isFormDisabled={isDisabled}
            onCancelEditing={onCancelEditing}
            onToggleDisabled={onToggleDisabled}
            onUpdateProfile={onUpdateProfile}
          />
        )}
      </div>
    </LazyReducers>
  );
}

export default EditProfile;
