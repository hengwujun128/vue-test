// generate api Router and return response Data
import mock from '../plugin/axiosMockAdapter'
import testData from '../data/testData'


export default {
  start() {
    mock.onGet('/api/test').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: '1',
            msg: 'success',
            data: testData.test
          }]);
        }, 200);
      });
    })
    mock.onGet('/api/testString').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 1,
            msg: 'success',
            // result 是个对象
            str_result: testData.string,
            arr_result: testData.array,
            placeholder1: testData.placeholder1
          }])
        }, 2000)
      })
    })


  }
}
