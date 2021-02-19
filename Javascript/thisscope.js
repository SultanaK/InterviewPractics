var x = 30
function test() {
  var x = 10
  console.log(x)
  console.log(this.x)
} 
//test()

var y = {
  x: 50,
  test:test
}

y.test()