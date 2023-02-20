// 节流函数：指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

function throttle(fn, wait) {
  let timeout = null
  return function () {
    let context = this
    let args = [...arguments]
    if (!timeout) {
      setTimeout(() => {
        fn.apply(context, args)
        timeout = null
      }, wait);
    }
  }
}