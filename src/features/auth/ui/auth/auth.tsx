import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/app-button';
import { TextField } from 'shared/ui/text-field';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import classes from './auth.module.scss';

import { signIn } from '../../api/sign-in/sign-in';
import { authActions } from '../../model/slice';
import { selectAuth } from '../../model/selectors/select-auth/select-auth';
import type { AuthForm } from '../../model/types';

const INITIAL_FORM: AuthForm = {
  name: '',
  password: '',
};

function Auth() {
  const { t } = useTranslation('auth');

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

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
      <h2 className={classes.title}>{t('title')}</h2>
      {auth.error.length > 0 && (
        <h5 className={classes.error} data-testid="error">
          {auth.error}
        </h5>
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
            disabled={!canFormBeReset || auth.isLoading}
            onClick={onResetForm}
            type="button"
          >
            {t('buttons.reset')}
          </AppButton>

          <AppButton
            data-testid="submit"
            disabled={!isFormValid}
            isLoading={auth.isLoading}
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
