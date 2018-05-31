<template>
  <div class="search-page">
    <div v-if="showNoResult" class="no-result-wrapper">
      <no-result></no-result>
    </div>
    <div class="search-box-wrapper">
      <div class="search-box">
        <img @click.stop="search(query)" class="search-img" src="../../../static/img/search.png" alt="">
        <input class="search-text" v-model="query" type="text" placeholder="搜索电影">
        <img @click.stop="clear" class="clear-img" v-if="query" src="../../../static/img/clear.png" alt="">
      </div>
    </div>
    <div class="list-wrapper" v-if="searchResults.length">
      <scroll-view class="list-scroll" scroll-y="true">
        <ul class="list-inner">
          <li class="list-item" v-for="(item,index) in searchResults" :key="item.id"
              @click.stop="clickResultItem(item.id)">
            <img class="item-img" src="../../../static/img/item-img.png" alt="">
            <span class="item-title">{{item.title}}</span>
            <span class="item-genre" v-for="(genre,genreIndex) in item.genres" :key="genre">{{genre}}</span>
          </li>
        </ul>
      </scroll-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { request } from '../../api/request'
  import { debounce } from '../../utils/index'
  import { shareInfo } from '../../common/js/data'
  import NoResult from '../../components/no-result.vue'

  export default{
    data(){
      return {
        query: '',
        searchResults: []
      }
    },
    mounted(){
      this.$watch('query', debounce((newQuery) => {
        this.search(newQuery)
      }, 500))
    },
    methods: {
      clear(){
        this.query = ''
        this.searchResults = []
      },
      async search(query){
        wx.showNavigationBarLoading()
        const result = await request(`/v2/movie/search?q=${query}`)
        this.searchResults = this.filterSearchResult(result.subjects)
        wx.hideNavigationBarLoading()
      },
      filterSearchResult(data){
        return data.map(item => {
          return {
            title: item.title,
            genres: item.genres,
            id: item.id
          }
        })
      },
      clickResultItem(id){
        wx.navigateTo({
          url: '/pages/movieDetail/main?id=' + id
        })
        this.clear()
      }
    },
    components: {
      NoResult
    },
    computed: {
      showNoResult(){
        return !this.searchResults.length
      }
    },
    onHide(){
      this.clear()
    },
    onShareAppMessage (res) {
      return shareInfo
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import '../../common/less/mixin.less';

  .search-page {
    height: 100%;
    overflow: hidden;
    .no-result-wrapper {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .search-box-wrapper {
      box-sizing: border-box;
      background: #ddd;
      border: 1px solid #7e8c8d;
      .search-box {
        padding: 0 6px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        .search-text {
          flex: 1;
          margin: 0 8px;
          line-height: 18px;
          font-size: 14px;
        }
        .search-img, .clear-img {
          width: 24px;
          height: 24px;
          .extend-click();
        }
      }
    }
    .list-wrapper {
      .list-scroll {
        height: 400px;
        overflow: hidden;
        .list-inner {
          padding: 0 20px;
          .list-item {
            display: flex;
            align-items: center;
            width: 100%;
            height: 36px;
            overflow: hidden;
            .item-img {
              flex: 0 0 32px;
              width: 32px;
              height: 32px;
            }
            .item-title {
              margin-left: 5px;
              flex: 1 1 auto;
              height: 36px;
              line-height: 36px;
              width: auto;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .item-genre {
              margin-left: 4px;
              padding: 1px 2px;
              float: right;
              min-width: 25px;
              height: 16px;
              line-height: 16px;
              font-size: 12px;
              color: #25B423;
              border-radius: 5px;
              border: 1px solid #25B423;
            }
          }
        }
      }
    }
  }
</style>
