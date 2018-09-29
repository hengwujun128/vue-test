// 入口文件中引入指令,引入 js 文件
// 指令
import VueScrollTo from "./directive";
// 
import {
  setDefaults
} from "./scrollTo";
// 每个 plugin 都包含一个 install 方法的对象
const install = function (Vue, options) {
  if (options) setDefaults(options);
  // 向vue 实例全局注入指令
  Vue.directive("scroll-to", VueScrollTo);
  // 向vue实例全局添加方法
  Vue.prototype.$scrollTo = VueScrollTo.scrollTo;
};

// 浏览器环境下使用，把vue component注册为全局变量
if (typeof window !== "undefined" && window.Vue) {
  debugger
  window.VueScrollTo = VueScrollTo;
  window.VueScrollTo.setDefaults = setDefaults;
  Vue.use(install);
}

// 把install 作为vue指令的一个方法，返回的是个vue指令,把 指令作为一个 plugin
VueScrollTo.install = install;
export default VueScrollTo;
