import { LazyImage } from 'shared/ui/lazy-image';
import type { ArticleImageBlock } from '../../model/types';
import classes from './image-block.module.scss';

interface ImageBlockProps {
  data: ArticleImageBlock;
}

const ImageBlock = ({ data }: ImageBlockProps) => (
  <div data-testid="article-image-block">
    <LazyImage src={data.image} originalSize />
    {data.title && <p className={classes.title}>{data.title}</p>}
  </div>
);

export default ImageBlock;
