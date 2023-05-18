import { AppTypography } from 'shared/ui/app-typography';
import classes from './text-block.module.scss';
import type { ArticleTextBlock } from '../../../../model/types';

interface TextBlockProps {
  data: ArticleTextBlock;
}

function TextBlock({ data }: TextBlockProps) {
  return (
    <div data-testid="article-text-block">
      {data.title && (
        <AppTypography className={classes.title} tag="h4">
          {data.title}
        </AppTypography>
      )}
      {data.paragraphs.map((paragraph) => (
        <AppTypography
          className={classes.paragpaph}
          key={`${paragraph.slice(0, 16)}`}
        >
          {paragraph}
        </AppTypography>
      ))}
    </div>
  );
}

export default TextBlock;
