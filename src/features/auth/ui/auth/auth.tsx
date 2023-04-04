import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';
import { TextField } from 'shared/ui/text-field';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { signIn } from '../../api/sign-in/sign-in';
import { authActions } from '../../model/slice';
import { selectAuthError, selectAuthLoading } from '../../model/selectors';
import type { AuthForm } from '../../model/types';

import classes from './auth.module.scss';

const INITIAL_FORM: AuthForm = {
  name: '',
  password: '',
};

function Auth() {
  const { t } = useTranslation('features.auth');

  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);
  const isLoading = useAppSelector(selectAuthLoading);

  const [form, setForm] = useState<AuthForm>(INITIAL_FORM);

  useEffect(
    () => () => {
      dispatch(authActions.resetError());
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
    dispatch(signIn(form));
  };

  const isFormValid = Object.values(form).every((value) => value.trim());
  const canFormBeReset = Object.values(form).some((value) => value.trim());

  return (
    <div data-testid="auth">
      <AppTypography className={classes.title} tag="h2" size="huge">
        {t('title')}
      </AppTypography>

      {error.length > 0 && (
        <AppTypography className={classes.error} data-testid="error" error>
          {error}
        </AppTypography>
      )}

      <form onSubmit={onSubmitForm}>
        <div className={classes.fields}>
          <TextField
            data-testid="name"
            isFocused
            name="name"
            onChange={onChangeForm}
            placeholder={t('placeholder.name')}
            title={t('label.name')}
            value={form.name}
          />
          <TextField
            data-testid="password"
            name="password"
            onChange={onChangeForm}
            placeholder={t('placeholder.password')}
            title={t('label.password')}
            type="password"
            value={form.password}
          />
        </div>

        <div className={classes.buttons}>
          <AppButton
            data-testid="reset"
            disabled={!canFormBeReset || isLoading}
            onClick={onResetForm}
            type="button"
          >
            {t('buttons.reset')}
          </AppButton>

          <AppButton
            data-testid="submit"
            disabled={!isFormValid}
            isLoading={isLoading}
            type="submit"
          >
            {t('buttons.enter')}
          </AppButton>
        </div>
      </form>
    </div>
  );
}

export default Auth;
