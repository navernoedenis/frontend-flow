import { useState, useEffect, useMemo, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';

import type { AppReducersLazy } from 'app/providers/store';
import type { Profile } from 'entities/profile';
import type { Country } from 'entities/country';

import { selectAuthMe } from 'features/auth';
import { ProfileEntity, ProfileSkeleton } from 'entities/profile';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { deepCopy } from 'shared/lib/deep-copy';
import { LazyReducers } from 'shared/lib/lazy-reducers';

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
  const { t } = useTranslation('features.edit-profile');
  const dispatch = useAppDispatch();

  const me = useAppSelector(selectAuthMe);

  const profile = useAppSelector(selectProfileData);
  const error = useAppSelector(selectProfileError);
  const isLoading = useAppSelector(selectProfileLoading);

  const [isDisabled, onToggleDisabled] = useReducer((prev) => !prev, true);
  const [profileCopy, setProfileCopy] = useState<Profile | null>(null);
  const [errors, setErrors] = useState<ValidateProfileError[]>([]);

  useEffect(() => {
    if (profile) {
      setProfileCopy(deepCopy(profile));
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
    if (profile) {
      setProfileCopy(profile);
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

  const isMyProfile = me?.id === profile?.id;

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="edit-profile">
        {isLoading && <ProfileSkeleton />}

        <div className={classes.errors}>
          {error && (
            <AppTypography className={classes.error} error>
              {error}
            </AppTypography>
          )}
          {errors.map((error) => (
            <AppTypography className={classes.error} key={error} error>
              {errorsRecord[error]}
            </AppTypography>
          ))}
        </div>

        {!isLoading && profileCopy && (
          <ProfileEntity
            isDisabled={isDisabled}
            profile={profileCopy}
            formEvents={{
              onChangeDigitField,
              onChangeTextField,
              onSelectCountryField,
            }}
          />
        )}

        {!isLoading && isMyProfile && (
          <div className={classes.buttons}>
            {isDisabled ? (
              <AppButton onClick={onToggleDisabled}>
                {t('buttons.edit')}
              </AppButton>
            ) : (
              <>
                <AppButton onClick={onCancelEditing}>
                  {t('buttons.cancel')}
                </AppButton>

                <AppButton onClick={onUpdateProfile}>
                  {t('buttons.save')}
                </AppButton>
              </>
            )}
          </div>
        )}
      </div>
    </LazyReducers>
  );
}

export default EditProfile;
