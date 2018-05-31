<template>
  <ul class="reviews">
    <li class="review-item" v-for="review in reviews" :key="review.id">
      <img class="review-avatar" :src="review.authorAvatar" alt="">
      <div class="review-content">
        <span class="review-username">{{review.authorName}}</span>
        <span class="review-go-detail" @click.stop="clickDetail(review.id)">详情<img
          src="../../static/img/right-arrow.png" alt=""></span>
        <p class="review-summary">{{review.summary}}</p>
        <div class="star-wrapper">
          <star length="5" :score="review.score"></star>
        </div>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import Star from './star.vue'

  export default{
    props: {
      reviews: {
        type: Array,
        default: []
      }
    },
    methods: {
      clickDetail(id){
        this.$emit('goToReviewDetail', id)
      }
    },
    components: {
      Star
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import '../common/less/mixin.less';

  .reviews {
    .review-item {
      margin: 24px 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      &:last-child {
        .review-content {
          &::after {
            height: 1px;
            border: none;
          }
        }
      }
      .review-avatar {
        flex: 0 0 34px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }
      .review-content {
        margin-left: 8px;
        flex: 1 1 auto;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          right: 0;
          display: block;
          width: 100%;
          height: 0;
          border-bottom: 1px solid #bbb;
        }
        .review-username {
          font-size: 14px;
          font-weight: 600;
        }
        .review-go-detail {
          float: right;
          display: inline-block;
          font-size: 14px;
          vertical-align: middle;
          color: #28A8FB;
          .extend-click();
          img {
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
          }
        }
        .review-summary {
          margin-top: 6px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 12px;
          line-height: 16px;
          text-overflow: ellipsis;
          color: #353535;
        }
        .star-wrapper {
          margin-top: 8px;
          margin-right: 8px;
          float: right;
          height: 10px;
        }
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
        border: none;
      }
    }
  }
</style>
