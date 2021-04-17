import { Tree } from '@angular-devkit/schematics';

export default function(tree: Tree, outFile: string, routes: string[]) {
  const flatRoutes = routes.join('\n');

  if (!tree.exists(outFile)) {
    tree.create(outFile, flatRoutes);
    return null;
  }

  const { content } = tree.get(outFile);

  if (content.toString() !== flatRoutes) {
    tree.overwrite(outFile, flatRoutes);
    return null;
  }

  return null;
}
