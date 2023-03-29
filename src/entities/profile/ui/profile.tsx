import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectCountry } from 'entities/country';
import type { Country } from 'entities/country';

import { LazyImage } from 'shared/ui/lazy-image';
import { TextField } from 'shared/ui/text-field';

import classes from './profile.module.scss';
import type { Profile } from '../model/types';

interface ProfileEntityProps {
  formEvents?: {
    onSelectCountryField: (country: Country) => void;
    onChangeDigitField: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTextField: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  isDisabled?: boolean;
  profile: Profile;
}

const ProfileEntity = ({
  isDisabled = true,
  formEvents,
  profile,
}: ProfileEntityProps) => {
  const { t } = useTranslation('profile');

  return (
    <div className={classes.container} data-testid="profile-entity">
      <LazyImage className={classes.avatar} src={profile.avatar} />

      <form className={classes.form}>
        <TextField
          className={classes.field}
          disabled={isDisabled}
          name="avatar"
          onChange={formEvents?.onChangeTextField}
          title={t('avatar')}
          value={profile.avatar}
        />

        <SelectCountry
          className={classes.field}
          currentCountry={profile.country}
          isDisabled={isDisabled}
          onSelectCountry={(value) => formEvents?.onSelectCountryField(value)}
          title={t('country')}
        />

        <TextField
          className={classes.field}
          disabled={isDisabled}
          name="name"
          onChange={formEvents?.onChangeTextField}
          title={t('name')}
          value={profile.name}
        />

        <TextField
          className={classes.field}
          disabled={isDisabled}
          maxLength={2}
          name="age"
          onChange={formEvents?.onChangeDigitField}
          title={t('age')}
          value={profile.age}
        />

        <TextField
          className={classes.field}
          disabled={isDisabled}
          name="position"
          onChange={formEvents?.onChangeTextField}
          title={t('position')}
          value={profile.position}
        />
      </form>
    </div>
  );
};

export default ProfileEntity;
