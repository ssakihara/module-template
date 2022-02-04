// eslint-disable-next-line no-undef
module.exports = {
  analyzeCommits: {
    releaseRules: [
      { breaking: true, release: 'major' },
      { tag: 'Breaking', release: 'major' },
      {
        type: 'update',
        release: 'minor',
      },
      {
        type: 'refactor',
        release: 'patch',
      },
      {
        type: 'fix',
        release: 'patch',
      },
    ],
    parserOpts: {
      headerPattern: /^\[(.*?)\]()(.*?)$/,
    },
  },
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
