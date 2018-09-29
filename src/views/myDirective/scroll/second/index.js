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
      // 
      var hopCount = Math.ceil(settings.speed / settings.movingFrequency);
      var documentScrollTop = getScrollTopDocument();
      var gap = (getScrollTopElement($element) - documentScrollTop - padding) / hopCount;

      if (gap === 0) {
        // Do not scroll when current position is the same as target offset.
        return;
      }
      // 通过设置多个定时函数，间隔一定时间调用一次,滚动一段距离
      for (var i = 1; i <= hopCount; i++) {
        (function (i) {
          var hopTopPosition = gap * i;

          setTimeout(function () {
            window.scrollTo(0, hopTopPosition + documentScrollTop);
          }, settings.movingFrequency * i);
        })(i);
      }
    }

    Vue.directive('scroll-to', {
      // context is the binding
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
