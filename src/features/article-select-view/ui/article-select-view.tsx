import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect } from '@/shared/ui/app-select';
import type { AppSelectOption } from '@/shared/ui/app-select';

import { ArticleView } from '../model/constants';
import classes from './article-select-view.module.scss';

interface SelectArticleViewProps {
  view: ArticleView;
  onSelectView: (view: ArticleView) => void;
}

function ArticleSelectView({
  view = ArticleView.NORMAL,
  onSelectView,
}: SelectArticleViewProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.article-select-view',
  });

  const options: Array<AppSelectOption<ArticleView>> = useMemo(
    () => [
      { title: t('normal'), value: ArticleView.NORMAL },
      { title: t('compact'), value: ArticleView.COMPACT },
    ],
    [t],
  );

  return (
    <AppSelect
      className={classes.select}
      data-testid="article-select-view"
      onSelect={onSelectView}
      options={options}
      title={t('view')}
      value={t(`${view}`)}
    />
  );
}

export default ArticleSelectView;
