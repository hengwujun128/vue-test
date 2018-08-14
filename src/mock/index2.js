// 1.为什么修改此页面代码不更新
/**
 * 因为，此页面代码是提供给nodejs用的，改变服务器代码是不会触发热更新的
 * 
 * 
 * 
 * 
 */


const Mock = require('mockjs'); // mockjs 导入依赖模块
const util = require('./util'); // 自定义工具模块
// 返回一个函数
module.exports = function (app) {
  // 监听http请求
  app.get('/user/userinfo', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    var json = util.getJsonFile('./userInfo.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });
  app.get('/planningData/list', function (rep, res) {
    var data = {
      'result|1': ['hello', 'world'], // 从 属性值array 中随机生成一个元素
      'result1|+1': ['zhangzequan', 'zzq', 'zme', 'zzl', 'yjh'], // 从属性值 array中顺序生成一个元素
      // 从属性值 array 中生成1到10个元素,每个元素是个集合{}
      'result2|1-10': [{
        'name|+1': ['name1', 'name2'],
        'age|20-40': 50
      }],
      // 从属性值 array 中生成1到10个元素,每个元素都包括三个值
      'result3|1-10': ['hello', 'zhangzequan', '!']
    };
    // res.json(Mock.mock(data));
    res.send(Mock.mock(data));
  });
  // json string
  app.get('/planningData/stringAndNumber', function (req, res) {
    const data = {
      // 从属性值x中取出x，生成一符符串,重复次数为1-10
      'result1|1-10': "x",
      // 从属性值string中取出字符串（hello,world），重复次数为3
      'result2|3': 'hello,world! ',
      // 生成一个整数，从属性值中取出默认值，并顺序自增
      'result3|+1': 1
    };
    res.send(Mock.mock(data))
  })


};
