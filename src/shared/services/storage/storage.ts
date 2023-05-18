function get(storage: globalThis.Storage) {
  return function get<T>(key: string): T | null {
    const data = storage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  };
}

function remove(storage: globalThis.Storage) {
  return function remove(...keys: string[]): void {
    keys.forEach((key) => storage.removeItem(key));
  };
}

function save(storage: globalThis.Storage) {
  return function save<T>(key: string, data: T): void {
    storage.setItem(key, JSON.stringify(data));
  };
}

export const Storage = {
  local: {
    get: get(localStorage),
    remove: remove(localStorage),
    save: save(localStorage),
  },
  session: {
    get: get(sessionStorage),
    remove: remove(sessionStorage),
    save: save(sessionStorage),
  },
};
