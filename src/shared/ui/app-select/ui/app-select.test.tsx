import { render, screen } from '@testing-library/react';
import AppSelect from './app-select';

describe('test shared/app-select', () => {
  const handleSelect = jest.fn();

  it('should be in the document', () => {
    render(<AppSelect onSelect={handleSelect} options={[]} value="test" />);
    expect(screen.getByTestId('app-select')).toBeInTheDocument();
  });

  it('should have title', () => {
    render(
      <AppSelect
        onSelect={handleSelect}
        options={[]}
        title="Title33"
        value="test"
      />,
    );
    expect(screen.getByTestId('app-select-title')).toBeInTheDocument();
    expect(screen.getByTestId('app-select-title')).toHaveTextContent('Title33');
  });
});
