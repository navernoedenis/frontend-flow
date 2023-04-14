import { useTranslation } from 'react-i18next';
import { AppTypography } from 'shared/ui/app-typography';
import type { Article } from '../../model/types';
import classes from './article-header.module.scss';

interface ArticleHeaderProps {
  article: Article;
}

function ArticleHeader({ article }: ArticleHeaderProps) {
  const { t } = useTranslation('entities.article');

  return (
    <header data-testid="article-header">
      <h2 className={classes.title}>{article.title}</h2>
      <ul className={classes.sublist}>
        <li className={classes.subitem}>
          <AppTypography
            capitalizeFirstLetter
            className={classes.subtitle}
            tag="h5"
          >
            {t('info.date')}
            {': '}
          </AppTypography>
          <AppTypography tag="span">{article.createdAt}</AppTypography>
        </li>

        <li className={classes.subitem}>
          <AppTypography
            capitalizeFirstLetter
            className={classes.subtitle}
            tag="h5"
          >
            {t('info.views')}
            {': '}
          </AppTypography>
          <AppTypography tag="span">{article.views}</AppTypography>
        </li>

        <li className={classes.subitem}>
          <AppTypography
            capitalizeFirstLetter
            className={classes.subtitle}
            tag="h5"
          >
            {t('info.tags')}
            {': '}
          </AppTypography>

          {article.tags.map((tag) => (
            <AppTypography className={classes.tag} key={tag} tag="span">
              {tag}
            </AppTypography>
          ))}
        </li>
      </ul>
    </header>
  );
}

export default ArticleHeader;
