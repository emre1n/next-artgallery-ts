// prettier.config.js

// npm install -D prettier-plugin-tailwindcss
// npm install -D @trivago/prettier-plugin-sort-imports

module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  printWidth: 80,
  tabWidth: 2,
  plugins: [require('prettier-plugin-tailwindcss')],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^next',
    '^(?:\\./)*(?:\\../)*components/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^(?:\\./)*(?:\\../)*pages/(.*)$',
    '^(?:\\./)*(?:\\../)*data/(.*)$',
    '^(?:\\./)*(?:\\../)*hooks/(.*)$',
    '^(?:\\./)*(?:\\../)*utils/(.*)$',
    '^(?:\\./)*(?:\\../)*lib/(.*)$',
    '^(?:\\./)*(?:\\../)*types/(.*)$',
    '^(?:\\./)*(?:\\../)*styles/(.*)$',
    '^\\./.*\\.(css|scss|less)$',
    '^(?:\\./)*(?:\\../)*assets/(.*)$',
    '^\\./.*\\.(svg|png|jpg|jpeg|gif|ico|webp|avif)$',
    '^\\./.*\\.(ttf|otf|eot|woff|woff2)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
