<template>
  <div>
    <h2>hello,this is jd menue</h2>

    <section class="wrapper" id="test">
      <ul>
        <li data-id="a">
          <span>家用电器1</span>
        </li>
        <li data-id="b">
          <span>家用电器2</span>
        </li>
        <li data-id="c"> <span>家用电器3</span></li>
        <li data-id="d"> <span>家用电器4</span></li>
        <li data-id="e"> <span>家用电器5</span></li>
        <li data-id="f"> <span>家用电器6</span></li>
        <li data-id="g"> <span>家用电器7</span></li>
        <li data-id="h"> <span>家用电器8</span></li>
      </ul>

      <div id="sub" class="none">

        <div id="a" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视1 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">合资品牌</a>
              <a href="#">合资品牌</a>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌1</a>
              <a href="#">互联网品牌2</a>
              <a href="#">互联网品牌3</a>
              <a href="#">互联网品牌4</a>
              <a href="#">互联网品牌5</a>
              <a href="#">互联网品牌6</a>
              <a href="#">互联网品牌6</a>
              <a href="#">互联网品牌6</a>
            </dd>
          </dl>
        </div>
        <div id="b" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视2 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>
        <div id="c" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视3 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>
        <div id="d" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视4 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>

        <div id="e" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视5 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>

        <div id="f" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视6 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>

        <div id="g" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视7 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>
        <div id="h" class="sub_content none">
          <!-- 语义化 标题-->
          <dl>
            <dt>
              <a href="#">电视8 <i>&gt;</i></a>
            </dt>
            <dd>
              <a href="#">合资品牌</a>
              <a href="#">国产品牌</a>
              <a href="#">互联网品牌</a>
            </dd>
          </dl>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      key: null
    }
  },
  created () {},
  mounted () {
    var sub = $('#sub')
    var activeRow
    var activeMenu
    // 一级菜单mouseenter,二级菜单显示
    $('#test')
      .on('mouseenter', function (e) {
        console.log('#test', 'mouseenter')
        sub.removeClass('none')
      })
      .on('mouseleave', function (e) {
        // // 隐藏二级菜单
        console.log(sub)
        sub.addClass('none')
        if (activeRow) {
          activeRow.removeClass('active')
          activeRow = null
        }
        if (activeMenu) {
          activeMenu.addClass('none')
          activeMenu = null
        }
      })
      // 事件代理
      .on('mouseenter', 'li', function (e) {
        console.log('li', 'mouseenter')
        // 如果没有选中列表项
        if (!activeRow) {
          // activeRow = $(e.target).addClass('active')
          activeRow = $(this).addClass('active')
          activeMenu = $('#' + activeRow.data('id'))
          activeMenu.removeClass('none')
        }
        activeRow.removeClass('active')
        activeMenu.addClass('none')

        activeRow = $(this)
        // console.log(activeRow)
        activeRow.addClass('active')
        activeMenu = $('#' + activeRow.data('id'))
        activeMenu.removeClass('none')
      })
  },
  methods: {
    name () {}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 200px;
  left: 50px;
  top: 50px;

  ul {
    padding: 15px 0px;
    margin: 9;
    list-style: none;
    background: #6c6669;
    color: #ffffff;
    li {
      display: block;
      height: 30px;
      line-height: 30px;
      padding-left: 12px;
      cursor: pointer;
      font-size: 14px;
      position: relative;
      // 鼠标移动之后的背景色
      &:hover {
        background: #999395;
        // background: #dddddd;
      }
      span {
        &:hover {
          color: #c81623;
        }
      }
    }
  }
  .none {
    display: none;
  }
  #sub {
    position: absolute;
    width: 600px;
    background: #f7f7f7;
    box-shadow: 2px 0 5px rgba($color: #000000, $alpha: 0.3);
    left: 200px;
    top: 0px;
    box-sizing: border-box;
    margin: 0;
    //
    dl {
      // BFC
      overflow: hidden;

      a {
        font-size: 12px;
        color: #666666;
        text-decoration: none;
        dd {
          a {
            border-left: 1px solid #effeef;
            padding: 0 10px;
            margin: 4px 0px;
          }
        }
      }
      dt {
        // 水平布局
        float: left;
        width: 70px;
        font-weight: bold;
        clear: left; // 自动换行
        position: relative;
        i {
          width: 4px;
          height: 14px;
          //简写
          font: 600 9px/14px courier;
        }
      }
      dd {
        float: left;
        margin-left: 5px;
        border-top: 1px solid #eeeeee;
        margin-bottom: 5px;
        right: 5px;
        top: 5px;
      }
    }
  }
}
</style>