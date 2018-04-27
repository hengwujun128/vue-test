 
import Vue from 'vue'
// 单例模式
function DataTransfer (data) {
  if (!(this instanceof DataTransfer)) {
    return new DataTransfer(data, null, null)
  }
}

// 初始化 data 为整个表格数据, parent 为 null,level 为 null,expandedAll 为 false
DataTransfer.treeToArray = function (data, parent, level, expandedAll) {
  let tmp = []
  
  Array.from(data).forEach(function (record) {
      // 为每一列数据添加activeProperty属性
    if (record._expanded === undefined) {
      // 为每个 record object 对象添加_expanded 属性
      Vue.set(record, '_expanded', expandedAll)
    }
    if (parent) {
      Vue.set(record, '_parent', parent)
    }
    // 为每一行数据添加 _level 属性, _level初始值为0,因为初始化的时候 level 为 null, 在一次进入循环 level 为0
    let _level = 0
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    // 为每一行数据添加响应式属性后,并把这行数据放到新的数组中
    tmp.push(record)
    // 递归调用(在一个循环中进行递归调用)
    if (record.children && record.children.length > 0) {
      // 
      let children = DataTransfer.treeToArray(record.children, record, _level, expandedAll)
      // 数组的 concat 属性,要学会使用
      // 把嵌套的树形结构转变成数组 ,使用数组合并的方法
      tmp = tmp.concat(children)
    }
    
  })
  
  return tmp
}

export default DataTransfer
