<template>
  <div class="me-page">
    <border-line></border-line>
    <div class="user-header">
      <img class="user-avatar" :src="userInfo.avatarUrl" alt="" v-if="userInfo.avatarUrl">
      <div class="user-info">
        <p class="user-nickName" v-if="userInfo.nickName"> {{userInfo.nickName}}</p>
        <div class="year-progress-wrapper">
          <year-progress></year-progress>
        </div>
      </div>
    </div>
    <border-line></border-line>
    <div class="chart-wrapper">
      <mpvue-echarts :echarts="echarts" :onInit="onInit"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { shareInfo } from '../../common/js/data'
  import BorderLine from '../../components/border-line.vue'
  import YearProgress from '../../components/year-progress.vue'
  import * as echarts from 'echarts'
  import mpvueEcharts from 'mpvue-echarts'

  function initChart (canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    })
    canvas.setChart(chart)
    var item1 = {
      color: '#F54F4A'
    }
    var item2 = {
      color: '#FF8C75'
    }
    var item3 = {
      color: '#FFB499'
    }

    var data = [{
      children: [{
        value: 5,
        children: [{
          value: 1,
          itemStyle: item1
        }, {
          value: 2
        }, {
          value: 1
        }],
        itemStyle: item1
      }, {
        value: 10,
        children: [{
          value: 6,
          itemStyle: item3
        }, {
          value: 2,
          itemStyle: item3
        }, {
          value: 1
        }],
        itemStyle: item1
      }],
      itemStyle: item1
    }, {
      value: 9,
      children: [{
        value: 4,
        children: [{
          value: 2,
          itemStyle: item2
        }],
        itemStyle: item1
      }, {
        children: [{
          value: 3
        }],
        itemStyle: item3
      }],
      itemStyle: item2
    }, {
      value: 7,
      children: [{
        children: [{
          value: 1,
          itemStyle: item3
        }, {
          value: 3,
          itemStyle: item2
        }, {
          value: 2,
          itemStyle: item1
        }],
        itemStyle: item3
      }],
      itemStyle: item1
    }, {
      children: [{
        value: 6,
        children: [{
          value: 1,
          itemStyle: item2
        }, {
          value: 2,
          itemStyle: item1
        }, {
          value: 1,
          itemStyle: item3
        }],
        itemStyle: item3
      }, {
        value: 3,
        children: [{
          value: 1
        }, {
          value: 1,
          itemStyle: item2
        }, {
          value: 1
        }],
        itemStyle: item3
      }],
      itemStyle: item1
    }]

    var option = {
      series: {
        radius: ['15%', '80%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: data,
        label: {
          rotate: 'radial'
        },
        levels: [],
        itemStyle: {
          color: '#ddd',
          borderWidth: 2
        }
      },
      silent: true
    }

    chart.setOption(option)
    return chart
  }

  export default{
    mounted(){
      this.getUserInfo()
    },
    data(){
      return {
        echarts,
        onInit: initChart,
        userInfo: {
          avatarUrl: '',
          nickName: '',
          province: '',
          city: ''
        }
      }
    },
    methods: {
      // 调用登录接口
      getUserInfo(){
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo
//            console.log(this.userInfo)
          }
        })
      }
    },
    components: {
      BorderLine,
      YearProgress,
      mpvueEcharts
    },
    onShareAppMessage (res) {
      return shareInfo
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .me-page {
    .user-header {
      padding: 8px 10px;
      display: flex;
      .user-avatar {
        flex: 0 0 46px;
        width: 46px;
        height: 46px;
      }
      .user-info {
        margin-left: 8px;
        flex: 1 1 auto;
        .user-nickName {
          margin-bottom: 4px;
          font-size: 14px;
          line-height: 14px;
          color: #353535;
        }
        .year-progress-wrapper {
          width: 100%;
        }
      }
    }
    .chart-wrapper {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 300px;
    }
  }

</style>
