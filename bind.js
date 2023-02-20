Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    console.log('type error');
    return
  }
  //获取当前函数的参数
  let arg = [...arguments].slice(1)
  fn = this
  return function Fn() {
    //获取当前函数的参数
    let newArg = [...arguments]
    return fn.apply(this instanceof Fn ? this : context, newArg.concat(arg))
  }
}
