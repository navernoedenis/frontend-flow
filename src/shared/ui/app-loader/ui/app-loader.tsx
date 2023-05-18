import classes from './app-loader.module.scss';

function AppLoader() {
  return (
    <div className={classes.container} data-testid="app-loader">
      <div className={classes.loader} />
    </div>
  );
}

export default AppLoader;
