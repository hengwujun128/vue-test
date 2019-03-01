// https://github.com/michael-ciniawsky/postcss-load-config

// 通过Vue-cli构建的项目，在项目的根目录下有一个.postcssrc.js，默认情况下已经有了 
// postcssrc

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // "postcss-aspect-ratio-mini": {}, 
    // postcss-write-svg插件主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background配合SVG绘制的矢量图来做1px的相关处理
    "postcss-write-svg": {
      utf8: false
    },
    // postcss-cssnext其实就是cssnext。该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理(deprecating cssnext)
    "postcss-cssnext": {},
    // 
    "postcss-px-to-viewport": {
      viewportWidth: 750,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750  ,那么100vw = 750px，即1vw = 7.5px
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',    // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore','hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false       // 允许在媒体查询中转换`px`
    }, 
    // "postcss-viewport-units":{},
    // cssnano主要用来压缩和清理CSS代码。在Webpack中，cssnano和css-loader捆绑在一起，所以不需要自己加载它。
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    },

    // to edit target browsers: use "browserslist" field in package.json
    // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false
    // "autoprefixer": {}
  }
}
