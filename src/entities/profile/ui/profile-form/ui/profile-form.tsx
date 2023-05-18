import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectCountry } from 'entities/country';
import type { Country } from 'entities/country';

import { Flexbox } from 'shared/ui/flexbox';
import { LazyImage } from 'shared/ui/lazy-image';
import { TextField } from 'shared/ui/text-field';

import classes from './profile-form.module.scss';
import type { Profile } from '../../../model/types';

interface ProfileFormProps {
  formEvents?: {
    onSelectCountryField: (country: Country) => void;
    onChangeDigitField: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTextField: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  isDisabled?: boolean;
  profile: Profile;
}

function ProfileForm({
  isDisabled = true,
  formEvents,
  profile,
}: ProfileFormProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'entities.profile',
  });

  return (
    <Flexbox alignItems="start" data-testid="profile-entity">
      <LazyImage className={classes.avatar} src={profile.avatar} />

      <Flexbox gap="20" tag="form" wrap>
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
      </Flexbox>
    </Flexbox>
  );
}

export default ProfileForm;
