<template>
  <div class="mock">
    <h2>hello this is mock testing</h2>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'mock',
  data () {
    return {}
  },
  created () {
    // this.getUserInfo();
    // this.getMyTest();
    // this.getString()
    this.testAdapter()
  },
  methods: {
    getUserInfo () {
      // 请求'/user/userinfo'接口
      this.axios.get('/user/userinfo').then(({ data }) => {
        // 打印mock data
        console.log(data)
        if (data.error === 0) {
          this.userInfo = data.data
          return this.userInfo
        } else {
          this.userInfo = {}
        }
      })
    },
    getMyTest () {
      this.axios.get('/planningData/list').then(res => {
        return res
      })
    },
    getString () {
      this.axios.get('/planningData/stringAndNumber').then(res => {
        return res
      })
    },
    testAdapter () {
      // 可以单独抽取出来，放入到src/api目录下面
      api.mockTest().then(res => {
        console.log(res)
      })
      api.mockString().then(res => {
        console.log(res)
      })
    }

  }
}
</script>
<style lang="scss" scoped>
</style>
