module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/attribute-hyphenation": "warn",
    "vue/attributes-order": "warn",
    "vue/block-tag-newline": "warn",
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/src/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
};
