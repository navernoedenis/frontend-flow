import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton, Flexbox } from 'shared/ui';
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
  const { t } = useTranslation('page.articles', {
    keyPrefix: 'header.buttons',
  });

  const onSelectArticleTag = useCallback(
    (tag: ArticleTag) => () => {
      onSelect(tag);
    },
    [onSelect],
  );

  const buttonOptions = useMemo<ArticleTagButton[]>(
    () => [
      { title: t('all'), value: 'all' },
      { title: t('business'), value: 'business' },
      { title: t('programming'), value: 'programming' },
      { title: t('science'), value: 'science' },
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
