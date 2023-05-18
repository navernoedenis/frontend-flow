import { fireEvent, screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { Country } from '../../../model/constants';

import SelectCountry from './select-country';

describe('test entities/select-country', () => {
  it('be in the document', () => {
    renderWithAll(
      <SelectCountry
        currentCountry={Country.CANADA}
        onSelectCountry={Function}
      />,
    );
    expect(screen.getByTestId('select-country')).toBeInTheDocument();
  });

  it('has classname: extra', () => {
    renderWithAll(
      <SelectCountry
        className="extra"
        currentCountry={Country.CANADA}
        onSelectCountry={Function}
      />,
    );
    expect(screen.getByTestId('select-country')).toHaveClass('extra');
  });

  it('has value: ukraine', () => {
    renderWithAll(
      <SelectCountry
        currentCountry={Country.UKRAINE}
        onSelectCountry={Function}
      />,
    );
    expect(screen.getByTestId('app-select-value')).toHaveTextContent(
      Country.UKRAINE,
    );
  });

  it('dropdown-menu: opened', () => {
    renderWithAll(
      <SelectCountry
        currentCountry={Country.CANADA}
        onSelectCountry={Function}
      />,
    );

    const wrapper = screen.getByTestId('app-select-value-wrapper');
    fireEvent.click(wrapper);

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it('dropdown-menu: closed', () => {
    renderWithAll(
      <SelectCountry
        currentCountry={Country.CANADA}
        onSelectCountry={Function}
      />,
    );
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });

  it('select usa country', async () => {
    const onSelectCountry = jest.fn();

    renderWithAll(
      <SelectCountry
        currentCountry={Country.CANADA}
        onSelectCountry={onSelectCountry}
      />,
    );

    const menuTrigger = screen.getByTestId('app-select-value-wrapper');
    fireEvent.click(menuTrigger);

    const menuOptions = await screen.findAllByTestId('dropdown-item');
    const menuOption = menuOptions.find((option) =>
      option.textContent?.includes(Country.USA),
    ) as HTMLElement;

    fireEvent.click(menuOption);
    expect(onSelectCountry).toHaveBeenCalledWith(Country.USA);
  });
});
