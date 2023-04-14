import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect } from 'shared/ui/app-select';
import type { AppSelectOption } from 'shared/ui/app-select';
import type { ArticleSortKey, ArticleSortOrder } from '../model/types';

import classes from './select-article-sort.module.scss';

interface SelectArticleSortProps {
  currentSortKey: ArticleSortKey;
  currentSortOrder: ArticleSortOrder;
  onSelectKey: (key: ArticleSortKey) => void;
  onSelectOrder: (order: ArticleSortOrder) => void;
}

function SelectArticleSort({
  currentSortKey,
  currentSortOrder,
  onSelectKey,
  onSelectOrder,
}: SelectArticleSortProps) {
  const { t } = useTranslation('features.select-article-sort');

  const keyOptions = useMemo<Array<AppSelectOption<ArticleSortKey>>>(
    () => [
      { title: t('key.options.all'), value: 'all' },
      { title: t('key.options.views'), value: 'views' },
      { title: t('key.options.createdAt'), value: 'createdAt' },
    ],
    [t],
  );

  const orderOptions = useMemo<Array<AppSelectOption<ArticleSortOrder>>>(
    () => [
      { title: t('order.options.asc'), value: 'asc' },
      { title: t('order.options.desc'), value: 'desc' },
    ],
    [t],
  );

  return (
    <div className={classes.container}>
      <AppSelect
        onSelect={onSelectKey}
        options={keyOptions}
        title={t('key.title')}
        value={currentSortKey}
      />

      <AppSelect
        isDisabled={currentSortKey === 'all'}
        onSelect={onSelectOrder}
        options={orderOptions}
        title={t('order.title')}
        value={currentSortOrder}
      />
    </div>
  );
}

export default SelectArticleSort;
