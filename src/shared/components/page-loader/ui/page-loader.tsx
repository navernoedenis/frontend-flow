import { AppLoader } from 'shared/components/app-loader';
import classes from './page-loader.module.scss';

function PageLoader() {
  return (
    <div className={classes.loader} data-testid="page-loader">
      <AppLoader />
    </div>
  );
}

export default PageLoader;
