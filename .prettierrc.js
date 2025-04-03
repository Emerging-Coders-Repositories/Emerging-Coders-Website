module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  jsxSingleQuote: true,
  proseWrap: 'always',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^(common|pages)/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
