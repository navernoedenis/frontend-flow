export function getSearchParams({
  exclude = [],
}: {
  exclude?: string[];
} = {}) {
  const searchParams = new URLSearchParams(window.location.search);
  const params = searchParams.toString();

  if (!params.length) {
    return {};
  }

  return params
    .split('&')
    .reduce<Record<string, string | number>>((acc, param) => {
      const [key, value] = param.split('=');
      const number = parseInt(value, 10);

      if (!exclude.includes(key)) {
        acc[key] = number || value;
      }

      return acc;
    }, {});
}

export function addSearchParams(params: Record<string, string> = {}): void {
  const _params = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    _params.set(key, value);
  });

  window.history.pushState(null, '', `?${_params.toString()}`);
}

export function buildSearchParams(
  params: Record<string, string | number | null | undefined> = {},
) {
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
