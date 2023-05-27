export function makeGetRequest<T>(path: string, response: T) {
  return {
    url: `${__HOST__}${path}`,
    method: 'GET',
    status: 200,
    response,
  };
}
