import { useRef } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import Dropdown from './dropdown';

describe('test shared/dropdown', () => {
  it('be in the document', () => {
    const { result } = renderHook(() => useRef(null));

    render(
      <Dropdown
        children
        isOpen
        onClose={Function}
        parentRef={result.current}
      />,
    );
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it('not be in the document', () => {
    const { result } = renderHook(() => useRef(null));

    render(
      <Dropdown
        children
        isOpen={false}
        onClose={Function}
        parentRef={result.current}
      />,
    );
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });
});
