var _ = {
  $: function (selector) {
    return document.querySelector(selector);
  },
  on: function ($element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (var i = 0; i < events.length; i++) {
      $element.addEventListener(events[i], handler);
    }
  },
  off: function ($element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    for (var i = 0; i < events.length; i++) {
      $element.removeEventListener(events[i], handler);
    }
  }
};

function getScrollTopElement($element) {
  var top = 0;

  while ($element.offsetParent !== undefined && $element.offsetParent != null) {
    top += $element.offsetTop + ($element.clientTop != null ? $element.clientTop : 0);
    $element = $element.offsetParent;
  }

  return top;
}

function getScrollTopDocument() {
  return document.documentElement.scrollTop + document.body.scrollTop;
}

//  ScrollTo is a plugin
var ScrollTo = {
  install: function (Vue, config) {
    var settings = {
      speed: 1000,
      padding: 0,
      movingFrequency: 20
    };

    Object.assign(settings, config);

    function handleClick() {
      // debugger
      // this 指ScrollTo 对象，
      var options = this.expression.split(',');

      options = options.map(function (item) {
        if (typeof item !== 'string') {
          return item;
        }
        return item.replace(/\'/g, '');
      });

      var selector = options[0];
      var padding = (typeof options[1] === 'string') ?
        options[1].replace(/\D/g, '') :
        settings.padding;

      var $element = _.$(selector);

      if (!$element) {
        throw new Error('$element is not defined, selector="' + selector + '" ');
      }
      // hopCount:设置滚动完成需要多少步

      var hopCount = Math.ceil(settings.speed / settings.movingFrequency);
      var documentScrollTop = getScrollTopDocument();
      // 目标元素距离 / 总步数 = 每一步要滚动的距离
      var gap = (getScrollTopElement($element) - documentScrollTop - padding) / hopCount;

      if (gap === 0) {
        // Do not scroll when current position is the same as target offset.
        return;
      }
      // 循环总步数,每一步滚动的距离(滚动的距离是相等的)gap * 当前步数
      //  时间,距离 和频率问题
      for (var i = 1; i <= hopCount; i++) {
        (function (i) {
          //  每一步要走的距离,都是从0开始走;
          //  每一步需要的时间,
          //  每一步走的距离是不一样的,每一步所需时间也是不一样的,但是频率是一样的
          var hopTopPosition = gap * i;

          setTimeout(function () {
            window.scrollTo(0, hopTopPosition + documentScrollTop);
          }, settings.movingFrequency * i);
        })(i);
      }
    }

    Vue.directive('scroll-to', {
      // el：指令所绑定的元素，binding:an object
      // context is the binding
      // 所有的钩子函数会被复制到实际的**指令对象**中，而这个指令对象将会是所有钩子函数的 `this` 上下文环境。指令对象上暴露了一些有用的公开属性：
      // - **el**： 指令绑定的元素
      // - **vm**： 拥有该指令的上下文 ViewModel
      // - **expression**： 指令的表达式，不包括参数和过滤器
      // - **arg**： 指令的参数
      // - **raw**： 未被解析的原始表达式
      // - **name**： 不带前缀的指令名
      bind: function ($element, context) {
        // add element an event listener by directive
        // 注意：handleClick 绑定了上下文
        _.on($element, 'click', handleClick.bind(context));
      },

      unbind: function ($element) {
        _.off($element, 'click', handleClick);
      }
    });
  }
};

export default ScrollTo;
