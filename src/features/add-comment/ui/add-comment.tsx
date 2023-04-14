import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent, FormEvent } from 'react';

import { AppButton } from 'shared/ui/app-button';
import { AppTypography } from 'shared/ui/app-typography';
import { TextField } from 'shared/ui/text-field';
import { capitalizeFirstWord } from 'shared/lib/transforms/capitalize-first-word';

import classes from './add-comment.module.scss';

interface AddCommentProps {
  className?: string;
  onSendComment: (comment: string) => void;
}

function AddComment({ className = '', onSendComment }: AddCommentProps) {
  const { t } = useTranslation('features.add-comment');
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
      <AppTypography capitalizeFirstLetter size="huge" weight="bold">
        {t('title')}
      </AppTypography>

      <TextField
        className={classes.field}
        data-testid="add-comment-input"
        name="comment"
        onChange={handleChange}
        placeholder={capitalizeFirstWord(t('placeholder'))}
        value={value}
      />

      <div className={classes.buttons}>
        <AppButton disabled={!isValidValue} onClick={handleReset} type="button">
          {t('buttons.reset')}
        </AppButton>

        <AppButton disabled={!isValidValue} type="submit">
          {t('buttons.send')}
        </AppButton>
      </div>
    </form>
  );
}

export default AddComment;