type ParamsRecord = Record<string, string | number>;

interface GetSearchParamsProps {
  exclude?: string[];
}

export function getSearchParams({ exclude = [] }: GetSearchParamsProps = {}) {
  const searchParams = new URLSearchParams(window.location.search);
  const params = searchParams.toString();

  if (!params.length) {
    return {};
  }

  return params.split('&').reduce<ParamsRecord>((acc, param) => {
    const [key, value] = param.split('=');
    const number = parseInt(value, 10);

    if (!exclude.includes(key)) {
      acc[key] = number || value;
    }

    return acc;
  }, {});
}
