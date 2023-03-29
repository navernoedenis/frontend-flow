export interface Coords {
  top: number;
  right: number;
  width?: number;
}

export const calcCoords = (target: HTMLElement, width = false): Coords => {
  const rect = target.getBoundingClientRect();
  const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

  const coords: Coords = {
    top: rect.bottom + window.scrollY,
    right: window.innerWidth - window.scrollX - scrollbarWidth - rect.right,
  };

  if (width) {
    coords.width = rect.width;
  }

  return coords;
};
