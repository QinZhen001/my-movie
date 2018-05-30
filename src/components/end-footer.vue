<template>
  <div class="end-footer">
    <div class="line"></div>
    <div class="text">THE END</div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" scoped rel="stylesheet/less">
  .end-footer {
    margin: 0 auto;
    display: flex;
    width: 80%;
    height: 30px;
    .line {
      flex: 1;
      position: relative;
      top: -14px;
      border-bottom: 1px solid #ccc;
    }
    .text {
      padding: 0 12px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      letter-spacing: 2px;
      color: #ccc;
    }
  }
</style>
