import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect } from 'shared/ui/app-select';
import { Flexbox } from 'shared/ui/flexbox';

import type { AppSelectOption } from 'shared/ui/app-select';
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
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.articles.header.sort',
  });

  const keyOptions = useMemo<Array<AppSelectOption<ArticleSortKey>>>(
    () => [
      { title: t('options.createdAt'), value: 'createdAt' },
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
    <Flexbox gap="20">
      <AppSelect
        onSelect={onSelectKey}
        options={keyOptions}
        title={t('titles.key')}
        value={t(`options.${currentSortKey}`)}
      />

      <AppSelect
        onSelect={onSelectOrder}
        options={orderOptions}
        title={t('titles.order')}
        value={t(`options.${currentSortOrder}`)}
      />
    </Flexbox>
  );
}

export default SelectArticleSort;
