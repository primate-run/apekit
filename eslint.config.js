import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

const error = (...params) => ["error", ...params];

export default tsconfigRootDir => tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "scripts/*.js",
      "**/lib/**/*",
      "**/node_modules/**/*",
    ]
  },
  {
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir,
      },
    },
    rules: {
      "no-unused-private-class-members": "warn",
      "no-shadow": "warn",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/max-len": error({ code: 80 }),
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
      "accessor-pairs": "error",
      "no-shadow": "error",
    }
  },
);
