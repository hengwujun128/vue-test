// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection

// 判断环境是否支持响应式属性
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

// es6 语法
export default {
  // 使用$()获取dom
  $(selector) {
    if (typeof selector !== "string") {
      return selector;
    }
    // selector 为css选择器字符串
    return document.querySelector(selector);
  },
  // 自定义添加事件处理程序方法:可以为一个元素绑定多个事件处理程序;可以为事件处理程序添加参数
  on(element, events, handler, opts = {
    passive: false
  }) {
    // Array.isArray() 也可以判断
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(
        events[i],
        handler,
        supportsPassive ? opts : false
      );
    }
  },
  // 自定义删除事件处理程序
  off(element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (let i = 0; i < events.length; i++) {
      element.removeEventListener(events[i], handler);
    }
  },
  // cumulative 累积偏移量(元素在页面上的偏移量)
  cumulativeOffset(element) {
    let top = 0;
    let left = 0;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      // 如果有祖先定位元素，就循环累加

      element = element.offsetParent;
    } while (element);

    return {
      top: top,
      left: left
    };
  }
};
