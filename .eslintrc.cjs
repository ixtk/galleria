/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
}
