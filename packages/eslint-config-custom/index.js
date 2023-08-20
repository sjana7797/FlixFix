module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "turbo",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
