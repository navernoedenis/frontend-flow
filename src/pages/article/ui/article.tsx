import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store';

import { AddComment } from 'features/add-comment';

import { ArticleEntity, ArticleSkeleton } from 'entities/article';
import { CommentEntity, CommentSkeleton } from 'entities/comment';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';
import { LazyReducers } from 'shared/lib/lazy-reducers';
import { useAppDispatch, useAppSelector, useEffectOnce } from 'shared/hooks';
import { AppRoutePath } from 'shared/constants/routes';

import { addComment } from '../api/add-comment/add-comment';
import { getArticle } from '../api/get-article/get-article';
import { getComments } from '../api/get-comments/get-comments';

import { articleReducer, commentsReducer } from '../model/slice';
import { selectArticle } from '../model/selectors/select-article/select-article';
import {
  selectComments,
  selectCommentsLoading,
  selectCommentsError,
} from '../model/selectors/select-comments/select-comments';

import classes from './article.module.scss';

const reducers: AppReducersLazy = {
  article: articleReducer,
  comments: commentsReducer,
};

const translations: string[] = [
  'page.article',
  'entities.article',
  'shared.clipboard',
];

function ArticlePage() {
  const { t } = useTranslation(translations);
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const article = useAppSelector(selectArticle);
  const comments = useAppSelector(selectComments.selectAll);
  const commentsLoading = useAppSelector(selectCommentsLoading);
  const commentsError = useAppSelector(selectCommentsError);

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
        <AppTypography tag="h1">{errorMessage}</AppTypography>
      </LazyReducers>
    );
  }

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="article-page">
        <header className={classes.header}>
          <AppButton onClick={onGoBack} size="small">
            {t('buttons.go_back')}
          </AppButton>
        </header>

        {article?.isLoading && <ArticleSkeleton />}
        {article?.data && <ArticleEntity article={article.data} />}

        {commentsLoading ? (
          <div className={classes.skeleton}>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </div>
        ) : (
          <>
            <AddComment
              className={classes.addComment}
              onSendComment={handleSendComment}
            />
            <div className={classes.comments}>
              {comments.map((comment) => (
                <CommentEntity key={comment.id} comment={comment} />
              ))}
            </div>
          </>
        )}
      </div>
    </LazyReducers>
  );
}

export default ArticlePage;
