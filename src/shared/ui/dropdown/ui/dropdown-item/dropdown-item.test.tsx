import { render, screen } from '@testing-library/react';
import DropdownItem from './dropdown-item';

describe('test shared/dropdown-item', () => {
  const onClick = jest.fn();

  it('should be in the document', () => {
    render(<DropdownItem title="" onClick={onClick} />);
    expect(screen.getByTestId('dropdown-item')).toBeInTheDocument();
  });

  it('icon: visible', () => {
    render(<DropdownItem icon={<div />} title="" onClick={onClick} />);
    expect(screen.queryByTestId('dropdown-item-icon')).toBeInTheDocument();
  });

  it('icon: hidden', () => {
    render(<DropdownItem title="" onClick={onClick} />);
    expect(screen.queryByTestId('dropdown-item-icon')).not.toBeInTheDocument();
  });

  it('checked icon: visible', () => {
    render(<DropdownItem isChecked title="" onClick={onClick} />);
    expect(screen.queryByTestId('dropdown-item-checked')).toBeInTheDocument();
  });

  it('checked icon: hidden', () => {
    render(<DropdownItem title="" onClick={onClick} />);
    expect(
      screen.queryByTestId('dropdown-item-checked'),
    ).not.toBeInTheDocument();
  });
});
