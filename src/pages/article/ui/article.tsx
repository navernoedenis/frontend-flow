import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { AppReducersLazy } from '@/app/providers/store';

import { AddComment } from '@/features/add-comment';
import { ArticleRating } from '@/features/article-rating';
import { ArticlesRecommended } from '@/features/articles-recommended';

import { ArticleEntity } from '@/entities/article';
import { CommentList } from '@/entities/comment';
import { selectUserAuth } from '@/entities/user';

import { AppButton } from '@/shared/ui/app-button';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';

import { LazyReducers } from '@/shared/providers';
import { useAppDispatch, useAppSelector, useEffectOnce } from '@/shared/hooks';
import { routes } from '@/shared/constants/routes';

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

  const me = useAppSelector(selectUserAuth);

  const article = useAppSelector(selectArticle);
  const comments = useAppSelector(selectComments.selectAll);
  const commentsError = useAppSelector(selectCommentsError);
  const isCommentsLoading = useAppSelector(selectCommentsLoading);

  useEffectOnce(() => {
    const id = params.id as string;
    dispatch(getArticle(id));
    dispatch(getComments(id));
  });

  const errorMessage = article?.error ?? commentsError;

  const handleSendComment = useCallback(
    (comment: string) => {
      dispatch(addComment({ articleId: article?.data?.id as string, comment }));
    },
    [article?.data?.id, dispatch],
  );

  const onGoBack = useCallback(() => {
    navigate(routes.articles());
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
          <>
            <ArticleRating articleId={params.id as string} userId={me.id} />
            <AddComment
              isDisabled={isCommentsLoading}
              onSendComment={handleSendComment}
            />
          </>
        )}

        <CommentList comments={comments} isLoading={isCommentsLoading} />
      </Flexbox>
    </LazyReducers>
  );
}

export default ArticlePage;
