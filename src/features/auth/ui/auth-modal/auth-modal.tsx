import { AppModal } from 'shared/ui';
import Auth from '../auth/auth.lazy';

interface AuthModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

function AuthModal(props: AuthModalProps) {
  const { isOpen, onClose } = props;

  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <Auth />
    </AppModal>
  );
}

export default AuthModal;
