<template>
  <div class="star">
    <span v-for="itemClass in stars" :key="itemClass" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { isDecimalNum } from '../utils/index'
  const LENGTH = 10
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'

  export default{
    props: {
      score: {
        type: Number,
        default: 0
      },
      length: {
        type: Number,
        default: 10
      }
    },
    computed: {
      stars(){
        let result = []
        const integer = Math.floor(this.score)
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON)
        }
        if (isDecimalNum(this.score)) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "../common/less/mixin.less";

  .star {
    font-size: 0;
    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image('../../static/star/star24_on')
      }
      &.half {
        .bg-image('../../static/star/star24_half')
      }
      &.off {
        .bg-image('../../static/star/star24_off')
      }
    }
  }
</style>
