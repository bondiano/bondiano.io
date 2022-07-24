const OFF = 'off';
const ERROR = 'error';
const WARN = 'warn';

module.exports = {
  root: true,
  plugins: ['import'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:sonarjs/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': WARN,
    'no-debugger': WARN,
    'max-len': [
      ERROR,
      120,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-implicit-coercion': ERROR,
    'no-else-return': ERROR,
    'no-duplicate-imports': [ERROR, { includeExports: true }],
    'import/named': WARN,
    'import/first': ERROR,
    'import/no-mutable-exports': ERROR,
    'import/no-self-import': ERROR,
    'import/no-named-default': ERROR,
    'import/order': [
      ERROR,
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'type', 'index', 'object'],
        'newlines-between': 'always',
      },
    ],
    'sonarjs/no-duplicate-string': OFF,
  },
};
