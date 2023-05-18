import { fireEvent, render, screen } from '@testing-library/react';
import AppSelect from './app-select';

describe('test shared/app-select', () => {
  it('be in the document', () => {
    render(<AppSelect onSelect={Function} options={[]} value="test" />);
    expect(screen.getByTestId('app-select')).toBeInTheDocument();
  });

  it('show title', () => {
    render(
      <AppSelect
        onSelect={Function}
        options={[]}
        title="Title33"
        value="test"
      />,
    );
    expect(screen.getByTestId('app-select-title')).toBeInTheDocument();
  });

  it('show dropdown', () => {
    render(<AppSelect onSelect={Function} options={[]} value="test" />);
    const openButton = screen.getByTestId('app-select-value-wrapper');
    fireEvent.click(openButton);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it('hidden dropdown', () => {
    render(<AppSelect onSelect={Function} options={[]} value="test" />);
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });
});
