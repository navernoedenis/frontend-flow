import type { Rating } from '@/entities/rating';

export interface ArticleRating extends Rating {
  articleId: string;
  userId: string;
}
