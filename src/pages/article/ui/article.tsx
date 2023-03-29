import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from 'app/providers/store';

import { ArticleEntity, ArticleSkeleton } from 'entities/article';
import { CommentEntity, CommentSkeleton } from 'entities/comment';

import { LazyReducers } from 'shared/lib/lazy-reducers';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { getArticle } from '../api/get-article/get-article';
import { getComments } from '../api/get-comments/get-comments';

import { articleReducer } from '../model/slice/article';
import { commentsReducer } from '../model/slice/comments';

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

const translations: string[] = ['article-page', 'article', 'clipboard'];

const ArticlePage = () => {
  const { t } = useTranslation(translations);
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const article = useAppSelector(selectArticle);
  const comments = useAppSelector(selectComments.selectAll);
  const commentsLoading = useAppSelector(selectCommentsLoading);
  const commentsError = useAppSelector(selectCommentsError);

  useEffect(() => {
    if (!__IS_STORYBOOK__) {
      dispatch(getArticle(params.id as string));
      dispatch(getComments(params.id as string));
    }
  }, [dispatch, params.id]);

  const errorMessage = article?.error ?? commentsError;

  if (errorMessage) {
    return (
      <LazyReducers reducers={reducers}>
        <h1>{errorMessage}</h1>
      </LazyReducers>
    );
  }

  return (
    <LazyReducers reducers={reducers}>
      <div data-testid="article-page">
        {article?.isLoading && <ArticleSkeleton />}
        {article?.data && <ArticleEntity article={article.data} />}

        <h3 className={classes.commentsTitle}>{`${t('comments')}:`}</h3>

        {commentsLoading && (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </div>
        )}

        {comments.length > 0 && (
          <div className={classes.comments}>
            {comments.map((comment) => (
              <CommentEntity key={comment.id} comment={comment} />
            ))}
          </div>
        )}

        {!commentsLoading && !comments.length && (
          <p className={classes.notComments}>{t('no_comments')}</p>
        )}
      </div>
    </LazyReducers>
  );
};

export default ArticlePage;
