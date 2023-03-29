export interface ArticleState {
  data: Article | null;
  isLoading: boolean;
  error: string;
}

export interface Article {
  id: string;
  title: string;
  image: string;
  info: {
    createdAt: string;
    tags: string[];
    views: number;
  };
  blocks: ArticleBlock[];
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodeBlock;

export enum ArticleBlockType {
  CODE = 'code',
  IMAGE = 'image',
  TEXT = 'text',
}

export interface ArticleCodeBlock {
  id: string;
  type: ArticleBlockType.CODE;
  title?: string;
  code: string;
}

export interface ArticleImageBlock {
  id: string;
  type: ArticleBlockType.IMAGE;
  title?: string;
  image: string;
}

export interface ArticleTextBlock {
  id: string;
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
