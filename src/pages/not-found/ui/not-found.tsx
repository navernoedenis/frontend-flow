import { useTranslation } from 'react-i18next';
import { AppTypography } from 'shared/ui';

import classes from './not-found.module.scss';

function NotFoundPage() {
  const { t } = useTranslation('page.not-found');

  return (
    <div data-testid="not-found-page">
      <AppTypography
        align="center"
        className={classes.title}
        error
        size="huge"
        tag="h1"
        weight="bold"
      >
        {`${t('title')} :(`}
      </AppTypography>
    </div>
  );
}

export default NotFoundPage;
