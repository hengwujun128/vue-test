<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { key: 'directive1', value: '1' }
      ]
    }
  },
  methods: {

  },
  created () {
  }
}
</script>
