export interface Coords {
  top: number;
  right: number;
}

export const calcCoords = (target: HTMLElement): Coords => {
  const rect = target.getBoundingClientRect();

  return {
    top: rect.bottom,
    right: window.innerWidth - rect.right,
  };
};
