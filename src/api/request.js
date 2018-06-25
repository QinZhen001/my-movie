import { baseUrl } from './config'
import { showModal } from '../utils/index'

export function request (url, method = 'GET', data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header: {'Content-Type': 'json'},
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          showModal('Error', '发生未知错误!')
          reject(res.data)
        }
      },
      fail: function () {
        showModal('Error', '获取数据失败!')
      }
    })
  })
}
