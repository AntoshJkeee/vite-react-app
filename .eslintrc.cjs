module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'dist'],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['off'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
      },
    ],
  },
};
