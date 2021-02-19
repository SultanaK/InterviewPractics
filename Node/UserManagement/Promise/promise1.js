// 3 states : resolve, pending, reject
let promise = new Promise(function (resolve, reject) {
  
})

let getMobilePhone = true
// Create a promise
let eid = new Promise(function (resolve,reject) {
  if (getMobilePhone) {
    let mobileFeature = {
      color: 'blue',
      type: 'iphone'
    }
    resolve('Got the phne')
  } else {
    reject('sorry')
  }
})
let getMobileFeature = function (mobileFeature) {
  return Promise.resolve(getMobileFeature)
}
//using a promise

eid.then(getMobileFeature)
  .then(function (message) {
  console.log(message)
  
}).catch(function (err) {
  console.log(err)
  
})
//// HW
// create Promise which have 3 then in promise