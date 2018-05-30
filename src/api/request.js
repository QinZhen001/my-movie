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
          showModal('失败')
          reject(res.data)
        }
      },
      fail: function () {
        showModal('获取数据失败!')
      }
    })
  })
}
