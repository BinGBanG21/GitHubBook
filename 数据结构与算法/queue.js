/*
  队列（queue） 一种受限制的线性表  受限制表现在先进先出（FIFO:first in first out）
  只能在表的前端进行删除操作 表的后端进行添加操作
  生活中对应的队列结构 ：优先排队的人优先处理（安检、买票、结账）
*/

// queue的实现
function Queue() {
  this.items = []
}
//向队列尾部添加一项 返回队列的长度
Queue.prototype.enQueue = function (element) {
  this.items.push(element)
  return this.items.length
}
//移除队列的第一项 并返回第一项的的元素
Queue.prototype.deQueue = function () {
  return this.items.shift()
}
//查看队列的第一个元素
Queue.prototype.front = function () {
  return this.items[0]
}
//判断队列是否为空
Queue.prototype.isEmpty = function () {
  return this.items.length === 0
}
//判断队列内有多少个元素
Queue.prototype.size = function () {
  return this.items.length
}
//将队列中的元素 转成字符串的格式
Queue.prototype.toString = function () {
  let queueStr = ''
  this.items.forEach((item) => {
    queueStr +=
      typeof item === 'object' ? item.prototype.toString(item) : item + ''
  })
  return queueStr.trim()
}
//队列的应用
//击鼓传花 类似喝酒的时候数数 数到7的出去 剩下的人继续数 直到最后剩1个 返回剩下人的索引
function drunkGame(personNum, num) {
  let queueObj = new Queue()
  //把每一个元素包装成对象 把原始的索引记录下来
  for (let i = 0; i < personNum.length - 1; i++) {
    queueObj.enQueue({
      index: i
    })
  }
  let count = 0
  //只要队列中元素的个数大于1  就一直循环
  while (queueObj.size() > 1) {
    //如果是给定数字 从队列中弹出（喝酒）同时充值计数器
    if (count === num) {
      queueObj.deQueue()
      count = 0
      // 如果不是给定数字 把当前元素从队列中弹出  然后加到队列的最后面 计数器++
    } else {
      queueObj.enQueue(queueObj.deQueue())
      count++
    }
  }
  return queueObj.front().index
}
