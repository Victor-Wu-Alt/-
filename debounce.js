// 防抖函数：指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
function debounce(fn, wait) {
  var timer = null
  return function () {
    var context = this
    args = [...arguments]
    //如果存在定时器，去掉定时器重新计时
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    //设置定时器 并在指定时间后执行
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait);
  }
}