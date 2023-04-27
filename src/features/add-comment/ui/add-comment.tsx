import { useState, useCallback } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton, AppTypography, Flexbox, TextField } from 'shared/ui';
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

      <Flexbox className={classes.buttons} gap="8">
        <AppButton disabled={!isValidValue} onClick={handleReset} type="button">
          {t('buttons.reset')}
        </AppButton>

        <AppButton disabled={!isValidValue} type="submit">
          {t('buttons.send')}
        </AppButton>
      </Flexbox>
    </form>
  );
}

export default AddComment;
