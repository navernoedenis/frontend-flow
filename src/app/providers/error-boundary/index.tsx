import React, { type ReactNode, Suspense } from 'react';
import { ErrorPage } from 'pages/error';
import { PageLoader } from 'shared/components/page-loader';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Suspense fallback={<PageLoader />}>
          <ErrorPage />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
