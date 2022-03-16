module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ["my-lint"],
  rules: {
    "no-undef": 0,
    "my-lint/func-prefix-matching": [
      1,
      {
        include: ["to"],
        exclude: ["excludeSomeFunction"],
        message: "",
      },
    ],
  },
};
