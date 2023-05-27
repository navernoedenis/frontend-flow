export enum AppRoute {
  ADMIN = 'admin',
  ARTICLE = 'article',
  ARTICLES = 'articles',
  HOME = 'home',
  NOT_FOUND = 'not_found',
  PROFILES = 'profiles',
}

export const routes = {
  admin: () => `/${AppRoute.ADMIN}`,
  article: (id: string) => `/${AppRoute.ARTICLES}/${id}`,
  articles: () => `/${AppRoute.ARTICLES}`,
  home: () => '/',
  profile: (id: string) => `/${AppRoute.PROFILES}/${id}`,
};
