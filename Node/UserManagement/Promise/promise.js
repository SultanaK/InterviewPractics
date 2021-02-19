// 3 states : resolve, pending, reject
let promise = new Promise(function (resolve, reject) {
  
})

let getMobilePhone = true
// Create a promise
let eid = new Promise(function (resolve,reject) {
  if (getMobilePhone) {
    resolve('Got the phne')
  } else {
    reject('sorry')
  }
})

// using a promise

eid.then(function (message) {
  console.log(message)
  
}).catch(function (err) {
  console.log(err)
  
})

// callback hell