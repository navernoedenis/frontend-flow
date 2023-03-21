import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/wrappers';
import { Country } from '../../model/constants';

import SelectCountry from './select-country';

describe('test entities/select-country', () => {
  it('should be in the document', () => {
    renderWithAll(
      <SelectCountry
        currentCountry={Country.CANADA}
        onSelectCountry={() => {}}
      />,
    );
    expect(screen.getByTestId('app-select')).toBeInTheDocument();
  });
});
