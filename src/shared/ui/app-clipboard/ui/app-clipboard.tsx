import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import { classNames } from 'shared/lib/transforms/class-names';
import CopyIcon from './assets/copy.svg';
import classes from './app-clipboard.module.scss';

interface AppClipboardProps {
  className?: string;
  text: string;
}

const AppClipboard = ({ className = '', text }: AppClipboardProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'shared.clipboard',
  });

  const onCopyCode = useCallback(() => {
    window.navigator.clipboard.writeText(text);
    toast.success(`${t('coppied')}!`);
  }, [t, text]);

  const clipboardClasses = classNames(classes.container, {
    [className]: !!className,
  });

  return (
    <div className={clipboardClasses} data-testid="app-clipboard">
      <pre className={classes.text}>{text}</pre>
      <button
        className={classes.button}
        data-testid="app-clipboard-copy"
        onClick={onCopyCode}
      >
        <CopyIcon />
      </button>
    </div>
  );
};

export default AppClipboard;
