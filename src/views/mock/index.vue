<template>
  <div class="mock">
    <h2>hello this is mock testing</h2>
  </div>
</template>

<script>
export default {
  name: 'mock',
  data() {
    return {};
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // 请求'/user/userinfo'接口
      this.axios.get('/user/userinfo').then(({ data }) => {
        //打印mock data
        console.log(data);
        if (data.error === 0) {
          this.userInfo = data.data;
        } else {
          this.userInfo = {};
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
