function myInstanceof(left, right) {
  //获取对象的原型
  let proto = Object.getPrototypeOf(left)
  //获取对象的prototype对象
  let prototype = right.prototype
  //判断是否相等 如果不相等则继续往原型链上找
  while (true) {
    if (!proto) return false
    if (proto === prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}