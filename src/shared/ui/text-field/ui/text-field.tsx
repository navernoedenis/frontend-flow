import { useRef, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

import { AppTypography } from 'shared/ui/app-typography';
import { classNames } from 'shared/lib/transforms/class-names';

import classes from './text-field.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  isFocused?: boolean;
  title?: string;
}

const TextField = (props: TextFieldProps) => {
  const {
    className = '',
    error = '',
    isFocused = false,
    title = '',
    type = 'text',
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  const textFieldClasses = classNames(classes.container, {
    [classes.error]: Boolean(error),
    [className]: Boolean(className),
  });

  return (
    <div className={textFieldClasses} data-testid="text-field">
      {title && (
        <AppTypography
          capitalizeFirstLetter
          className={classes.title}
          data-testid="text-field-title"
          tag="h6"
          weight="bold"
        >
          {title}
        </AppTypography>
      )}

      <input
        autoComplete="off"
        className={classes.input}
        data-testid="text-field-input"
        ref={inputRef}
        type={type}
        {...otherProps}
      />

      {error && (
        <AppTypography
          capitalizeFirstLetter
          className={classes.error}
          data-testid="text-field-error"
          error
          weight="bold"
        >
          {error}
        </AppTypography>
      )}
    </div>
  );
};

export default TextField;
