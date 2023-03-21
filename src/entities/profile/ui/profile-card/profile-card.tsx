import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectCountry } from 'entities/country';
import type { Country } from 'entities/country';

import { TextField } from 'shared/components/text-field';
import type { Profile } from '../../model/types';
import classes from './profile-card.module.scss';

interface ProfileCardProps {
  formEvents?: {
    onSelectCountryField: (country: Country) => void;
    onChangeDigitField: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTextField: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  isDisabled?: boolean;
  profile: Profile;
}

const ProfileCard = ({
  isDisabled = true,
  formEvents,
  profile,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile-card');

  return (
    <div className={classes.container} data-testid="profile-card">
      <div className={classes.avatarContainer}>
        <img alt="img" className={classes.avatar} src={profile.avatar} />
      </div>

      <form className={classes.form}>
        <div className={classes.fields}>
          <TextField
            disabled={isDisabled}
            name="avatar"
            onChange={formEvents?.onChangeTextField}
            title={t('avatar')}
            value={profile.avatar}
          />

          <SelectCountry
            currentCountry={profile.country}
            isDisabled={isDisabled}
            onSelectCountry={(value) => formEvents?.onSelectCountryField(value)}
            title={t('country')}
          />

          <TextField
            disabled={isDisabled}
            name="name"
            onChange={formEvents?.onChangeTextField}
            title={t('name')}
            value={profile.name}
          />

          <TextField
            disabled={isDisabled}
            maxLength={2}
            name="age"
            onChange={formEvents?.onChangeDigitField}
            title={t('age')}
            value={profile.age}
          />

          <TextField
            disabled={isDisabled}
            name="position"
            onChange={formEvents?.onChangeTextField}
            title={t('position')}
            value={profile.position}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileCard;
