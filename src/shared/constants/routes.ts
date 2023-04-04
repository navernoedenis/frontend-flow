export enum AppRoute {
  ARTICLE = 'article',
  ARTICLES = 'articles',
  COUNTER = 'counter',
  HOME = 'home',
  NOT_FOUND = 'not_found',
  PROFILES = 'profiles',
}

export const AppRoutePath: Record<AppRoute, string> = {
  [AppRoute.ARTICLE]: '/articles', // + articleId
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.COUNTER]: '/counter',
  [AppRoute.HOME]: '/',
  [AppRoute.NOT_FOUND]: '*',
  [AppRoute.PROFILES]: '/profiles', // + profileId,
};
