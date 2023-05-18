import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';
import { Flexbox } from 'shared/ui/flexbox';
import { TextField } from 'shared/ui/text-field';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import type { AuthForm } from '../../../model/types';
import { signIn } from '../../../api/sign-in/sign-in';
import { authActions } from '../../../model/slice';
import { selectAuthError, selectAuthLoading } from '../../../model/selectors';

import classes from './auth.module.scss';

const INITIAL_FORM: AuthForm = {
  name: '',
  password: '',
};

function Auth() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.auth',
  });

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
      <AppTypography
        capitalizeFirstLetter
        className={classes.title}
        size="large"
        tag="h2"
      >
        {t('title')}
      </AppTypography>

      {error.length > 0 && (
        <AppTypography className={classes.error} data-testid="error" error>
          {error}
        </AppTypography>
      )}

      <form onSubmit={onSubmitForm}>
        <Flexbox alignItems="stretch" direction="column" gap="16">
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
        </Flexbox>

        <Flexbox className={classes.buttons} gap="8">
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
        </Flexbox>
      </form>
    </div>
  );
}

export default Auth;
