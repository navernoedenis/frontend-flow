import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/ui/app-button';
import { AppModal } from '@/shared/ui/app-modal';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';
import { RatingCard, RatingCardSkeleton } from '@/entities/rating';
import { TextField } from '@/shared/ui/text-field';

import {
  useGetRatingQuery,
  useUpdateRatingMutation,
} from '../api/article-rating';

import classes from './article-rating.module.scss';

interface ArticleRatingProps {
  articleId: string;
  userId: string;
}

function ArticleRating({ articleId, userId }: ArticleRatingProps) {
  const [showModal, setModal] = useState(false);
  const [rate, setRate] = useState(0);
  const [feedback, setFeedback] = useState('');

  const { t } = useTranslation('translation', {
    keyPrefix: 'features.article-rating',
  });

  const {
    data: ratings = [],
    isLoading: isFetching,
    isError: isFetchedError,
  } = useGetRatingQuery({
    articleId,
    userId,
  });

  const [onUpdate, { data: updated, isLoading: isUpdating }] = (
    useUpdateRatingMutation()
  );

  const onShowModal = useCallback((rate: number) => {
    setModal(true);
    setRate(rate);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
    setFeedback('');
    setRate(0);
  }, []);

  const onUpdateRating = useCallback(() => {
    onUpdate({
      articleId,
      feedback: feedback.trim() || null,
      rating: rate,
      userId,
    })
      .then(() => toast.success(t('modal.success_message')))
      .catch((error) => {
        toast.error(t('modal.failure_message'));
        // eslint-disable-next-line
        console.error(error);
      })
      .finally(onCloseModal);
  }, [articleId, feedback, onCloseModal, onUpdate, rate, t, userId]);

  const onChangeFeeback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFeedback(event.target.value);
    },
    [],
  );

  if (isFetchedError) {
    return null;
  }

  if (isFetching || isUpdating) {
    return <RatingCardSkeleton stars={5} />;
  }

  const initialRating = ratings[0]?.rating ?? 0;
  const updatedRating = updated?.rating ?? 0;
  const rating = initialRating || updatedRating;

  if (rating) {
    return <RatingCard rating={rating} stars={5} title={t('rated_title')} />;
  }

  return (
    <>
      <RatingCard
        onStarRate={onShowModal}
        rating={rate}
        stars={5}
        title={t('unrated_title')}
      />

      <AppModal isOpen={showModal} onClose={onCloseModal}>
        <AppTypography capitalizeFirstLetter size="medium" weight="bold">
          {t('modal.title')}
        </AppTypography>
        <TextField
          className={classes.modalFeedback}
          onChange={onChangeFeeback}
          placeholder={`${t('modal.placeholder')}...`}
          value={feedback}
        />
        <Flexbox className={classes.modalButtons} gap="8">
          <AppButton onClick={onCloseModal}>{t('modal.cancel')}</AppButton>
          <AppButton onClick={onUpdateRating}>{t('modal.submit')}</AppButton>
        </Flexbox>
      </AppModal>
    </>
  );
}

export default ArticleRating;
