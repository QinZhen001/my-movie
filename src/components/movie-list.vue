<template>
  <div class="movie-list">
    <div class="title">
      <span>{{listTitle}}</span>
      <img src="../../static/img/arrowright.png" alt="">
    </div>
    <scroll-view class="scroll-view" scroll-x="true">
      <div class="movie-item" v-for="movie in movies" :key="movie.id" @click="navigateToMovieDetail(movie.id)">
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
      navigateToMovieDetail(id){
//        console.log(id)
        wx.navigateTo({
          url: '/pages/movieDetail/main?id=' + id
        })
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
          font-size: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>
