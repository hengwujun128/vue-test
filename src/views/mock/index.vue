<template>
  <div class="mock">
    <h2>hello this is mock testing</h2>
  </div>
</template>

<script>
export default {
  name: 'mock',
  data () {
    return {};
  },
  created () {
    // this.getUserInfo();
    // this.getMyTest();
    this.getString()
  },
  methods: {
    getUserInfo () {
      // 请求'/user/userinfo'接口
      this.axios.get('/user/userinfo').then(({ data }) => {
        //打印mock data
        console.log(data);
        if (data.error === 0) {
          this.userInfo = data.data;
          return this.userInfo
        } else {
          this.userInfo = {};
        }
      });
    },
    getMyTest () {
      this.axios.get('/planningData/list').then(res => {
        return res;
      });
    },
    getString () {
      this.axios.get('/planningData/stringAndNumber').then(res => {
        return res;
      })
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
