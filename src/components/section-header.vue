<template>
  <div class="section-header">
    <div class="section-header-title">{{title}}</div>
    <div class="section-header-line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .section-header {
    width: 100%;
    height: 50px;
    vertical-align: middle;
    text-align: center;
    .section-header-title {
      margin-top: 12px;
      padding: 0 20px 10px 20px;
      display: inline-block;
      font-size: 16px;
      color: #EA5149;
    }
    .section-header-line {
      margin: 0 auto;
      width: 90px;
      height: 2px;
      background-color: #BEBEBE;
    }
  }
</style>
