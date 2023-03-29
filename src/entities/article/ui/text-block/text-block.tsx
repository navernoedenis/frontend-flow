import classes from './text-block.module.scss';
import type { ArticleTextBlock } from '../../model/types';

interface TextBlockProps {
  data: ArticleTextBlock;
}

const TextBlock = ({ data }: TextBlockProps) => (
  <div data-testid="article-text-block">
    {data.title && <h4 className={classes.title}>{data.title}</h4>}
    {data.paragraphs.map((paragraph) => (
      <p className={classes.paragpaph} key={`${paragraph.slice(0, 8)}`}>
        {paragraph}
      </p>
    ))}
  </div>
);

export default TextBlock;
