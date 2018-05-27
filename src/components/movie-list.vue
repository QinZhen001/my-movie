<template>
  <div class="movie-list">
    <p>{{myTitle}}</p>
    <!--<div class="title">-->
    <!---->
    <!--&lt;!&ndash;<a class="arrow-right" href=""><img src="../../static/img/arrowright.png" width="16" height="16" alt=""></a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<scroll-view class="scroll-wrapper" scroll-x="true">&ndash;&gt;-->
    <!--&lt;!&ndash;<ul>&ndash;&gt;-->
    <!--&lt;!&ndash;<li v-for="item in movies" :key="item"></li>&ndash;&gt;-->
    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--&lt;!&ndash;</scroll-view>&ndash;&gt;-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      myTitle: {
        type: String
      },
      movies: {
        type: Array
      }
    },
    mounted(){
      console.log(this.myTitle)
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
</style>
