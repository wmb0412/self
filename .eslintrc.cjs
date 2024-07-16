module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-duplicate-enum-values': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'space-infix-ops': ['warn', { int32Hint: false }],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'always'],
  },
}
