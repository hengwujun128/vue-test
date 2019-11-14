// directive file

import scrollTo from './scrollTo'
import _ from './utils'
/*
// bindings 存储绑定该指令的元素的数组，每个元素是个对象
    {
      el: el,
      binding: {}
    }
 */
// 一个应用中当为多个element绑定指令的时候很有用，统一处理所有绑定指令的元素

let bindings = [] // store binding data

function deleteBinding (el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      // 数组的增删改查，可以用这个函数,splice()共三个参数,splice(start,deleteCount,item1, item2, ...)
      bindings.splice(i, 1)
      return true
    }
  }
  return false
}

// 遍历bindings,判断el 是否绑定到bingdings,如果有，就返回绑定指令的元素的一条数据
function findBinding (el) {
  for (let i = 0; i < bindings.length; ++i) {
    if (bindings[i].el === el) {
      return bindings[i]
    }
  }
}
/* 1.工厂方法,判断当前元素是否绑定了该指令,返回一个对象 */
function getBinding (el) {
  // 判断指令是否绑定到指定元素，如果绑定，就返回这个元素和对应数据;
  let binding = findBinding(el)

  if (binding) {
    return binding
  }
  // 如果没有绑定，就生成一个对象并返回
  // 在push（）中可以直接赋值
  bindings.push(
    (binding = {
      el: el,
      binding: {}
    })
  )

  return binding
}
// 通过指令可以为元素绑定事件处理程序,用户点击会调用滚动构造函数
function handleClick (e) {
  // debugger
  e.preventDefault()
  // 在事件处理程序中获取指定绑定的数据
  console.log(this)
  // this代表当前元素
  let ctx = getBinding(this).binding
  // debugger
  // 如果元素中为指令绑定的是个字符串,则直接调用滚动方法直接滚动到指定位置
  if (typeof ctx.value === 'string') {
    return scrollTo(ctx.value)
  }
  // 指令为元素绑定事件处理程序中,直接通过调用函数的形式滚动到指定位置
  scrollTo(ctx.value.el || ctx.value.element, ctx.value)
}

// directive 另一种写法，把逻辑封装在一个函数中,
export default {
  // 只调用一次，指令第一次绑定到元素时调用。
  /* el：指令所绑定的元素，可以用来直接操作 DOM 。
    binding：一个对象，包含以下属性：
      name：指令名，不包括 v- 前缀。
      value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
      oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
      expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
      arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
      modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
   */
  bind (el, binding) {
    // debugger
    // 在这里可以进行一次性的初始化设置,把binding和el,合并为一个对象,并添加到数组bindings 数组中
    getBinding(el).binding = binding
    // 为每一个绑定指令的元素添加事件处理程序click
    _.on(el, 'click', handleClick)
  },
  unbind (el) {
    // 从binding 中删除数据，然后删除事件处理程序
    deleteBinding(el)
    _.off(el, 'click', handleClick)
  },
  // 主要是更新数据
  update (el, binding) {
    getBinding(el).binding = binding
  },
  // 作为vue实例的全局方法
  scrollTo, // 滚动的构造方法作为指令属性,对外集成到 vue 实例的一个全局方法
  bindings
}
