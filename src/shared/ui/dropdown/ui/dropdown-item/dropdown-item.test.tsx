import { render, screen } from '@testing-library/react';
import DropdownItem from './dropdown-item';

describe('test shared/dropdown-item', () => {
  it('be in the document', () => {
    render(<DropdownItem title="" onClick={Function} />);
    expect(screen.getByTestId('dropdown-item')).toBeInTheDocument();
  });

  it('icon: visible', () => {
    render(<DropdownItem icon={<div />} title="" onClick={Function} />);
    expect(screen.queryByTestId('dropdown-item-icon')).toBeInTheDocument();
  });

  it('icon: hidden', () => {
    render(<DropdownItem title="" onClick={Function} />);
    expect(screen.queryByTestId('dropdown-item-icon')).not.toBeInTheDocument();
  });

  it('checked icon: visible', () => {
    render(<DropdownItem isChecked title="" onClick={Function} />);
    expect(screen.queryByTestId('dropdown-item-checked')).toBeInTheDocument();
  });

  it('checked icon: hidden', () => {
    render(<DropdownItem title="" onClick={Function} />);
    expect(
      screen.queryByTestId('dropdown-item-checked'),
    ).not.toBeInTheDocument();
  });
});
