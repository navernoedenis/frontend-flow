import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/class-names';
import CopyIcon from './assets/copy.svg';
import classes from './app-clipboard.module.scss';

interface AppClipboardProps {
  className?: string;
  text: string;
}

const AppClipboard = ({ className = '', text }: AppClipboardProps) => {
  const { t } = useTranslation('clipboard');

  const onCopyCode = () => {
    window.navigator.clipboard.writeText(text);
    toast.success(`${t('coppied')}!`);
  };

  const clipboardClasses = classNames(classes.container, {
    [className]: !!className,
  });

  return (
    <div className={clipboardClasses}>
      <pre className={classes.text}>{text}</pre>
      <button className={classes.button} onClick={onCopyCode}>
        <CopyIcon />
      </button>
    </div>
  );
};

export default AppClipboard;
