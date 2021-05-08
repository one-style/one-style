exports.getEslint = ({
    useReact = true,
    useTs = true,
    ignorePatterns = [],
    rules = {},
    useJest = true,
} = {
    
}) => {
    return {
      extends: [
        useTs && 'plugin:@typescript-eslint/eslint-recommended',
        'standard',
        useReact && 'standard-react',
        'plugin:prettier/recommended',
        useReact && 'react-app',
        useJest && 'plugin:jest/all'
      ].filter(Boolean),
      parserOptions: {
        ecmaFeatures: { legacyDecorators: true, jsx: true }
      },
      rules: {
        'no-const-assign': 'error',
        'react/prop-types': 0,
        ...rules
      },
      ignorePatterns: ['node_modules', ...ignorePatterns],
      parser: useTs ? '@typescript-eslint/parser' : 'babel-eslint',
      env: useJest ? {
        'jest/globals': true,
      } : {},
    }
  }
  