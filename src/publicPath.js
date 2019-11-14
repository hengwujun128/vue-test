// __webpack_public_path__ = 'www.baidu.com'
// 获取 meta 元素
var $path = document.querySelector('meta[name="AppPublic"]')
// 如果该 meta 元素存在，则获取其 content 的路径
// 如果该 meta 元素不存在，则为本地路径
/* eslint-disable */
__webpack_public_path__ = $path
  ? $path.getAttribute('content') + '/app/js/'
  : '/'
// 从该参数的使用上可以了解到，上面 meta 元素，本地可以不添加
// js获取不到执行本地环境路径，js获取成功则配置具体环境路径

// __webpack_public_path__ 的添加位置需要注意
// 最好是添加在调用按需加载的文件里
