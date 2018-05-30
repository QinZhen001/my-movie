import Vue from 'vue'
import App from './App'
import './common/less/reset.less'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/movies/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#EA5149',
      navigationBarTitleText: '渣 影',
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      selectedColor: '#EA5149',
      list: [
        {
          pagePath: 'pages/movies/main',
          text: '电影',
          iconPath: 'static/img/book.png',
          selectedIconPath: 'static/img/book-active.png'
        }, {
          pagePath: 'pages/search/main',
          text: '搜索',
          iconPath: 'static/img/todo.png',
          selectedIconPath: 'static/img/todo-active.png'
        }, {
          pagePath: 'pages/me/main',
          text: '我',
          iconPath: 'static/img/me.png',
          selectedIconPath: 'static/img/me-active.png'
        }
      ]
    }
  }
}
