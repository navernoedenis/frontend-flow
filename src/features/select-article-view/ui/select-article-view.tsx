import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect } from 'shared/ui/app-select';
import type { AppSelectOption } from 'shared/ui/app-select';

import { ArticleView } from '../model/constants';
import classes from './select-article-view.module.scss';

interface SelectArticleViewProps {
  currentView: ArticleView;
  onSelectView: (view: ArticleView) => void;
}

function SelectArticleView({
  currentView = ArticleView.NORMAL,
  onSelectView,
}: SelectArticleViewProps) {
  const { t } = useTranslation('features.articles-view');

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
      onSelect={onSelectView}
      options={options}
      title={t('view')}
      value={t(currentView)}
    />
  );
}

export default SelectArticleView;
