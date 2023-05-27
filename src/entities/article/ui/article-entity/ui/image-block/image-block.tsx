import { AppTypography } from '@/shared/ui/app-typography';
import { LazyImage } from '@/shared/ui/lazy-image';

import type { ArticleImageBlock } from '../../../../model/types';
import classes from './image-block.module.scss';

interface ImageBlockProps {
  data: ArticleImageBlock;
}

function ImageBlock({ data }: ImageBlockProps) {
  return (
    <div data-testid="article-image-block">
      <LazyImage src={data.image} originalSize />
      {data.title && (
        <AppTypography className={classes.title} align="center">
          {data.title}
        </AppTypography>
      )}
    </div>
  );
}

export default ImageBlock;
