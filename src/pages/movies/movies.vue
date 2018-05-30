<template>
  <scroll-view class="movie-page" scroll-y="true">
    <swiper class="slider" indicator-dots="true" autoplay="true" circular="true">
      <swiper-item class="slider-item" v-for="item in sliders" :key="item">
        <img src="../../../static/img/slider.jpg" alt="">
      </swiper-item>
    </swiper>
    <border-line></border-line>
    <movie-list :listTitle="in_theaters_title" :movies="in_theaters_movies"
                @navigateToMovieDetail="navigateToMovieDetail"></movie-list>
    <border-line></border-line>
    <movie-list :listTitle="coming_soon_title" :movies="coming_soon_movies"
                @navigateToMovieDetail="navigateToMovieDetail"></movie-list>
    <border-line></border-line>
    <movie-list :listTitle="new_movies_title" :movies="new_movies"></movie-list>
    <border-line></border-line>
    <movie-list :listTitle="top250_movies_title" :movies="top250_movies"></movie-list>
  </scroll-view>
</template>

<script type="text/ecmascript-6">
  import { request } from '../../api/request'
  import MovieList from '../../components/movie-list.vue'
  import BorderLine from '../../components/border-line.vue'
  import { filterMovies } from '../../utils/index'

  export default{
    data(){
      return {
        sliders: ['', '', ''],
        in_theaters_title: '正在上映的电影 -北京',
        in_theaters_movies: [],
        coming_soon_title: '即将上映的电影',
        coming_soon_movies: [],
        new_movies_title: '新片排行榜',
        new_movies: [],
        top250_movies_title: '新片排行榜',
        top250_movies: []
      }
    },
    mounted(){
      this.getMoviesData()
    },
    methods: {
      async getMoviesData(){
        wx.showLoading({ title: '玩命加载中...' })
        const inTheaters = await request('/v2/movie/in_theaters')
        this.in_theaters_movies = filterMovies(inTheaters)
        const comingSoon = await request('/v2/movie/coming_soon')
        this.coming_soon_movies = filterMovies(comingSoon)
        // 加载完两个列表就可以停止loading
        wx.hideLoading()
        const newMovies = await request('/v2/movie/new_movies')
        this.new_movies = filterMovies(newMovies)
        const top250 = await request('/v2/movie/top250')
        this.top250_movies = filterMovies(top250)
      },
      navigateToMovieDetail(id){
        wx.navigateTo({
          url: '/pages/movieDetail/main?id=' + id
        })
      }
    },
    components: {
      MovieList,
      BorderLine
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .movie-page {
    height: 100%;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
    .slider-item > img {
      background-size: cover;
      width: 100%;
      height: 100%;
    }
  }


</style>
