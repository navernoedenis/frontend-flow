declare const __HOST__: string;
declare const __IS_DEV__: boolean;

declare module '*.svg' {
  import React = require('react');

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.svg?inline' {
  const content: string;
  export default content;
}

declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}
