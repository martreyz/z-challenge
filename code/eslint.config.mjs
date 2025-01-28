import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

// Import espree correctly for ESM
import * as espree from "espree";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Extends Next.js core web vitals rules
  {
    files: ["**/*.js", "**/*.jsx"], // Lint all JS/React files
    languageOptions: {
      parser: espree, // Use ESLint's default parser (espree)
      parserOptions: {
        ecmaVersion: 2023, // Use the latest ECMAScript version
        sourceType: "module", // Enable ES modules
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      // Core JavaScript Rules
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],

      // React/JSX Rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "warn",
      "react/prop-types": "off",

      // Next.js Rules
      "@next/next/no-img-element": "warn",
      "@next/next/no-page-custom-font": "warn",

      // Accessibility (a11y) Rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],

      // Prettier Rules
      "prettier/prettier": "error",
      "linebreak-style": ["error", "any"],
    },
  },
];

export default eslintConfig;
