import BezierEasing from 'bezier-easing'
import easings from './easings'
import _ from './utils'
// 存储各种事件名称
// 退出 (quit,withdraw)
const abortEvents = [
  'mousedown',
  'wheel',
  'DOMMouseScroll',
  'mousewheel',
  'keyup',
  'touchmove'
]
// 定义初始化变量
let defaults = {
  container: 'body',
  duration: 500,
  easing: 'ease',

  offset: 0,
  cancelable: true,

  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}
// 对象的合并,外部调用setDefaults(),能够设置改变当前default，同闭包类似
export function setDefaults (options) {
  defaults = Object.assign({}, defaults, options)
}
// 滚动器 (是个闭包函数,主要定义了私有变量)
export const scroller = () => {
  let element // element to scroll to

  let container // container to scroll
  let duration // duration of the scrolling
  let easing // easing to be used when scrolling
  let offset // offset to be added (subtracted)
  let cancelable // indicates if user can cancel the scroll or not.
  let onStart // callback when scrolling is started
  let onDone // callback when scrolling is done
  let onCancel // callback when scrolling is canceled / aborted
  let x // scroll on x axis
  let y // scroll on y axis

  // 定义私有的 初始位置和目标位置变量
  let initialX // initial X of container
  let targetX // target X of container
  let initialY // initial Y of container
  let targetY // target Y of container
  let diffX // difference
  let diffY // difference

  let abort // is scrolling aborted

  let abortEv // event that aborted scrolling
  let abortFn = e => {
    // cancelable 默认为 true,
    if (!cancelable) return
    abortEv = e
    abort = true //
  }
  let easingFn

  let timeStart // time when scrolling started
  let timeElapsed // time elapsed since scrolling started

  let progress // progress

  // 获取容器元素的滚动条滚动的垂直距离
  function scrollTop (container) {
    let scrollTop = container.scrollTop

    if (container.tagName.toLowerCase() === 'body') {
      // in firefox body.scrollTop always returns 0
      // thus if we are trying to get scrollTop on a body tag
      // we need to get it from the documentElement
      scrollTop = scrollTop || document.documentElement.scrollTop
    }

    return scrollTop
  }
  // 滚动条滚动的水平距离
  function scrollLeft (container) {
    let scrollLeft = container.scrollLeft

    if (container.tagName.toLowerCase() === 'body') {
      // in firefox body.scrollLeft always returns 0
      // thus if we are trying to get scrollLeft on a body tag
      // we need to get it from the documentElement
      scrollLeft = scrollLeft || document.documentElement.scrollLeft
    }

    return scrollLeft
  }

  // 每一帧要执行的函数(在每一帧执行的过程中可以做一些相关操作)
  function step (timestamp) {
    // 如果abort变量为真，就调用done函数，1.注销container元素上所有的事件处理程序；2.设置滚动开始时间为false；
    // 初始化,abort undefined
    if (abort) return done()
    // 如果滚动在这一针取消掉，重置滚动的开始时间为当前时间戳
    if (!timeStart) timeStart = timestamp
    // 耗时(动画到了当前帧所用的时间)
    timeElapsed = timestamp - timeStart
    // 耗时/用户定义动画完成的时间 ,最大值为1；如果耗时超过用户定义的时间，则为1；  (duration 用户定义的滚动完成时间)
    progress = Math.min(timeElapsed / duration, 1)
    progress = easingFn(progress)

    // 让容器元素的滚动条在初始位置(initialY,initialX)，滚动diff距离到目标位置；每一帧滚动一定的比率，但不是增量累加滚动
    topLeft(container, initialY + diffY * progress, initialX + diffX * progress)
    // 如果耗时小于用户设置的时间，继续下一帧；否则(超过用户时间的话)的调用down())直接设置到目标位置
    timeElapsed < duration ? window.requestAnimationFrame(step) : done()
  }
  // 动画完成函数
  function done () {
    // 这一步是直接定位到目标位置()
    if (!abort) topLeft(container, targetY, targetX)
    // 重置timeStart
    timeStart = false
    //  取消事件
    _.off(container, abortEvents, abortFn)
    if (abort && onCancel) onCancel(abortEv, element)
    // 如果有完成时候的回调，则直接调用回调
    if (!abort && onDone) onDone(element)
  }
  // 让容器元素的滚动条 滚动到指定位置
  function topLeft (element, top, left) {
    if (y) element.scrollTop = top
    if (x) element.scrollLeft = left
    if (element.tagName.toLowerCase() === 'body') {
      // in firefox body.scrollTop doesn't scroll the page
      // thus if we are trying to scrollTop on a body tag
      // we need to scroll on the documentElement
      if (y) document.documentElement.scrollTop = top
      if (x) document.documentElement.scrollLeft = left
    }
  }
  // 滚动的构造函数 target:要滚动到指定的目标位置(一个元素选择器),_durration 是从指令中调用构造函数传过来的
  /* 滚动的构造函数 */
  function scrollTo (target, _duration, options = {}) {
    // debugger
    // 判断构造函数第二参数是对象还是数字
    if (typeof _duration === 'object') {
      options = _duration
    } else if (typeof _duration === 'number') {
      options.duration = _duration
    }
    // 目标元素
    element = _.$(target)

    if (!element) {
      return console.warn(
        '[vue-scrollto warn]: Trying to scroll to an element that is not on the page: ' +
          target
      )
    }

    // 容器元素，默认把body当做容器元素
    container = _.$(options.container || defaults.container)
    // 滚动需要的时间
    duration = options.duration || defaults.duration
    // 动画效果The easing to be used when animating
    easing = options.easing || defaults.easing
    // 滚动的偏移位置
    offset = options.offset || defaults.offset
    // Indicates if user can cancel the scroll or not.
    cancelable = options.hasOwnProperty('cancelable')
      ? options.cancelable !== false
      : defaults.cancelable
    // 用户可以自定义回调，如果没有就为false，
    // A callback function that should be called when scrolling has started. Receives the target element as a parameter.
    onStart = options.onStart || defaults.onStart
    // A callback function that should be called when scrolling has ended. Receives the target element as a parameter.
    onDone = options.onDone || defaults.onDone
    // A callback function that should be called when scrolling has been aborted by the user (user scrolled, clicked etc.).
    onCancel = options.onCancel || defaults.onCancel
    //
    x = options.x === undefined ? defaults.x : options.x
    y = options.y === undefined ? defaults.y : options.y

    // 分别计算容器偏移量和元素的偏移量(在页面上面的偏移量)
    var cumulativeOffsetContainer = _.cumulativeOffset(container)
    var cumulativeOffsetElement = _.cumulativeOffset(element)
    // offset is either a number or function
    if (typeof offset === 'function') {
      offset = offset()
    }
    // 默认container 为body，如果一个元素不能滚动，scrollTop is 0
    // 容器元素滚动条垂直初始位置
    initialY = scrollTop(container)
    // 目标位置都是以容器元素为参照物
    // 目标位置= 目标元素的偏移量-容器元素的偏移量(就是元素在容器中的偏移量)
    // 加上 offset 就是用户手动设置的偏移
    targetY =
      cumulativeOffsetElement.top - cumulativeOffsetContainer.top + offset
    // 容器元素滚动条水平初始位置
    initialX = scrollLeft(container)
    targetX =
      cumulativeOffsetElement.left - cumulativeOffsetContainer.left + offset
    // 初始化一个变量,退出变量
    abort = false
    // 元素相对于容器的偏移- 容器滚动条的滚动距离（也就是目标元素不需要从容器元素左上角开始滚动）
    diffY = targetY - initialY
    diffX = targetX - initialX

    if (typeof easing === 'string') {
      easing = easings[easing] || easings['ease']
    }

    easingFn = BezierEasing.apply(BezierEasing, easing)

    if (!diffY && !diffX) return
    // scroll开始的钩子函数
    if (onStart) onStart(element)
    // 为容器元素添加多个事件处理程序
    _.on(container, abortEvents, abortFn, {
      passive: true
    })
    // 把每一帧 action 放入到动画队列中
    window.requestAnimationFrame(step)
    // 返回一个匿名函数
    return () => {
      abortEv = null
      abort = true
    }
  }

  return scrollTo
}
// 返回的是构造函数(如果在此执行_scroller(),则在此返回一个匿名函数)
const _scroller = scroller()
export default _scroller
