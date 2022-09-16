/*
  链表（LinkedList）：和数组一样 可以用于储存一系列的元素 但是实现机制和优缺点完全不同
  数组（Array）：要储存多个元素 数组是最常用的数据结构 每一种编程语言都默认实现了数组
  数组的缺点：
    （1）数组的创建通常需要申请一段连续的内存空间（一整块空间） 并且大小是固定的 当前
        数组不能满足容量要求时需要扩容（一般都是申请一个更大的数组（2倍） 然后将原数组中的元素复制过去）
    （2）在数组中插入元素 其实所需的成本很高 需要进行大量的元素位移
    （3）虽然JavaScript中Array类帮我们做了这样的事 但是背后的原理是一样的
  相比来说链表的优点：
    （1）链表中的元素在内存中不必是独立的空间 可以充分利用内存 实现内存的动态管理
    （2）链表中的元素由一个储存元素本身的节点和指向下一个元素的引用组成
    （3）链表不必再创建时就确定大小 可以无限延伸下去
    （4）在插入和删除数据时 时间复杂度可以变成O（1）效率高很多
  数组查询和修改元素 性能更高   链表插入和删除元素 性能更高（访问任意一个元素 都要从头开始访问）
  链表类似于火车 乘客相当于元素的数据data 连接点相当于指针

*/

//LinkedList的实现
//LinkedList内部元素
function LinkedNode(data) {
  this.data = data
  this.next = null
}
function LinkedList() {
  this.head = null
  //记录链表的长度
  this.length = 0
}
//向链表末尾添加一个新的项
LinkedList.prototype.append = function (data) {
  let LinkedData = new Node(data)
  //如果是链表为空 则当前节点为第一个节点
  if (this.length === 0) {
    this.head = LinkedData
  } else {
    //如果不为空（最后一个节点的next属性指向null） 则放入最后
    //需要一个当前变量 用作查找（不能直接用this.head判断 否则判断到最后this.head的指向就错了）
    let currentData = this.head
    while (currentData.next) {
      currentData = currentData.next
    }
    //如果推出循环证明currentData=null
    currentData.next = LinkedData
  }
  //同时改变length的属性
  this.length += 1
}
//向链表指定位置添加一个新的项
LinkedList.prototype.insert = function (position, data) {
  //首先对position进行一个越界判断
  if (position < 0 || position > this.length) {
    return false
  }
  //创建数据
  let linkedData = new LinkedNode(data)
  //判断位置插入
  //位置是0
  if (position === 0) {
    linkedData.next = this.head
    this.head = linkedData
  } else {
    //位置正常的情况
    //计数器+循环 因为是替换 所以要找到previous节点  再找到current节点 然后替换
    //即使positon指向null 下面的代码也正常判断执行
    let curIndex = 0
    let preData = null
    let curData = this.head
    while (curIndex === position) {
      preData = currentData
      curData = curData.next
      curIndex++
    }
    preData.next = linkedData
    linkedData.next = curData
  }
  //不要忘记统计元素个数
  this.length += 1
  return true
}
//获取对应位置的元素
LinkedList.prototype.get = function (position) {
  //首先进行越界判断
  if (position < 0 || position >= this.length) {
    return unll
  }
  //获取对应的数据 如果position=0 表示获取第一个元素
  let curIndex = 0
  let curData = this.head
  while (curIndex < position) {
    curData = curData.next
    curIndex += 1
  }
  return curData
}
//返回元素在该链表中的索引 如果没有该元素返回-1
LinkedList.prototype.indexOf = function (data) {
  //都需要两个变量 curData= this.head 从头开始找  curIndex 记录当前索引
  let curIndex = 0
  let curData = this.head
  //如果curData存在
  //（1）判断找到数据和需求数据是否相等 相等返回索引
  //（2）不相等证明没有查找完 递增index
  while (curData) {
    if (curData === data) {
      return curIndex
    } else {
      curData = curData.next
      curIndex++
    }
  }
}
//修改某个位置的元素 返回布尔值
//和get方法的实现类似
LinkedList.prototype.update = function (position, newData) {
  //首先进行越界判断
  if (position < 0 || position >= this.length) {
    return null
  }
  //获取对应的数据 如果position=0 表示获取第一个元素
  let curIndex = 0
  let curData = this.head
  while (curIndex < position) {
    curData = curData.next
    curIndex += 1
  }
  curData = newData
}
//从链表的特定位置移除一项
LinkedList.prototype.removeAt = function (position) {
  //首先进行越界判断
  if (position < 0 || position >= this.length) {
    return null
  }
  //找到元素 移除（找到前面和后面的 next属性要正确）
  //position = 0
  if (position === 0) {
    this.head = this.head.next
  } else {
    let curIndex = 0
    let preData = null
    let curData = this.head
  }
  return true
}
//从链表中移除一项
//判断链表是否为空
LinkedList.prototype.isEmpty = function () {
  return this.length === 0
}
//返回链表中元素的个数
LinkedList.prototype.size = function () {
  return this.length
}
//把链表中的元素按字符串的形式返回
LinkedList.prototype.toString = function () {
  let linkedStr = ''
  //如果链表为空 return空字符串
  if (this.length === 0) {
    return linkedStr
  } else {
    //链表大多数方法的实现都需要current 保证head的正确指向
    let currentData = this.head
    //利用currentData去判断是否完成循环(不要用next属性去判断 那样会剩一个)
    while (currentData) {
      linkedStr +=
        typeof currentData.data === 'object'
          ? currentData.data.prototype.toString(currentData.data)
          : currentData.data + ''
      currentData = currentData.next
    }
    return linkedStr.trim()
  }
}
