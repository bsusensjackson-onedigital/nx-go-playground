/* eslint-disable */

const name = 'api';
const srcRoot = `packages/${name}`;
const pathToRepoRoot = '../../';

module.exports = {
  branches: [
    'main',
    'next',
  ],
  extends: `${pathToRepoRoot}/release.config.base.js`,
  tagFormat: 'api/v${version}',
  commitPaths: [
    // REMOVING external dependencies to decrease unneeded releases and bad change logs
    // `${pathToRepoRoot}/workspace.json`,
    // `${pathToRepoRoot}/nx.json`,
    // `${pathToRepoRoot}/.nxignore`,
    // `${pathToRepoRoot}/package.json`,
    // `${pathToRepoRoot}/.prettierrc`,
    // `${pathToRepoRoot}/.prettierignore`,
    `apps/api/*`, // anything in this directory
    'libs/geometry/*',
    'libs/logger/*'
  ],
  plugins:[
    '@semantic-release/git',
    {
      assets: [`apps/api/CHANGELOG.md`],
      message:
        `release(version): Release ${name} ` +
        '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ]
};
