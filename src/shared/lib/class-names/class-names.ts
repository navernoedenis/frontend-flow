export function classNames(
  className: string,
  conditions: Record<string, boolean | null | undefined> = {},
) {
  const classes = Object.entries(conditions)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

  return [className, ...classes].join(' ');
}
