import { classNames } from 'shared/lib/class-names';
import CheckIcon from './assets/check.svg';
import classes from './dropdown-item.module.scss';

interface DropdownItemProps {
  className?: string;
  icon?: JSX.Element;
  isChecked?: boolean;
  onClick: VoidFunction;
  title: string;
}

const DropdownItem = ({
  className = '',
  icon,
  isChecked = false,
  onClick,
  title,
}: DropdownItemProps) => {
  const dropdownItemClasses = classNames(classes.container, {
    [className]: !!className,
    [classes.active]: isChecked,
  });

  return (
    <button
      className={dropdownItemClasses}
      data-testid="dropdown-item"
      onClick={onClick}
    >
      {icon && (
        <div className={classes.icon} data-testid="dropdown-item-icon">
          {icon}
        </div>
      )}
      <span className={classes.title}>{title}</span>
      {isChecked && (
        <div className={classes.check} data-testid="dropdown-item-checked">
          <CheckIcon />
        </div>
      )}
    </button>
  );
};

export default DropdownItem;
