<template>
  <div class="movie-list">
    <div class="title">
      <span>{{listTitle}}</span>
      <img src="../../static/img/arrowright.png" alt="">
    </div>
    <scroll-view class="scroll-view" scroll-x="true">
      <div class="movie-item" v-for="movie in movies" :key="movie.id" @click.stop="clickMovieItem(movie.id)">
        <img :src="movie.images.small" alt="">
        <h5 class="movie-title">{{movie.title}}</h5>
      </div>
    </scroll-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      listTitle: {
        type: String
      },
      movies: {
        type: Array
      }
    },
    methods: {
      clickMovieItem(id){
        this.$emit('navigateToMovieDetail', id)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .movie-list {
    padding: 8px;
    .title {
      position: relative;
      width: 100%;
      height: 20px;
      line-height: 20px;
      span {
        display: inline-block;
        font-size: 14px;
      }
      img {
        position: absolute;
        top: 3px;
        right: 5px;
        display: inline-block;
        width: 14px;
        height: 14px;
      }
    }
    .scroll-view {
      margin-top: 6px;
      width: 100%;
      white-space: nowrap;
      .movie-item {
        display: inline-block;
        width: 100px;
        text-align: center;
        img {
          width: 90px;
          height: 125px;
        }
        .movie-title {
          line-height: 12px;
          height: 12px;
          font-size: 10px;
          color: #353535;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>
