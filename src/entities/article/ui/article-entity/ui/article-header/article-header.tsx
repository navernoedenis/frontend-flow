import { useTranslation } from 'react-i18next';
import { AppTypography } from 'shared/ui/app-typography';

import type { Article } from '../../../../model/types';
import classes from './article-header.module.scss';

interface ArticleHeaderProps {
  article: Article;
}

function ArticleHeader({ article }: ArticleHeaderProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'entities.article',
  });

  return (
    <header data-testid="article-header">
      <AppTypography
        className={classes.title}
        size="medium"
        tag="h2"
        weight="bold"
      >
        {article.title}
      </AppTypography>

      <ul className={classes.sublist}>
        <li className={classes.subitem}>
          <AppTypography
            capitalizeFirstLetter
            className={classes.subtitle}
            tag="h5"
          >
            {t('date')}
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
            {t('views')}
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
            {t('tags')}
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
