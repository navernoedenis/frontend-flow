import { AppModal } from 'shared/ui/app-modal';
import Auth from '../auth/auth.lazy';

interface AuthModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const AuthModal = (props: AuthModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <Auth />
    </AppModal>
  );
};

export default AuthModal;
