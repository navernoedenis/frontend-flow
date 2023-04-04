import { LazyImage } from 'shared/ui/lazy-image';
import { ArticleBlockType } from '../model/types';
import type { Article, ArticleBlock } from '../model/types';

import ArticleHeader from './article-header/article-header';
import CodeBlock from './code-block/code-block';
import ImageBlock from './image-block/image-block';
import TextBlock from './text-block/text-block';

import classes from './article.module.scss';

interface ArticleEntityProps {
  article: Article;
  className?: string;
}

function renderBlock(block: ArticleBlock) {
  switch (block.type) {
  case ArticleBlockType.CODE: {
    return <CodeBlock key={block.id} data={block} />;
  }
  case ArticleBlockType.IMAGE: {
    return <ImageBlock key={block.id} data={block} />;
  }
  case ArticleBlockType.TEXT: {
    return <TextBlock key={block.id} data={block} />;
  }
  default:
    return null;
  }
}

function ArticleEntity({ article, className = '' }: ArticleEntityProps) {
  return (
    <div className={className} data-testid="article-entity">
      <ArticleHeader article={article} />
      <LazyImage className={classes.image} src={article.image} />
      <div className={classes.blocks}>{article.blocks.map(renderBlock)}</div>
    </div>
  );
}

export default ArticleEntity;
