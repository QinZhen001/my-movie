<template>
  <ul class="reviews">
    <li v-for="item in reviews"></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      reviews: {
        type: Array
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .reviews {

  }
</style>
