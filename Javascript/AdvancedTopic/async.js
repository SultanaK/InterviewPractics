/* function wait(params) {
  setTimeout(function timer(){
    console.log('tick')
  },2000)
}

wait('Hello') */

for (let i = 1; i <= 5; i++){
  setTimeout(function timer() {
    console.log("set time "+ i)
  }, 2000)
  console.log(i)
}


for (var i = 1; i <= 5; i++){
  setTimeout(function timer() {
    console.log("set time "+ i)
  }, 2000)
  console.log(i)
}
for (var i = 1; i <= 5; i++) {
  (
    setTimeout(function timer() {
      console.log("set time " + i)
    }, 2000)

  )
}(i)

/// IIFE



