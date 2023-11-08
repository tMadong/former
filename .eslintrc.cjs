module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:perfectionist/recommended-natural",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["perfectionist"],
  rules: {
    "perfectionist/sort-objects": [
      "error",
      {
        type: "natural",
        order: "desc",
      },
    ],
  },
};
