import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store';

import { AddComment } from 'features/add-comment';
import { ArticlesRecommended } from 'features/articles-recommended';
import { selectAuthMe } from 'features/auth';

import { ArticleEntity } from 'entities/article';
import { CommentList } from 'entities/comment';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';
import { Flexbox } from 'shared/ui/flexbox';

import { LazyReducers } from 'shared/lib/components';
import { useAppDispatch, useAppSelector, useEffectOnce } from 'shared/hooks';
import { AppRoutePath } from 'shared/constants/routes';

import { addComment, getArticle, getComments } from '../api';
import { articleReducer, commentsReducer } from '../model/slice';
import { selectArticle } from '../model/selectors/select-article/select-article';
import {
  selectComments,
  selectCommentsLoading,
  selectCommentsError,
} from '../model/selectors/select-comments/select-comments';

const reducers: AppReducersLazy = {
  article: articleReducer,
  comments: commentsReducer,
};

function ArticlePage() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.article',
  });

  const params = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const me = useAppSelector(selectAuthMe);

  const article = useAppSelector(selectArticle);
  const comments = useAppSelector(selectComments.selectAll);
  const commentsError = useAppSelector(selectCommentsError);
  const isCommentsLoading = useAppSelector(selectCommentsLoading);

  useEffectOnce(() => {
    dispatch(getArticle(params.id as string));
    dispatch(getComments(params.id as string));
  });

  const errorMessage = article?.error ?? commentsError;

  const handleSendComment = useCallback(
    (comment: string) => {
      dispatch(addComment({ articleId: article?.data?.id as string, comment }));
    },
    [article?.data?.id, dispatch],
  );

  const onGoBack = useCallback(() => {
    navigate(AppRoutePath.articles);
  }, [navigate]);

  if (errorMessage) {
    return (
      <LazyReducers reducers={reducers}>
        <AppTypography className="article-page-error" tag="h1">
          {errorMessage}
        </AppTypography>
      </LazyReducers>
    );
  }

  return (
    <LazyReducers reducers={reducers}>
      <Flexbox
        alignItems="stretch"
        data-testid="article-page"
        direction="column"
        gap="30"
      >
        <header>
          <AppButton onClick={onGoBack} size="small">
            {t('buttons.go_back')}
          </AppButton>
        </header>

        <ArticleEntity
          article={article?.data ?? null}
          isLoading={!article || article.isLoading}
        />

        <ArticlesRecommended />

        {me && (
          <AddComment
            isDisabled={isCommentsLoading}
            onSendComment={handleSendComment}
          />
        )}

        <CommentList comments={comments} isLoading={isCommentsLoading} />
      </Flexbox>
    </LazyReducers>
  );
}

export default ArticlePage;
