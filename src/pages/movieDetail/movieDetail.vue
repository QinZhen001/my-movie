<template>
  <div class="movie-page">
    <img class="movie-detail-bg" :src="movieDetail.image" v-if="movieDetail.image"/>
    <div class="movie-info-wrapper">
      <img class="poster-img" :src="movieDetail.image" alt="">
      <h5 class="movie-title">{{movieDetail.title}}</h5>
      <div class="info-item movie-score">
        <span class="info-item-text">评分:</span>
        {{movieDetail.score === 0 ? '暂无' : movieDetail.score}}
        <div class="star-wrapper">
          <star length="10" :score="movieDetail.score"></star>
        </div>
      </div>
      <div class="info-item movie-directors">
        <span class="info-item-text">导演:</span>
        <span class="director" v-for="director in movieDetail.directors" :key="director">{{director}}</span>
      </div>
      <div class="info-item main-actors">
        <span class="info-item-text">主演:</span>
        <span class="actor" v-for="actor in movieDetail.mainActors">{{actor}}</span>
      </div>
      <div class="summary" v-if="movieDetail.summary">
        <p class="summary-title">摘要:</p>
        <p class="summary-text">{{movieDetail.summary}}</p>
      </div>
      <section-header title="预告片" v-if="movieDetail.trailer_url"></section-header>
      <div class="video-wrapper" v-if="movieDetail.trailer_url">
        <video id="myVideo" :src="movieDetail.trailer_url" controls="true"></video>
      </div>
    </div>
    <section-header title="精选评论" v-if="reviews"></section-header>
    <div class="reviews-wrapper" v-if="reviews">
      <Reviews :reviews="reviews" @goToReviewDetail="goToReviewDetail"></Reviews>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { shareInfo } from '../../common/js/data'
  import { request } from '../../api/request'
  import Star from '../../components/star.vue'
  import Reviews from '../../components/reviews.vue'
  import SectionHeader from '../../components/section-header.vue'

  export default{
    data(){
      return {
        movieId: '',
        movieDetail: {},
        reviews: []
      }
    },
    mounted(){
      this.movieId = this.$root.$mp.query.id
      this.getMovieDetail()
    },
    methods: {
      async getMovieDetail(){
        wx.showLoading({title: '玩命加载中...'})
        const movieDetailResult = await request(`/v2/movie/subject/${this.movieId}`)
        this.movieDetail = this.filterMovieDetail(movieDetailResult)
        wx.hideLoading()

        const reviewsResult = await request(`/v2/movie/subject/${this.movieId}/reviews`)
        this.reviews = this.filterMovieReviews(reviewsResult)
      },
      filterMovieDetail(data){
        return {
          id: data.id,
          title: data.title,
          score: data.rating.average,
          image: data.images.small,
          mainActors: data.casts.map(item => { return item.name }),
          directors: data.directors.map(item => { return item.name }),
          summary: data.summary,
          countries: data.countries,
          trailer_url: data.trailer_urls[0]
        }
      },
      filterMovieReviews(data){
        return data.reviews.map(item => {
          return {
            id: item.id,
            authorAvatar: item.author.avatar,
            authorName: item.author.name,
            summary: item.summary,
            score: item.rating.value
          }
        })
      },
      goToReviewDetail(reviewId){
        wx.navigateTo({
          url: `/pages/reviewDetail/main?movieId=${this.movieId}&reviewId=${reviewId}`
        })
      }
    },
    components: {
      Star,
      Reviews,
      SectionHeader
    },
    onShareAppMessage (res) {
      return shareInfo
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .movie-page {
    width: 100%;
    .movie-detail-bg {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(3px);
      opacity: .1;
    }
    .movie-info-wrapper {
      padding: 20px 20px 10px 20px;
      .poster-img {
        height: 400px;
        width: 100%;
      }
      .movie-title {
        height: 28px;
        text-align: center;
        line-height: 28px;
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .info-item {
        margin-top: 10px;
        color: #333;
        font-size: 12px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .info-item-text {
          margin-right: 5px;
        }
        .director, .actor {
          margin-right: 5px;
        }
      }
      .movie-score {
        margin-top: 10px;
        .star-wrapper {
          float: right;
          display: inline-block;
        }
      }
      .summary {
        margin-top: 20px;
        margin-bottom: 15px;
        .summary-title {
          font-weight: 600;
          font-size: 14px;
        }
        .summary-text {
          margin-top: 10px;
          line-height: 20px;
          font-size: 12px;
          text-indent: 2em;
          font-weight: normal;
          color: #353535;
        }
      }
      .video-wrapper {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;
        #myVideo {
          width: 100%;
        }
      }
    }
    .reviews-wrapper {
      margin-top: 15px;
      width: 100%;
    }
  }
</style>
