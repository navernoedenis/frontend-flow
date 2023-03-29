import classes from './app-loader.module.scss';

function AppLoader() {
  return (
    <div className={classes.container}>
      <div className={classes.loader} data-testid="app-loader" />
    </div>
  );
}

export default AppLoader;
