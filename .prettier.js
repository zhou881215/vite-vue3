module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
  husky: {
    hooks: {
      "pre-commit": "lint-staged",
    },
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": ["yarn lint", "prettier --write", "git add"],
  },
};
