// 入口文件
// 指令
import VueScrollTo from "./directive";
// 滚动器函数
import {
  setDefaults
} from "./scrollTo";

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

// 把install 作为vue指令的一个方法，返回的是个vue指令
VueScrollTo.install = install;
export default VueScrollTo;
