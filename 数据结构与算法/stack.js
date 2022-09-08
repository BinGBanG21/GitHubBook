/*
  栈（stack） 一种受限制的线性结构  受限制表现在先进后出（LIFO:last in first out）
  只能在栈顶操作元素
  对比数组：数组可以在任意位置进行删除和增加操作 栈不可以
  在js里  有函数调用栈的说法（A调用B B调用C）内部是实现机制就是栈 递归的报错就是栈溢出
  题目：有六个元素 6，5，4，3，2，1 的顺序进栈，问下列哪一个不是合法的出栈序列？（）
  A.5 4 3 6 1 2   B.4 5 3 2 1 6   C.3 4 6 5 2 1   D. 2 3 4 1 5 6 
  题目分析：首先 元素是按654321的顺序进栈的 只不过进栈的数量不确定 也要考虑入栈的情况
          A ：  6在栈底  543单进单出 然后6弹出 最后12依次进栈
          B ：  6在栈底  栈里645  45出栈 321单进单出 然后6弹出
        * C ：  既然是按照顺序进栈 能操作到3说明栈里结构肯定是6543 34弹出后 栈里是65 不能先6后5出栈
          D ：  既然是按照顺序进栈 能操作到2说明栈里结构肯定是65432 234弹出 1单入单出 然后56出
*/

// 栈的实现
function Stack() {
  this.items = []
}
//添加一个新元素到栈顶  并返回栈的长度
Stack.prototype.push = function (element) {
  this.items.push(element)
  return this.items.length
}
//移除栈顶的元素 并将该元素返回
Stack.prototype.pop = function () {
  return this.items.pop()
}
//查看栈顶的元素
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1]
}
//判断栈是否为空
Stack.prototype.isEmpty = function () {
  return this.items.length === 0
}
//返回栈里元素的个数
Stack.prototype.size = function () {
  return this.items.length
}
//讲栈中的元素以字符串的形式返回
Stack.prototype.toString = function () {
  let resultString = ''
  this.items.forEach((item) => {
    resultString +=
      typeof item === 'object' ? item.prototype.toString.call(item) : item + ' '
    return resultString.replace(/\s$/g, '')
  })
}

//栈的应用
//十进制转换二进制（除2拿余数）
/*
    100
  100/2 余数0
  50/2 余数0
  25/2 余数1
  12/2 余数0
  6/2 余数0
  3/2 余数1
  1/2 余数1
  [0010011] 栈弹出

*/
function decToBin(decNum) {
  let stackObj = new Stack(decNum)
  while (decNum > 0) {
    stackObj.push(decNum % 2)
    decNum = Math.floor(decNum / 2)
  }
  let resultNumStr = ''
  while (!stackObj.isEmpty()) {
    resultNumStr += stackObj.pop() 
  }
  return resultNumStr
}
