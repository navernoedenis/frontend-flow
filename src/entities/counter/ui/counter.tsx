import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';
import { LazyReducers } from 'shared/lib/lazy-reducers';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { selectCountertValue } from '../model/selectors';
import { counterActions, counterReducer } from '../model/slice';

import classes from './counter.module.scss';

const reducers: AppReducersLazy = {
  counter: counterReducer,
};

function CounterEntity() {
  const { t } = useTranslation('entities.counter');
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCountertValue);

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  const increment = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="counter">
        <AppTypography data-testid="title" size="large">
          {t('title')}
          {`: ${value}`}
        </AppTypography>

        <div className={classes.buttons}>
          <AppButton
            className={classes.button}
            data-testid="decrement"
            disabled={value === 0}
            onClick={decrement}
          >
            {t('decrement')}
          </AppButton>

          <AppButton
            className={classes.button}
            data-testid="increment"
            onClick={increment}
          >
            {t('increment')}
          </AppButton>
        </div>
      </div>
    </LazyReducers>
  );
}

export default CounterEntity;
