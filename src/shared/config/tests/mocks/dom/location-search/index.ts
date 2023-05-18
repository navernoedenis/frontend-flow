export function locationSearch(search: string) {
  Object.defineProperty(window, 'location', {
    value: { search },
    writable: true,
  });
}
