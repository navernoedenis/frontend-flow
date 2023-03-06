export enum AppRoute {
  HOME = 'home',
  COUNTER = 'counter',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
}

export const AppRoutePath: Record<AppRoute, string> = {
  [AppRoute.HOME]: '/',
  [AppRoute.COUNTER]: '/counter',
  [AppRoute.NOT_FOUND]: '*',
  [AppRoute.PROFILE]: '/profile',
};
