module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'react-app',
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['react', 'import', 'jsx-a11y'],
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      'no-underscore-dangle': 'off',
      'react/jsx-filename-extension': [
          'error',
          {
              extensions: ['.tsx']
          }
      ],
      'import/extensions': [
          'error',
          'ignorePackages',
          {
              'tsx': 'never',
              'ts': 'never'
          }
      ],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {}
        }
    }
  }