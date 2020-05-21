// 第三题 找出最小值
var arr = [12, 34, 32, 89, 4]

Math.min(...arr)

var newArr = arr.sort((a, b) => a - b)
var minValue = newArr[0]

// 第九题 改进异步
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