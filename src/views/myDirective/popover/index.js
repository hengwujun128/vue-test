import Popover from './Popover.vue'
import Tooltip from './tooltip.vue'
import {
  events
} from './bus'

const defaultPosition = 'bottom'
// 使用函数参数默认值
const prepareBinding = ({
  arg = '',
  modifiers = {},
  value = {}
}) => {
  let mods = Object.keys(modifiers)
  let name = typeof value === 'object' && value.name ? value.name : arg
  let position = mods[0] || value.position || defaultPosition

  return {
    name,
    position,
    value
  }
}
// 通过一个函数为 dom 添加事件
const addClickEventListener = (target, params) => {

  const click = (srcEvent) => {
    // 在原生事件处理程序中,通过 eventBus 在发射事件;然后在组件中接受;
    // 前提是这个组件已经被注入到 vue 实例中,事实上却是如此
    events.$emit('show:click', { ...params,
      target,
      srcEvent
    })

    let handler = (srcEvent) => {
      events.$emit('hide:click', { ...params,
        target,
        srcEvent
      })
      document.removeEventListener('click', handler)
    }
    // 在为 dom 添加的原生事件处理程序中,又为 document 对象添加 click 事件;用于点击页面任何地方,隐藏 tooltip;
    // 同时,隐藏掉 tooltip 之后,在删除document 上的事件
    document.addEventListener('click', handler)
    // 原生事件处理程序中要阻止事件冒泡
    srcEvent.stopPropagation()
  }
  // 为 dom 元素添加事件
  target.addEventListener('click', click)
  //还可以为 dom 元素对象添加一个属性函数,用于移除 dom 上的原生 click 事件;一般都是在指令 unbind 的时候触发
  target.$popoverRemoveClickHandlers = () => {
    target.removeEventListener('click', click)
  }
}

const addHoverEventListener = (target, params) => {
  const mouseenter = (srcEvent) => {
    events.$emit('show:hover', { ...params,
      target,
      srcEvent
    })
  }

  const mouseleave = (srcEvent) => {
    events.$emit('hide:hover', { ...params,
      target,
      srcEvent
    })
  }
  // mouse 事件有两个;也是在原生的事件处理程序中发射事件,然后在组件中接受
  // 但是关闭的时候,不需要再 document 对象上添加 click 关闭,移除就关闭
  target.addEventListener('mouseenter', mouseenter)
  target.addEventListener('mouseleave', mouseleave)

  target.$popoverRemoveHoverHandlers = () => {
    target.removeEventListener('mouseenter', mouseenter)
    target.removeEventListener('mouseleave', mouseleave)
  }
}
// plugin
export default {
  install(Vue, params = {}) {
    // 监听resize
    document.addEventListener('resize', (event) => {
      events.$emit('hide', {
        srcEvent: event
      })
    })
    // 向vue 实例全局添加Popover组件
    Vue.component('Popover', Popover)
    // 向 vue 实例全局添加指令,指令是个对象, plugin 也是个对象
    Vue.directive('popover', {
      bind: function (target, binding) {
        // 使用一个函数解析指令的 binding 对象,返回一个对象
        let params = prepareBinding(binding)
        // 使用一个函数为绑定的 dom 元素添加click事件,hover事件
        addClickEventListener(target, params)
        //  使用一个函数为绑定的 dom 元素添加hover事件,hover事件
        addHoverEventListener(target, params)
      },
      unbind: function (target, binding) {
        target.$popoverRemoveHoverHandlers()
        target.$popoverRemoveClickHandlers()
      }
    })

    //通过传入的参数,注入一个组件
    if (params.tooltip) {
      if (params.debug) {
        console.log('vue-js-popover | tooltip active')
      }
      Vue.component('Tooltip', Tooltip)
    }
  }
}
