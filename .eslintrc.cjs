module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:perfectionist/recommended-natural",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "perfectionist"],
  rules: {
    "perfectionist/sort-objects": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: ["id", "top", "path", "element", "unknown", "flags", "methods"],
        "custom-groups": {
          id: ["id"],
          top: ["type", "key", "name"],
          path: ["path"],
          element: ["element"],
          flags: ["is*"],
          methods: ["on*", "hand*"],
        },
      },
    ],

    "perfectionist/sort-jsx-props": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: [
          "id",
          "top",
          "multiline",
          "unknown",
          "flags",
          "shorthand",
          "methods",
          "style",
        ],
        "custom-groups": {
          id: ["id"],
          top: ["type", "key", "name"],
          flags: ["is*"],
          methods: ["on*", "hand*"],
          style: ["style"],
        },
      },
    ],

    "perfectionist/sort-object-types": [
      "error",
      {
        type: "natural",
        order: "asc",
        groups: ["id", "top", "unknown", "flags", "methods"],
        "custom-groups": {
          id: ["id"],
          top: ["type", "key", "name"],
          flags: ["is*"],
          methods: ["on*", "hand*"],
        },
      },
    ],

    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "type",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],

        "internal-pattern": ["#*/**"],
      },
    ],

    "react/no-multi-comp": [2, { ignoreStateless: true }],

    "react/react-in-jsx-scope": "off",

    "react/jsx-key": ["error"],

    "react/function-component-definition": [
      "warn",
      { namedComponents: "function-declaration" },
    ],

    "react/jsx-no-useless-fragment": "error",

    "arrow-body-style": ["error", "as-needed"],

    "no-multi-spaces": "error",
    "no-console": "error",

    "no-restricted-syntax": [
      "error",
      {
        selector: "ExportDefaultDeclaration",
        message: "Prefer named exports",
      },
    ],
  },
};

