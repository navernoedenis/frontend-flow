import { useTranslation } from 'react-i18next';

import { AppTypography } from 'shared/ui/app-typography';
import { useAppSelector } from 'shared/hooks';

import { selectNetworkStatusOnline } from '../model/selectors/network-status-online/network-status-online';
import classes from './network-status.module.scss';

function NetworkStatus() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'widgets.network-status',
  });
  const isOnline = useAppSelector(selectNetworkStatusOnline);

  return isOnline ? null : (
    <div className={classes.container} data-testid="network-status">
      <AppTypography className={classes.message} align="center">
        {t('message')}
      </AppTypography>
    </div>
  );
}

export default NetworkStatus;
