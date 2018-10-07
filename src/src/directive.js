// directive file


import scrollTo from "./scrollTo";
import _ from "./utils";

let bindings = []; // store binding data
// bindings 用于存储多个元素，一个应用中当为多个element绑定指令的时候很有用，统一处理所有绑定指令的元素

function deleteBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      // 数组的增删改查，可以用这个函数,splice()共三个参数,splice(start,deleteCount,item1, item2, ...)
      bindings.splice(i, 1)
      return true;
    }
  }
  return false;
}

// 遍历bindings,判断el 是否绑定到bingdings,如果有，就返回绑定指令的元素的一条数据
function findBinding(el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      return bindings[i];
    }
  }
}

function getBinding(el) {
  // 判断指令是否绑定到指定元素，如果绑定，就返回这个元素和对应数据;如果没有绑定，就生成一个对象并返回
  let binding = findBinding(el);

  if (binding) {
    return binding;
  }
  // 在push（）中可以直接赋值
  bindings.push(
    binding = {
      el: el,
      binding: {}
    }
  );

  return binding;
}
// 通过指令可以为元素绑定事件处理程序,用户点击会调用滚动构造函数
function handleClick(e) {
  // debugger
  e.preventDefault();
  // 在事件处理程序中获取指定绑定的数据
  console.log(this)
  let ctx = getBinding(this).binding;
  debugger
  // 如果元素中为指令绑定的是个字符串,则直接调用滚动方法直接滚动到指定位置
  if (typeof ctx.value === "string") {
    return scrollTo(ctx.value);
  }
  // 
  scrollTo(ctx.value.el || ctx.value.element, ctx.value);
}

// directive 另一种写法，把逻辑封装在一个函数中,
export default {
  // 只调用一次，指令第一次绑定到元素时调用。
  bind(el, binding) {
    // debugger
    //在这里可以进行一次性的初始化设置,为绑定事件处理程序
    getBinding(el).binding = binding;
    // 为每一个绑定指令的元素添加事件处理程序click
    _.on(el, "click", handleClick);
  },
  unbind(el) {
    // 从binding 中删除数据，然后删除事件处理程序
    deleteBinding(el);
    _.off(el, "click", handleClick);
  },
  // 主要是更新数据
  update(el, binding) {
    getBinding(el).binding = binding;
  },
  // 作为vue实例的全局方法
  scrollTo,
  bindings
};
