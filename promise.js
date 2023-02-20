// 定义三个状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  //传入一个执行函数
  constructor(executor) {
    //定义初始状态
    this.state = 'pending'
    //初始化陈宫结果
    this.res = undefined
    //初始化失败结果
    this.ref = undefined

    //成功的话 修改状态  并resolve
    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.res = value
      }
    }

    //失败的话 修改状态 并赋值
    let reject = (ref) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.ref = ref
      }
    }

    try {
      // 5.立即执行executor，将resolve和reject传递给使用者
      executor(resolve, reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  then = (success, fail) => {
    if (this.state === 'fulfilled') {
      success(this.res)
    }
    if (this.state === 'rejected') {
      fail(this.ref)
    }
  }
}