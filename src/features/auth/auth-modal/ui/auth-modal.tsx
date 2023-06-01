import { AppModal } from '@/shared/ui/app-modal';
import { AutCard } from '../../auth-card';

interface AuthModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

function AuthModal(props: AuthModalProps) {
  const { isOpen, onClose } = props;

  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <AutCard />
    </AppModal>
  );
}

export default AuthModal;
