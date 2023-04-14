type SearchParams = Record<string, string | number | null | undefined>;

export function buildSearchParams(params: SearchParams = {}) {
  return Object.entries(params).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      const result = validateSearchValue(value);
      if (result) {
        acc[key] = result;
      }
      return acc;
    },
    {},
  );
}

function validateSearchValue(value: unknown): string | null {
  switch (typeof value) {
  case 'number': {
    return value === 0 ? null : `${value}`;
  }
  case 'string': {
    const isValid = value.trim().length > 0 && value !== 'all';
    return isValid ? value : null;
  }
  default:
    return null;
  }
}
