import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent, FormEvent } from 'react';

import { AppButton } from 'shared/components/app-button';
import { PageLoader } from 'shared/components/page-loader';
import { TextField } from 'shared/components/text-field';

import { useAppSelector } from 'shared/hooks/use-store';

import { selectProfile } from '../../model/selectors/select-profile/select-profile';
import type { Profile } from '../../model/types';

import classes from './profile-card.module.scss';

const ProfileCard = () => {
  const { t } = useTranslation('profile', { keyPrefix: 'profile-card' });
  const profile = useAppSelector(selectProfile);

  const [isEditable, setEditable] = useState(false);
  const [form, setForm] = useState<Profile | null>(null);

  useEffect(() => {
    if (!form && profile?.data) {
      setForm(profile.data);
    }
  }, [form, profile]);

  const onStartEdit = useCallback(() => {
    setEditable(true);
  }, []);

  const onStopEdit = useCallback(() => {
    setEditable(false);
  }, []);

  if (!profile) {
    return null;
  }

  if (profile.isLoading || !profile.data) {
    return <PageLoader />;
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form:', form);
  };

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevForm) => {
      if (!prevForm) return null;
      return { ...prevForm, [name]: value };
    });
  };

  return (
    <div className={classes.container} data-testid="profile-card">
      <div className={classes.avatarContainer}>
        <img className={classes.avatar} src={profile.data.avatar} alt="img" />
      </div>

      {form && (
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <div className={classes.fields}>
            <TextField
              disabled={!isEditable}
              name="country"
              onChange={handleFormChange}
              title={t('country')}
              value={form.country}
            />

            <TextField
              disabled={!isEditable}
              name="position"
              onChange={handleFormChange}
              title={t('position')}
              value={form.position}
            />

            <TextField
              disabled={!isEditable}
              name="name"
              onChange={handleFormChange}
              title={t('name')}
              value={form.name}
            />

            <TextField
              disabled={!isEditable}
              name="age"
              onChange={handleFormChange}
              title={t('age')}
              type="number"
              value={form.age}
            />
          </div>

          <div className={classes.buttons}>
            {isEditable ? (
              <>
                <AppButton onClick={onStopEdit} type="button">
                  {t('buttons.cancel')}
                </AppButton>
                <AppButton type="submit">{t('buttons.save')}</AppButton>
              </>
            ) : (
              <AppButton onClick={onStartEdit} type="button">
                {t('buttons.edit')}
              </AppButton>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileCard;
