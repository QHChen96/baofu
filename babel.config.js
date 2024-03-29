// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
export const presets = [
  [
    'taro',
    {
      framework: 'react',
      ts: true
    },
  ],
];
export const plugins = [
  [
    'import',
    {
      libraryName: 'taro-hooks',
      camel2DashComponentName: false
    },
    'taro-hooks',
  ]
];
