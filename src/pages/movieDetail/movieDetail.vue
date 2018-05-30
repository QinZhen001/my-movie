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
  import Star from '../../components/star.vue'
  import Reviews from '../../components/reviews.vue'
  import SectionHeader from '../../components/section-header.vue'

  export default{
    data(){
      return {
        id: '',
        movieDetail: {},
        reviews: []
      }
    },
    mounted(){
      this.id = this.$root.$mp.query.id
      // 先过滤出reviews 在过滤出movieDetail
      this.getMovie
      this.reviews = this.filterMovieRevies(this.movieDetail)
      this.movieDetail = this.filterMovieDetail(this.movieDetail)
//      console.log(this.reviews)
    },
    methods: {
      filterMovieDetail(movieDetail){
        return {
          id: movieDetail.id,
          title: movieDetail.title,
          score: movieDetail.rating.average,
          image: movieDetail.images.small,
          mainActors: movieDetail.casts.map(item => { return item.name }),
          directors: movieDetail.directors.map(item => { return item.name }),
          summary: movieDetail.summary,
          countries: movieDetail.countries,
          trailer_url: movieDetail.trailer_urls[0]
        }
      },
      filterMovieRevies(movieDetail){
        return movieDetail.popular_reviews || []
      },
      goToReviewDetail(id){
        wx.navigateTo({
          url: '/pages/reviewDetail/main?id=' + id
        })
      }
    },
    components: {
      Star,
      Reviews,
      SectionHeader
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
      opacity: .2;
    }
    .movie-info-wrapper {
      padding: 20px 20px 10px 20px;
      .poster-img {
        height: 400px;
        width: 100%;
      }
      .movie-title {
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-size: 16px;
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
        .star-wrapper {
          float: right;
          display: inline-block;
        }
      }
      .summary {
        margin-top: 10px;
        margin-bottom: 14px;
        .summary-title {
          font-weight: 600;
          font-size: 14px;
        }
        .summary-text {
          margin-top: 10px;
          line-height: 16px;
          font-size: 12px;
          text-indent: 2em;
          font-weight: normal;
        }
      }
      .video-wrapper {
        margin-top: 10px;
      }
    }
    .reviews-wrapper {
      margin-top: 25px;
      width: 100%;
    }
  }
</style>
