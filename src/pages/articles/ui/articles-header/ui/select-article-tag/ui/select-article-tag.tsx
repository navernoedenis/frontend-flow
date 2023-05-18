import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/app-button';
import { Flexbox } from 'shared/ui/flexbox';

import { classNames } from 'shared/lib/transforms/class-names';

import type { ArticleTag, ArticleTagButton } from '../model/types';
import classes from './select-article-tag.module.scss';

interface SelectArticleSortProps {
  className?: string;
  currentTag: ArticleTag;
  onSelect: (tag: ArticleTag) => void;
}

function SelectArticleTag({
  className = '',
  currentTag,
  onSelect,
}: SelectArticleSortProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.articles.header',
  });

  const onSelectArticleTag = useCallback(
    (tag: ArticleTag) => () => {
      onSelect(tag);
    },
    [onSelect],
  );

  const buttonOptions = useMemo<ArticleTagButton[]>(
    () => [
      { title: t('buttons.all'), value: 'all' },
      { title: t('buttons.business'), value: 'business' },
      { title: t('buttons.programming'), value: 'programming' },
      { title: t('buttons.science'), value: 'science' },
    ],
    [t],
  );

  const containerClasses = classNames('', {
    [className]: !!className,
  });

  return (
    <Flexbox className={containerClasses} gap="8">
      {buttonOptions.map((option) => (
        <AppButton
          className={currentTag === option.value ? classes.active : ''}
          key={option.value}
          onClick={onSelectArticleTag(option.value)}
        >
          {option.title}
        </AppButton>
      ))}
    </Flexbox>
  );
}

export default SelectArticleTag;
