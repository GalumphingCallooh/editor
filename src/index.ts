// Note: Sometimes you need to ensure that the libs are exactly the same
//       Exporting the `prosemirror-model` schema from here does the trick.
export { Schema } from 'prosemirror-model';

export { nodes, marks } from './schema';
export * as Nodes from './nodes';

export { fromHTML, toHTML, migrateHTML } from './html';
export { fromMarkdown, toMarkdown } from './markdown';
