<template>
  <div class="progress">
    <p class="progress-text">亲，您的<span class="text-red"> {{year}} </span> 经过去了<span class="text-red"> {{days}} </span>天，只剩下 <span
      class="text-red"> {{100 - percent}}% </span>哎~</p>
    <progress :percent='percent' activeColor='#EA5A49'></progress>
  </div>
</template>

<script type="text/ecmascript-6">
  import { isLeapYear } from '../utils/index'

  export default{
    methods: {
      getDayOfYear(){
        return isLeapYear() ? 366 : 365
      }
    },
    computed: {
      year(){
        return new Date().getFullYear()
      },
      days(){
        let start = new Date()
        start.setMonth(0)
        start.setDate(1)
        // start是今年的第一年 用今天的时间戳减去start的时间戳
        let offset = new Date().getTime() - start.getTime()
        return parseInt(offset / 1000 / 60 / 60 / 24) + 1
      },
      percent(){
        return (this.days / this.getDayOfYear() * 100).toFixed(1)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .progress {
    width: 100%;
    .progress-text {
      margin-bottom: 4px;
      font-size: 12px;
      height: 14px;
      line-height: 14px;
      color: #555;
      .text-red {
        color: #EA5A49;
      }
    }
  }
</style>
