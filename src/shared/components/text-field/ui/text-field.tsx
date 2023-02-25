import { useRef, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/class-names';
import classes from './text-field.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  isFocused?: boolean;
  title: string;
}

const TextField = (props: TextFieldProps) => {
  const {
    error = '',
    isFocused = false,
    className = '',
    title,
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
      <h6 className={classes.title} data-testid="title">
        {title}
      </h6>
      <input
        className={classes.input}
        data-testid="input"
        ref={inputRef}
        type={type}
        {...otherProps}
      />
      {error && (
        <p className={classes.error} data-testid="error">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
