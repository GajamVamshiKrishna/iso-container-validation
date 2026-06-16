import sixfold from '@sixfold/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'vitest.config.ts'],
  },
  ...sixfold.configs.base,
  {
    plugins: {
      '@sixfold': sixfold,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.d.ts'],
        },
      },
    },
  },
  {
    files: ['**/*.test.ts'],
    plugins: { vitest },
    rules: { ...vitest.configs.recommended.rules },
  },
];
