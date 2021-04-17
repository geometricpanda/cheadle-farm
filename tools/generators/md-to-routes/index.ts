import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import getRoutes from './get-routes';
import createRoutes from './create-routes';

export default function(schema: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return getRoutes(schema.prismic)
      .then(routes => createRoutes(tree, schema.outFile, routes));
  };
}
