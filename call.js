Function.prototype.myCall = function (context) {
  //首先判断调用对象是不是函数
  if (typeof this !== 'function') {
    console.log('type error');
    return
  }
  //判断是不是传入上下文 如果没有 则设置为window
  context = context || window
  //截取参数
  let args = [...arguments].slice(1)
  //将调用函数设置为this的方法
  context.fn = this
  //调用函数
  let result = context.fn(...args)
  //删除属性
  delete context.fn
  //return 
  return result
}

//call的第二个参数是将参数一个一个传入