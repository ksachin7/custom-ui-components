module.exports = {
  // Indicates this is the root ESLint configuration file
  root: true,

  // Specifies the environments where ESLint will run
  env: {
    browser: true, // Enables browser globals like `window` and `document`
    es2020: true, // Enables ES2020 global variables and syntax
    jest: true, // Enables Jest testing environment
    node: true // Enables Node.js global variables including 'global'
  },

  // Extends predefined configurations
  extends: [
    'eslint:recommended', // Recommended ESLint rules
    'plugin:react/recommended', // Recommended React rules
    'plugin:react/jsx-runtime', // JSX runtime rules
    'plugin:react-hooks/recommended' // Recommended React Hooks rules
  ],

  // Specifies files and directories to ignore during linting
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // Configures parser options
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module' // Treat files as ECMAScript modules
  },

  // Provides additional settings
  settings: {
    react: {
      version: '18.2' // Specifies the React version for eslint-plugin-react
    }
  },

  // Specifies ESLint plugins
  plugins: ['react-refresh'],

  // Configures ESLint rules
  rules: {
    'react/jsx-no-target-blank': 'off', // Disable warning for target="_blank"
    // "no-unused-vars": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true } // Allow constant export with React Refresh
    ],
    'react/react-in-jsx-scope': 'error' // Require React to be in scope for JSX
  }
};
