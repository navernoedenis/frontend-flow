import { useState, useCallback } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/shared/ui/app-button';
import { AppTypography } from '@/shared/ui/app-typography';
import { Flexbox } from '@/shared/ui/flexbox';
import { TextField } from '@/shared/ui/text-field';

import { capitalizeFirstWord } from '@/shared/lib/transforms/capitalize-first-word';

import classes from './add-comment.module.scss';

interface AddCommentProps {
  className?: string;
  isDisabled?: boolean;
  onSendComment: (comment: string) => void;
}

function AddComment({
  className = '',
  isDisabled = false,
  onSendComment,
}: AddCommentProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.add-comment',
  });
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      onSendComment(value);
      setValue('');
    },
    [onSendComment, value],
  );

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleReset = useCallback(() => {
    setValue('');
  }, []);

  const isValidValue = value.trim().length > 0;

  return (
    <form
      className={className}
      data-testid="add-comment"
      onSubmit={handleSubmit}
    >
      <AppTypography capitalizeFirstLetter size="large" weight="bold">
        {t('title')}
      </AppTypography>

      <TextField
        className={classes.field}
        data-testid="add-comment-input"
        disabled={isDisabled}
        name="comment"
        onChange={handleChange}
        placeholder={capitalizeFirstWord(t('placeholder'))}
        value={value}
      />

      <Flexbox className={classes.buttons} gap="8">
        <AppButton
          data-testid="add-comment-reset-button"
          disabled={!isValidValue || isDisabled}
          onClick={handleReset}
          type="button"
        >
          {t('buttons.reset')}
        </AppButton>

        <AppButton
          data-testid="add-comment-send-button"
          disabled={!isValidValue || isDisabled}
          type="submit"
        >
          {t('buttons.send')}
        </AppButton>
      </Flexbox>
    </form>
  );
}

export default AddComment;
