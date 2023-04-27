import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect, Flexbox } from 'shared/ui';
import type { AppSelectOption } from 'shared/ui';
import type { ArticleSortKey, ArticleSortOrder } from '../model/types';

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
    <Flexbox gap="20">
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
    </Flexbox>
  );
}

export default SelectArticleSort;
