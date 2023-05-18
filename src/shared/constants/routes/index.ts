export enum AppRoute {
  ADMIN = 'admin',
  ARTICLE = 'article',
  ARTICLES = 'articles',
  HOME = 'home',
  NOT_FOUND = 'not_found',
  PROFILES = 'profiles',
}

export const AppRoutePath: Record<AppRoute, string> = {
  [AppRoute.ADMIN]: '/admin',
  [AppRoute.ARTICLE]: '/articles', // + articleId
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.HOME]: '/',
  [AppRoute.NOT_FOUND]: '*',
  [AppRoute.PROFILES]: '/profiles', // + profileId,
};
