import classes from './app-loader.module.scss';

function AppLoader() {
  return <div className={classes.loader} data-testid="app-loader" />;
}

export default AppLoader;
