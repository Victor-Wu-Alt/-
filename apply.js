Function.prototype.myApply = function (context) {
  //首先判断调用对象是不是函数
  if (typeof this !== 'function') {
    console.log('type error');
    return
  }
  //判断有没有传入上下文 没有则设置为window
  context = context || window
  //修改this,将函数设为调用对象的方法
  context.fn = this
  //截取参数 
  let arg = [...arguments].slice(1)
  //调用函数
  let res = context.fn(arg)
  //删除添加的属性
  delete context.fn
  //return
  return res
}