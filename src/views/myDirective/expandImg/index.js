let _ = {
  $ (selector) {
    return document.querySelector(selector)
  },
  on ($element, events, handler) {
    // if (events instanceof Array) {
    //   events = [events]
    // }
    // for (let i = 0; i < events.length; i++) {
    //   $element.addEventListener(events[i], handler)
    // }
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (var i = 0; i < events.length; i++) {
      $element.addEventListener(events[i], handler)
    }
  },
  off ($element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (let i = 0; i < events.length; i++) {
      $element.removeEventListener(events[i], handler)
    }
  }
}
const defaultComponentName = 'show-big-image'
let ShowBigImage = {
  install (Vue, config) {
    let settings = {

    }
    Object.assign(settings, config)

    function handleClick () {
      // var options = this.expression;
      var value = this.value
    }
    Vue.directive('show-big-image', {
      bind ($element, context) {
        _.on($element, 'click', handleClick.bind(context))
      },
      unbind ($element) {
        _.off($element, 'click', handleClick)
      }
    })
  }
}
export default ShowBigImage
