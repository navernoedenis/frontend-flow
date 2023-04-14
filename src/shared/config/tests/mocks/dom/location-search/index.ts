export function mockLocationSearch(search: string) {
  Object.defineProperty(window, 'location', {
    value: { search },
    writable: true,
  });
}
