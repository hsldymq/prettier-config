
// 参考: https://prettier.io/docs/en/options
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  endOfLine: 'lf',
  singleAttributePerLine: false,

  overrides: [
    // Disable formatting JSONC with trailing commas (discouraged by the format)
    // See https://github.com/prettier/prettier/issues/15956#issuecomment-1987146114
    { files: ['*.jsonc'], options: { trailingComma: 'none' } },
  ],
} 
