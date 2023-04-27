import { useRef } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import Dropdown from './dropdown';

describe('test shared/dropdown', () => {
  const handleClose = jest.fn();

  it('should be in the document', () => {
    const { result } = renderHook(() => useRef(null));

    render(
      <Dropdown
        children
        isOpen
        onClose={handleClose}
        parentRef={result.current}
      />,
    );
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it("shouldn't be should be in the document", () => {
    const { result } = renderHook(() => useRef(null));

    render(
      <Dropdown
        children
        isOpen={false}
        onClose={handleClose}
        parentRef={result.current}
      />,
    );
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });
});
