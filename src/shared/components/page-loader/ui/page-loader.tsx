import classes from './page-loader.module.scss';
import { Loader } from 'shared/components/loader';

const PageLoader = () => (
  <div className={classes.loader}>
    <Loader />
  </div>
);

export default PageLoader;
