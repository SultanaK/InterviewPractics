var a = 10;

function outerFunction(params) {
  var b = 20
  function innerFunction(params) {
    var c = 30 
    console.log(a+b+c)
  }
  //innnerFunction()
  return innerFunction
}
var callFunction = outerFunction()
callFunction()
