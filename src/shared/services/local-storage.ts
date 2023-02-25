function get<T>(key: string) {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
}

function save<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

function remove(key: string): void {
  localStorage.removeItem(key);
}

export const LocalStorage = {
  get,
  save,
  remove,
};
