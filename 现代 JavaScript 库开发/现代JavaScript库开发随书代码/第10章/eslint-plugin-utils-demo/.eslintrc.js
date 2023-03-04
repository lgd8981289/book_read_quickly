module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@jslib-book/utils"],
    extends: ["eslint:recommended"],
    rules: {
        "@jslib-book/utils/type-typeof-limit": 2,
        "@jslib-book/utils/type-instanceof-limit": 2,
        "@jslib-book/utils/no-same-function": 2,
    },
};
