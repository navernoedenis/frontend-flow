import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store';
import { selectNetworkStatusOnline } from 'widgets/network-status';

import { AddComment } from 'features/add-comment';
import { selectAuthMe } from 'features/auth';

import { ArticleEntity, ArticleSkeleton } from 'entities/article';
import { CommentEntity, CommentSkeleton } from 'entities/comment';

import { AppButton, AppTypography, Flexbox } from 'shared/ui';

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

  const me = useAppSelector(selectAuthMe);

  const article = useAppSelector(selectArticle);
  const comments = useAppSelector(selectComments.selectAll);
  const commentsError = useAppSelector(selectCommentsError);
  const isCommentsLoading = useAppSelector(selectCommentsLoading);
  const isOnline = useAppSelector(selectNetworkStatusOnline);

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

        {!isCommentsLoading && me && isOnline && (
          <AddComment
            className={classes.addComment}
            onSendComment={handleSendComment}
          />
        )}

        <Flexbox
          className={classes.comments}
          alignItems="start"
          direction="column-reverse"
          gap="12"
        >
          {isCommentsLoading ? (
            <>
              <CommentSkeleton />
              <CommentSkeleton />
              <CommentSkeleton />
            </>
          ) : (
            <>
              {comments.map((comment) => (
                <CommentEntity key={comment.id} comment={comment} />
              ))}
            </>
          )}
        </Flexbox>
      </div>
    </LazyReducers>
  );
}

export default ArticlePage;
