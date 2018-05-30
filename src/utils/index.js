function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

export function filterMovies (movies) {
  return movies.subjects
}

export function isNumber (obj) {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

/**
 * @param num 传入一个数字
 * @returns {boolean} true 是小数
 */
export function isDecimalNum (num) {
  return String(num).indexOf('.') !== -1
}

export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function isLeapYear () {
  const year = new Date().getFullYear()
  if (year % 400 === 0) {
    return true
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true
  } else {
    return false
  }
}
