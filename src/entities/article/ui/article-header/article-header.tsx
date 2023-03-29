import { useTranslation } from 'react-i18next';
import type { Article } from '../../model/types';
import classes from './article-header.module.scss';

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const { t } = useTranslation('article');

  return (
    <header data-testid="article-header">
      <h2 className={classes.title}>{article.title}</h2>
      <ul className={classes.sublist}>
        <li className={classes.subitem}>
          <h5 className={classes.subtitle}>
            {t('info.date')}
            {': '}
          </h5>
          <span className={classes.subtext}>{article.info.createdAt}</span>
        </li>

        <li className={classes.subitem}>
          <h5 className={classes.subtitle}>
            {t('info.views')}
            {': '}
          </h5>
          <span className={classes.subtext}>{article.info.views}</span>
        </li>

        <li className={classes.subitem}>
          <h5 className={classes.subtitle}>
            {t('info.tags')}
            {': '}
          </h5>
          {article.info.tags.map((tag) => (
            <span className={classes.tag} key={tag}>
              {tag}
            </span>
          ))}
        </li>
      </ul>
    </header>
  );
};

export default ArticleHeader;
