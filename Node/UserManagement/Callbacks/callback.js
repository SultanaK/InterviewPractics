let fs = require('fs')
let fileData = fs.readFileSync('input.txt')
console.log('Start reading')
console.log(fileData.toString())
console.log('End')

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("start")
  console.log(data)
  console.log("End")
})