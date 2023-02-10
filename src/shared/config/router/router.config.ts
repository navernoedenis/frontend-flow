export enum AppRoute {
  HOME = 'home',
  ABOUT = 'about',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const AppRoutePath: Record<AppRoute, string> = {
  [AppRoute.HOME]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.MAIN]: '/main',
  [AppRoute.NOT_FOUND]: '*',
};
