import prettier from "eslint-plugin-prettier";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "prettier"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.jest,
            jQuery: true,
            $: true,
        },

        parser: babelParser,
        ecmaVersion: 2018,
        sourceType: "module",
    },

    rules: {
        "max-len": 0,
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "never"],
        "no-unused-vars": 1,
        "no-prototype-builtins": 0,
        "arrow-parens": ["warn", "as-needed"],

        "prefer-const": [1, {
            destructuring: "any",
            ignoreReadBeforeAssign: false,
        }],
    },
}];