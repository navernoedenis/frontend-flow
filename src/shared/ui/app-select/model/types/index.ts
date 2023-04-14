export interface AppSelectOption<T extends string> {
  icon?: JSX.Element;
  title: string;
  value: T;
}
