import { render, screen } from '@testing-library/react';
import DropdownItem from './dropdown-item';

const onClickMock = jest.fn();

describe('test shared/dropdown-item', () => {
  it('should be in the document', () => {
    render(<DropdownItem title="" onClick={onClickMock} />);
    expect(screen.getByTestId('dropdown-item')).toBeInTheDocument();
  });

  it('icon: visible', () => {
    render(<DropdownItem icon={<div />} title="" onClick={onClickMock} />);
    expect(screen.queryByTestId('dropdown-item-icon')).toBeInTheDocument();
  });

  it('icon: hidden', () => {
    render(<DropdownItem title="" onClick={onClickMock} />);
    expect(screen.queryByTestId('dropdown-item-icon')).not.toBeInTheDocument();
  });

  it('checked icon: visible', () => {
    render(<DropdownItem isChecked title="" onClick={onClickMock} />);
    expect(screen.queryByTestId('dropdown-item-checked')).toBeInTheDocument();
  });

  it('checked icon: hidden', () => {
    render(<DropdownItem title="" onClick={onClickMock} />);
    expect(
      screen.queryByTestId('dropdown-item-checked'),
    ).not.toBeInTheDocument();
  });
});
