module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    "prettier/prettier": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}