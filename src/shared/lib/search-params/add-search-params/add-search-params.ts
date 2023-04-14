type SearchParams = Record<string, string>;

export function addSearchParams(params: SearchParams = {}): void {
  const _params = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    _params.set(key, value);
  });

  window.history.pushState(null, '', `?${_params.toString()}`);
}
