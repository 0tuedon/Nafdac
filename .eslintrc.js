module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2021,
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'error'
  },
  settings:
  {
    react: {
      version: 'detect'
    }
  }
}
