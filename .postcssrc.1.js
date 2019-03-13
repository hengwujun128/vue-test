// https://github.com/michael-ciniawsky/postcss-load-config
/* 
postcss-px-to-viewport-lagou 这个可以结合第三方 ui

 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    'postcss-write-svg': {
      uft8: false
    },
    'postcss-cssnext': {},
    // bug 与第三方 ui 库不兼容
    // 'postcss-px-to-viewport-opt': {
    //   viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    //   viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
    //   unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    //   viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
    //   selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    //   minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    //   mediaQuery: false, // 允许在媒体查询中转换`px`
    //   exclude: /(\/|\\)(node_modules)(\/|\\)/
    // },
    'postcss-px-to-viewport-lagou': {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw,也可以用 vm
      propertyBlacklist: ['border'], // 指定不转换为视窗单位的属性，可以自定义，可以无限添加,建议定义一至两个通用的类名
      // selectorBlackList: ['.ignore', 'weui'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      LibraryUI: ['element-ui'], // 使用的第三方ui库
      libraryRoot: 'node_modules', // 使用的第三方ui库，目录
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
    'postcss-viewport-units': {},
    cssnano: {
      preset: 'advanced',
      autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
      'postcss-zindex': false
    }
  }
}
