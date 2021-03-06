import { NodeSpec } from 'prosemirror-model';
import { NodeGroups, FormatMarkdown } from './types';

export type MathAttrs = {
};

const math: NodeSpec = {
  group: NodeGroups.inline,
  // Content can have display elements inside of it for dynamic equaitons
  content: `(${NodeGroups.text} | display)*`,
  inline: true,
  draggable: false,
  // The view treat the node as a leaf, even though it technically has content
  atom: true,
  attrs: {},
  toDOM: () => ['r-equation', { inline: '' }, 0],
  parseDOM: [{
    tag: 'r-equation[inline]',
  }],
};

export const toMarkdown: FormatMarkdown = (state, node) => {
  state.write('$');
  state.renderInline(node);
  state.write('$');
};

export default math;
