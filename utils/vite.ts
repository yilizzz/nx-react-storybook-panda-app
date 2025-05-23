import { builtinModules } from 'node:module';
import path from 'path';

const pkg = require('../package.json');

const omitPackages = (keys: string[], ignore: string[] = []) =>
  keys.filter((key) => !ignore.includes(key));

export function getRootExternal(ignore: string[] = []) {
  const externalPackages = [
    ...builtinModules,
    ...builtinModules.map((name) => `node:${name}`),
    ...omitPackages(Object.keys(pkg.dependencies || {}), ignore),
    ...omitPackages(Object.keys(pkg.peerDependencies || {}), ignore),
    ...omitPackages(Object.keys(pkg.devDependencies || {}), ignore),
  ];
  return [
    ...externalPackages.map(
      (packageName) => new RegExp(`^${packageName}(\/.*)?`)
    ),
  ];
}
