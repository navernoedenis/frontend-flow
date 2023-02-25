import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const root = document.getElementById('portal-root') as HTMLElement;

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => createPortal(children, root || document.body);

export default Portal;
