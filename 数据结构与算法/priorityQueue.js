/*
  优先级队列（prioriytQueue）
  和队列不同的是 优先级队列在插入的时候 并不是直接把元素放在末尾
  而是会考虑元素的优先级 和其他元素的优先级进行比较
  比较完后  得出该元素在优先级队列中的正确位置 然后插入
  其他处理方式 基本和队列是一样的
  优先级队列需要考虑的问题：
  （1）每个元素要有一个优先级属性
  （2）根据优先级放入正确的位置
  举个例子把：生活中的优先级  
  机场的登机顺序（头等舱和和商务舱登机高于经济舱）
  医院的急诊室（优先照顾严重的患者）
*/

//priotityQueue（优先级队列）的实现
function ProirotyQueue() {
  this.items = []
}
//PriorityQueue生成优先级元素
function PriorityElement(element, priority) {
  this.element = element
  this.priority = priority
}
//判断队列是否为空
Priority.prototype.isEmpty = function () {
  return this.items.length === 0
}
//实现优先级队列的插入方法 注意处理优先级相同的情况 如果优先级相同 那就放在该优先级的最后面
//例如 5 插入到 [1,2,3,3,3,5,5,6,6,7]
PriorityQueue.prototype.enQueue = function (element, proiroty) {
  let priorityElement = new priorityElement(element, proiroty)
  //所有元素的优先级放到数组中
  let proirotyArr = []
  this.items.forEach((item) => {
    proirotyArr.push(item.proiroty)
  })
  //首先判断队列是否为空 如果为空 不需要比较 放在最后
  if (this.isEmpty()) {
    this.items.push(priorityElement)
  } else {
    //如果不为空 找到正确的位置 插入该元素
    for (let i = 0; i < this.items.length; i++) {
      if (priorityElement.priority < this.items[i].priority) {
        //找到插入位置后 判断后一个元素是否和当前元素相等 如果相等 按同优先级元素处理
        if (priorityElement.priority === this.items[i].priority) {
          //优先级相同的处理：优先级数组和元素数组是的index是一样的
          //拿到当前相同优先级的最后一个元素的index+1 调用splice插入
          let index = proiroty.lastIndexOf(priorityElement.priority) + 1
          this.items.splice(index, 0, priorityElement)
          //如果不相等 直接插入
        } else {
          let index = proiroty.IndexOf(priorityElement.priority) + 1
          this.items.splice(index, 0, priorityElement)
        }
      }
    }
  }
}
