import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect } from '@/shared/ui/app-select';
import { Flexbox } from '@/shared/ui/flexbox';

import type { AppSelectOption } from '@/shared/ui/app-select';
import type { ArticleSortKey, ArticleSortOrder } from '../model/types';

interface ArticleSelectSortProps {
  sortKey: ArticleSortKey;
  sortOrder: ArticleSortOrder;
  onSelectKey: (key: ArticleSortKey) => void;
  onSelectOrder: (order: ArticleSortOrder) => void;
}

function ArticleSelectSort({
  sortKey,
  sortOrder,
  onSelectKey,
  onSelectOrder,
}: ArticleSelectSortProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.article-select-sort',
  });

  const keyOptions = useMemo<Array<AppSelectOption<ArticleSortKey>>>(
    () => [
      { title: t('options.created'), value: 'created' },
      { title: t('options.views'), value: 'views' },
    ],
    [t],
  );

  const orderOptions = useMemo<Array<AppSelectOption<ArticleSortOrder>>>(
    () => [
      { title: t('options.asc'), value: 'asc' },
      { title: t('options.desc'), value: 'desc' },
    ],
    [t],
  );

  return (
    <Flexbox data-testid="article-select-sort" gap="20">
      <AppSelect
        onSelect={onSelectKey}
        options={keyOptions}
        title={t('titles.key')}
        value={t(`options.${sortKey}`)}
      />

      <AppSelect
        onSelect={onSelectOrder}
        options={orderOptions}
        title={t('titles.order')}
        value={t(`options.${sortOrder}`)}
      />
    </Flexbox>
  );
}

export default ArticleSelectSort;
