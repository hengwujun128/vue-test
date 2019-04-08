<template>
  <div>
    <h2>hello,this is a base echart</h2>
    <div class="echartWrapper" id="echartWrapper" style="width: 600px;height:400px;"></div>
    <div class="echartWrapper" id="echartWrapper2" style="width: 600px;height:400px;"></div>
    <div class="echartWrapper" id="echartWrapper3" style="width: 600px;height:400px;"></div>
    <div class="echartWrapper" id="echartWrapper4" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  data () {
    return {

    }
  },
  mounted () {
    /* 
    ECharts 提供了丰富的自定义配置选项，并且能够从全局(setOption())、系列、数据三个层级去设置数据图形的样式
    */
    this.init()
    this.pieInit()
    this.pieInit2()
    this.pieInit4()
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      var myChart=echarts.init(document.getElementById('echartWrapper'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5,20,36,10,10,20]
        }]
      });
    },
    pieInit () {
      var myChart=echarts.init(document.getElementById('echartWrapper2'));

      myChart.setOption({
        backgroundColor: '#2c343c',// 背景色是全局的，所以直接在 option 下设置 backgroundColor
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)'//文本的样式可以设置全局的 textStyle。
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',//支持通过设置 roseType 显示成南丁格尔图。

            //也可以每个系列分别设置，每个系列的文本设置在 label.textStyle。
            label: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            },
            // 饼图的话还要将标签的视觉引导线的颜色设为浅色。
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.8)'
              }
            },

            //ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置。例如阴影的样式可以通过下面几个配置项设置：
            /* 
              1.itemStyle的emphasis是鼠标 hover 时候的高亮样式。
              2.扇形的颜色也是在 itemStyle 中设置：
            */
            itemStyle: {
              // 阴影的大小
              // shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              // shadowColor: 'rgba(0, 0, 0, 0.5)',
              emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              // 设置扇形的颜色
              // color: '#c23531',
            },
            data: [
              { value: 235,name: '视频广告' },
              { value: 274,name: '联盟广告' },
              { value: 310,name: '邮件营销' },
              { value: 335,name: '直接访问' },
              { value: 400,name: '搜索引擎' }
            ]
          }
        ]
      })
    },
    pieInit2 () {
      var myChart=echarts.init(document.getElementById('echartWrapper3'),'dark');
      myChart.setOption({
        backgroundColor: '#2af',// 背景色是全局的，所以直接在 option 下设置 backgroundColor
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)'//文本的样式可以设置全局的 textStyle。
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',//支持通过设置 roseType 显示成南丁格尔图。

            //也可以每个系列分别设置，每个系列的文本设置在 label.textStyle。
            label: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            },
            // 饼图的话还要将标签的视觉引导线的颜色设为浅色。
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.8)'
              }
            },

            //ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置。例如阴影的样式可以通过下面几个配置项设置：
            /* 
              1.itemStyle的emphasis是鼠标 hover 时候的高亮样式。
              2.扇形的颜色也是在 itemStyle 中设置：
            */
            itemStyle: {
              // 阴影的大小
              // shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              // shadowColor: 'rgba(0, 0, 0, 0.5)',
              emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              // 设置扇形的颜色
              // color: '#c23531',
            },
            // ECharts 中每个扇形颜色的可以通过分别设置 data 下的数据项实现。
            data: [
              {                value: 235,
                name: '视频广告',
                itemStyle: {
                  color: '#ddd'
                }
              },
              {                value: 274,name: '联盟广告',itemStyle: {
                  color: 'green'
                }              },
              {                value: 310,name: '邮件营销',itemStyle: {
                  color: 'yellow'
                }              },
              {                value: 335,name: '直接访问',itemStyle: {
                  color: '#eaf'
                }              },
              {                value: 400,name: '搜索引擎',itemStyle: {
                  color: '#ebc'
                }              }
            ]
          }
        ]
      })
    },
    pieInit4 () {
      let option={
        legend: {},
        tooltip: {},
        dataset: {
          // 这里指定了维度名的顺序(key 值)，从而可以利用默认的维度到坐标轴的映射。
          // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
          dimensions: ['product','2015','2016','2017'],

          source: [
            { product: 'Matcha Latte','2015': 43.3,'2016': 85.8,'2017': 93.7 },
            { product: 'Milk Tea','2015': 83.1,'2016': 73.4,'2017': 55.1 },
            { product: 'Cheese Cocoa','2015': 86.4,'2016': 65.2,'2017': 82.5 },
            { product: 'Walnut Brownie','2015': 72.4,'2016': 53.9,'2017': 39.1 }
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: 'category' },
        // // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      };
      var myChart=echarts.init(document.getElementById('echartWrapper4'));
      myChart.setOption(option)

    }
  },

}
</script>

<style scoped>
.echartWrapper {
  margin: 0 auto;
  float: left;
}
</style>