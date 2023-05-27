import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect } from '@/shared/ui/app-select';
import { Country } from '../../../model/constants';
import type { CountriesRecord, CountryOption } from '../../../model/types';

interface CountrySelectProps {
  className?: string;
  currentCountry: Country;
  isDisabled?: boolean;
  onSelectCountry: (country: Country) => void;
  title?: string;
}

function CountrySelect({
  className = '',
  currentCountry,
  isDisabled = false,
  onSelectCountry,
  title = '',
}: CountrySelectProps) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'entities.country',
  });

  const countriesRecord: CountriesRecord = useMemo(
    () => ({
      [Country.CANADA]: t(Country.CANADA),
      [Country.FRANCE]: t(Country.FRANCE),
      [Country.GERMANY]: t(Country.GERMANY),
      [Country.SPAIN]: t(Country.SPAIN),
      [Country.UKRAINE]: t(Country.UKRAINE),
      [Country.USA]: t(Country.USA),
    }),
    [t],
  );

  const countryOptions: CountryOption[] = useMemo(
    () => Object.entries(countriesRecord).map(([key, translate]) => ({
      title: translate,
      value: key,
    })),
    [countriesRecord],
  );

  return (
    <AppSelect
      className={className}
      data-testid="select-country"
      isDisabled={isDisabled}
      onSelect={(value) => onSelectCountry(value as Country)}
      options={countryOptions}
      title={title}
      value={countriesRecord[currentCountry].toLowerCase()}
    />
  );
}

export default CountrySelect;
