exports.getEslint = ({
    useReact = true,
    useTs = true,
    ignorePatterns = [],
    rules = {}
} = {
    
}) => {
    return {
      extends: [
        useTs && 'plugin:@typescript-eslint/eslint-recommended',
        'standard',
        useReact && 'standard-react',
        'plugin:prettier/recommended',
        useReact && 'react-app' // @todo 拆解
      ].filter(Boolean),
      parserOptions: {
        ecmaFeatures: { legacyDecorators: true, jsx: true }
      },
      rules: {
        'no-const-assign': 'error',
        'react/prop-types': 0,
        ...rules
      },
      ignorePatterns: ['node_modules', ...ignorePatterns]
    }
  }
  