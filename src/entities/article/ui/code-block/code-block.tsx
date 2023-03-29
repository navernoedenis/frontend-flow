import { AppClipboard } from 'shared/ui/app-clipboard';
import type { ArticleCodeBlock } from '../../model/types';

interface CodeBlockProps {
  data: ArticleCodeBlock;
}

const CodeBlock = ({ data }: CodeBlockProps) => (
  <div data-testid="article-code-block">
    <AppClipboard text={data.code} />
  </div>
);

export default CodeBlock;
