let a = 20
var outer = function () {
  let b = 10
  var middle = function () {
    if (true) {
     var c = 5
    }
   console.log(a,b,c) 
  }
  middle()
}
outer()