import Mock from 'mockjs'

// 属性值是string
const Str = {
  // 生成一个字符串；从属性值zhangzequan 取值，重复1到10次
  'string1|1-10': 'zhangzequan!',
  // 生成一个字符串；从属性值a取值，重复3次
  'string2|3': 'a'
}
// 属性值是array,选择一个元素还是选择多个元素具有特殊性
const Arr = {
  // 从属性值array 中随机选择一个元素，生成一个属性值
  'arr1|1': ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
  // 从属性值array中顺序选择一个元素，生成一个属性值
  'arr2|+1': ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
  // 从属性值array中选择所有元素({}),重复1-10次;其中{}只有一个属性name,也是顺序生成
  'arr3|1-10': [{
    'name|+1': ['hello', 'hello1', 'hello2', 'hello3', 'hello4'],
    'age|1': [12, 22, 34, 53, 23, 56]
  }],
  // 从属性值array中,选择所有的元素，重复1-10次
  'arr4|1-10': ['world1', 'world2', 'world3', 'world4', 'world5'],
  // 从属性值array中，选择所有的元素({},{}),重复1-10次
  'arr5|1-10': [{
    'name|+1': ['hello', 'hello1', 'hello2', 'hello3', 'hello4']
  },
  {
    'age|+1': ['world', 'world1', 'world2', 'world3', 'world4']
  }
  ],
  // 从属性值array中，选择全部元素，重复3次(实际是生成了9个元素)
  'arr6|3': ['a', 'b', 'c']
}

// Data Placeholder Defination

const Placeholder1 = {
  trueOrFalse: '@boolean',
  integer1: '@integer',
  integer2: '@integer(10,100)',
  date1: '@date("yyyy-MM-dd")',
  date2: '@date("yyyy-MM-dd") @time("H:m:s")',
  image1: Mock.Random.dataImage('200x100', 'Hello Mock.js!'),
  text1: '@paragraph(2)',
  cname1: '@cname'
}

//  Mock.mock() 参数是个对象
export default {
  test: 'hello,world',
  string: Mock.mock(Str),
  array: Mock.mock(Arr),
  placeholder1: Mock.mock(Placeholder1)
}
