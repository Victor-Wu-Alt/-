function myNew(Fn, ...args) {
  //判断类型是不是函数 不是函数则return 
  if (typeof Fn !== 'function') {
    console.log('type error');
    return
  }
  //创建一个新对象，并将构造函数的prototype指向对象的原型
  let newObject = Object.create(Fn.prototype)
  //将构造函数的this指向newObject,并执行
  let res = Fn.apply(newObject, args)
  //返回
  return res instanceof Object ? res : newObject
}

function Person(name, sex) {
  this.name = name;
  this.sex = sex
}

let person = myNew (Person,'小明','男')

console.log(person);