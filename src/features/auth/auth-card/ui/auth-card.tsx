import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import type { UserSignInForm } from '@/entities/user';
import {
  httpSignIn,
  selectUserError,
  selectUserLoading,
  userActions,
} from '@/entities/user';

import { AppButton } from '@/shared/ui/app-button';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';
import { TextField } from '@/shared/ui/text-field';

import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import classes from './auth-card.module.scss';

const INITIAL_FORM: UserSignInForm = {
  name: '',
  password: '',
};

function AuthCard() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.auth-card',
  });

  const dispatch = useAppDispatch();
  const error = useAppSelector(selectUserError);
  const isLoading = useAppSelector(selectUserLoading);

  const [form, setForm] = useState<UserSignInForm>(INITIAL_FORM);

  useEffect(
    () => () => {
      dispatch(userActions.resetError());
    },
    [dispatch],
  );

  const onChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onResetForm = () => {
    setForm(INITIAL_FORM);
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(httpSignIn(form));
  };

  const isFormValid = Object.values(form).every((value) => value.trim());
  const canFormBeReset = Object.values(form).some((value) => value.trim());

  return (
    <div data-testid="auth-card">
      <AppTypography
        capitalizeFirstLetter
        className={classes.title}
        size="large"
        tag="h2"
      >
        {t('title')}
      </AppTypography>

      {error.length > 0 && (
        <AppTypography
          className={classes.error}
          data-testid="auth-card.error"
          error
        >
          {error}
        </AppTypography>
      )}

      <form onSubmit={onSubmitForm}>
        <Flexbox alignItems="stretch" direction="column" gap="16">
          <TextField
            data-testid="auth-card.name-field"
            isFocused
            name="name"
            onChange={onChangeForm}
            placeholder={t('placeholder.name')}
            title={t('label.name')}
            value={form.name}
          />
          <TextField
            data-testid="auth-card.password-field"
            name="password"
            onChange={onChangeForm}
            placeholder={t('placeholder.password')}
            title={t('label.password')}
            type="password"
            value={form.password}
          />
        </Flexbox>

        <Flexbox className={classes.buttons} gap="8">
          <AppButton
            data-testid="auth-card.reset-button"
            disabled={!canFormBeReset || isLoading}
            onClick={onResetForm}
            type="button"
          >
            {t('buttons.reset')}
          </AppButton>

          <AppButton
            data-testid="auth-card.submit-button"
            disabled={!isFormValid}
            isLoading={isLoading}
            type="submit"
          >
            {t('buttons.enter')}
          </AppButton>
        </Flexbox>
      </form>
    </div>
  );
}

export default AuthCard;
