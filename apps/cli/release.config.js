/* eslint-disable */

const name = 'cli';
const srcRoot = `packages/${name}`;
const pathToRepoRoot = '../../';

module.exports = {
  branches: [
    'main',
    'next',
  ],
  extends: `${pathToRepoRoot}/release.config.base.js`,
  tagFormat: 'cli/v${version}',
  commitPaths: [
    // REMOVING external dependencies to decrease unneeded releases and bad change logs
    // `${pathToRepoRoot}/workspace.json`,
    // `${pathToRepoRoot}/nx.json`,
    // `${pathToRepoRoot}/.nxignore`,
    // `${pathToRepoRoot}/package.json`,
    // `${pathToRepoRoot}/.prettierrc`,
    // `${pathToRepoRoot}/.prettierignore`,
    `apps/cli/*`, // anything in this directory
    'libs/geometry/*'
  ],
};
