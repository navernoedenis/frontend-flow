import { Suspense } from 'react';
import { AppModal } from 'shared/components/app-modal';

import Auth from '../auth/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = (props: AuthModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Suspense fallback="">
      <AppModal isOpen={isOpen} onClose={onClose}>
        <Auth />
      </AppModal>
    </Suspense>
  );
};

export default AuthModal;
