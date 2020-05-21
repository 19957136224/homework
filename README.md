### 1.请说出下列最终的执行结果，并解释为什么？

```js
  var a = [];
  for (var i = 0; i < 10; i ++) {
    a[i] = function() {
      console.log(i)
    }
  }
  a[6]()
```

最终的输出结果为10
打印的i始终是全局作用域里的i，循环后就是累加为10

---
### 2.请说出下列最终执行的结果，并解释为什么？

```js
  var tmp = 123
  if (true) {
    console.log(tmp)
    let tmp
  }
```

报错ReferenceError: Cannot access 'tmp' before initialization

在块级环境中，let声明的变量tmp，执行到变量tmp声明的那行代码之前访问tmp都会报错，是暂时性死区


---
### 3.结合ES6新语法，用最简单的方式找出数组中的最小值？

```js
  var arr = [12, 34, 32, 89, 4]
```

```js
  console.log(Math.min(...arr))

  const newArr = arr.sort((a, b) => a - b)
  const minValue = newArr[0]
  console.log(minValue)
```
---
### 4.请详细说明var,let,const三种变量申明的方式之间的具体差别？

var会出现变量提升 作用域是全局
var声明后没有赋值就打印，则会打印出undefined
let和const申明的为块级作用域，外部不能访问
let和const不会出现变量申明提升
const申明为一个常量 必须有初始值

---
### 5.请说出下列代码最终输出的结果，并解释为什么？
```js
  var a = 10
  var obj = {
    a: 20,
    fn () {
      setTimeout(() => {
        console.log(this.a)
      })
    }
  }
  obj.fn()
```

最终输出的结果为20
箭头函数的this取决于定义时外部函数的this, 所以打印里的this指向的是obj

---
### 6.简述Symbol类型的用途？

```js
// 用途一 使用Symbol创建私有成员
const name = Symbol()
const Person = {
  [name]: 'shawn',
  say () {
    console.log(this[name])
  }
}

// 用途二 自定义对象的toString标签
const obj = {
  [Symbol.toStringTag]: 'XXX',
}

// 用途三 作为常量的唯一值
const only1 = Symbol()
const only2 = Symbol()
console.log(only1 === only2)
```

---
### 7.说说什么是浅拷贝，什么是深拷贝？

浅拷贝只是复制对象本身，不复制引用所引用的对象
深拷贝将复制这些元素以及由它们直接或间接引用的所有内容。

---
### 8.谈谈你是如何理解JS异步编程的，Event Loop是做什么的，什么是宏任务，什么是微任务？

因为js是单线程, 所以所有的任务都要排队执行。如果js中不存在异步, 如果一行解析时间很长, 会造成代码的阻塞, 会导致页面卡顿。
Event Loop就是每轮执行一个宏任务和所有的微任务。微任务和宏任务属于一个队列，主要区别在于它们的执行顺序，宏任务执行完如果有可执行的微任务则执行完微任务才会继续执行下一个宏任务。
宏任务：script，setTimeout，setInterval
微任务：Promise、process.nextTick、MutationObserver

---
### 9.将下面异步代码使用Promise改进？

```js
  setTimeout(function () {
    var a = 'hello'
    setTimeout(function () {
      var b = 'lagou'
      setTimeout(function () {
        var c = 'I ♥ U'
        console.log(a + b + c)
      }, 10)
    }, 10)
  }, 10)
```

```js
  new Promise((res) => {
    var a = 'hello'
    res(a)
  }).then((res) => {
    var b = 'lagou'
    return res + b
  }).then((res) => {
    var c = 'I ♥ U'
    console.log(res + c)
  })
```
---
### 10.请简述Typescript与JavaScript之间的关系？

Typescript是JavaScript的超集
Typescript在JavaScript的基础上增加了枚举、泛型、接口等，支持ES6以上的语法
TypeScript引入了JavaScript中没有的类概念
TypeScript可以使用JavaScript中的标准语法，TypeScript是渐进式的。

---
### 11.请谈谈你所认为的Typescript的优缺点？

优点：
1.增强了参数类型的限定
2.定义接口可以知道属性
3.代码更容易维护
4.增加bug发现概率

缺点：
ts部分不识别 需要使用//@ts-ignore