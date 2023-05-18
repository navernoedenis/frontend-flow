import type { PluginObj, PluginPass } from '@babel/core';

interface PluginParams extends PluginPass {
  opts: {
    attributes: string[];
  };
}

export default function babelRemoveAttributes(): PluginObj<PluginParams> {
  return {
    visitor: {
      JSXAttribute(path, state) {
        const { name: attribute } = path.node.name;
        const { attributes = [] } = state.opts;

        if (attributes.includes(attribute as string)) {
          path.remove();
        }
      },
    },
  };
}
