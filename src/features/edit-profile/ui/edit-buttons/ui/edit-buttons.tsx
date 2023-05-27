import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui/app-button';
import { Flexbox } from '@/shared/ui/flexbox';

import classes from './edit-buttons.module.scss';

interface EditButtonsProps {
  isFormDisabled: boolean;
  onCancelEditing: VoidFunction;
  onToggleDisabled: VoidFunction;
  onUpdateProfile: VoidFunction;
}

function EditButtons({
  isFormDisabled,
  onCancelEditing,
  onToggleDisabled,
  onUpdateProfile,
}: EditButtonsProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'features.edit-profile',
  });

  return (
    <Flexbox className={classes.buttons} data-testid="edit-buttons" gap="8">
      {isFormDisabled ? (
        <AppButton onClick={onToggleDisabled}>{t('buttons.edit')}</AppButton>
      ) : (
        <>
          <AppButton onClick={onCancelEditing}>{t('buttons.cancel')}</AppButton>
          <AppButton onClick={onUpdateProfile}>{t('buttons.save')}</AppButton>
        </>
      )}
    </Flexbox>
  );
}

export default EditButtons;
