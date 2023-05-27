import { Flexbox } from '@/shared/ui/flexbox';
import { LazyImage } from '@/shared/ui/lazy-image';

import { ArticleBlockType } from '../../../model/types';
import type { Article, ArticleBlock } from '../../../model/types';

import ArticleSkeleton from './article.skeleton';
import ArticleHeader from './article-header/article-header';
import CodeBlock from './code-block/code-block';
import ImageBlock from './image-block/image-block';
import TextBlock from './text-block/text-block';

import classes from './article.module.scss';

interface ArticleEntityProps {
  article: Article | null;
  className?: string;
  isLoading?: boolean;
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

function ArticleEntity({
  article,
  className = '',
  isLoading = false,
}: ArticleEntityProps) {
  if (isLoading) {
    return <ArticleSkeleton />;
  }

  if (!article) {
    return null;
  }

  return (
    <div className={className} data-testid="article-entity">
      <ArticleHeader article={article} />
      <LazyImage className={classes.image} src={article.image} />
      <Flexbox alignItems="stretch" direction="column" gap="20">
        {article.blocks.map(renderBlock)}
      </Flexbox>
    </div>
  );
}

export default ArticleEntity;
