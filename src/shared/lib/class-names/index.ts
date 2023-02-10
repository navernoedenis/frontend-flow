export function classNames(
  className: string,
  conditions: Record<string, boolean | null | undefined> = {}
) {
  const aditionals = Object.entries(conditions)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);

  return [className, ...aditionals].join(' ');
}
