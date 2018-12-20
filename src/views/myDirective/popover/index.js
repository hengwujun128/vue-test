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

const addClickEventListener = (target, params) => {
  const click = (srcEvent) => {
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

    document.addEventListener('click', handler)
    srcEvent.stopPropagation()
  }

  target.addEventListener('click', click)

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

        addClickEventListener(target, params)
        addHoverEventListener(target, params)
      },
      unbind: function (target, binding) {
        target.$popoverRemoveHoverHandlers()
        target.$popoverRemoveClickHandlers()
      }
    })

    if (params.tooltip) {
      if (params.debug) {
        console.log('vue-js-popover | tooltip active')
      }
      Vue.component('Tooltip', Tooltip)
    }
  }
}
