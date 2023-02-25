import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/components/app-button';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { selectCountertValue } from '../model/selectors';
import { counterActions } from '../model/slice';
import classes from './counter.module.scss';

const Counter = () => {
  const { t } = useTranslation('counter');

  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCountertValue);

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div className={classes.container} data-testid="counter">
      <h2 data-testid="title">
        {t('title')}
        {': '}
        {value}
      </h2>
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
  );
};

export default Counter;
