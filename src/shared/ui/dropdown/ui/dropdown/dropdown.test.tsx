import { render, screen } from '@testing-library/react';
import Dropdown from './dropdown';

describe('test shared/dropdown', () => {
  it('should be in the document', () => {
    render(<Dropdown isOpen parent={null} onClose={() => {}} children />);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it("shouldn't be should be in the document", () => {
    render(
      <Dropdown isOpen={false} parent={null} onClose={() => {}} children />,
    );
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });
});
