///  Web Services with NodeJs to perform CRUDE using Express

/// GET -Read
/// Create --POST
///Update --Update/Put
///Delete --DELETE
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
//const userList = require("./userList") 
var userList = [
    {
      "userId": 100,
      "UserName": "Sultana",
      "email": "sultana@test.com",
      "phone": 1234567890
    },
    {
      "userId": 200,
      "UserName": "Javed",
      "email": "javed@test.com",
      "phone": 1234567890
    },
];
  
app.listen(3000, function () {
  console.log("User management is running on port 30000")
})
/// localhost : 3000
///HTTP endpoints

app.get('/', function (req, res) {
  console.log('get http request called')
  res.send("Get Http")
  
})
app.get('/test', function (req, res) {
  console.log('get http request for testcalled')
  res.send("test called")
  
})
app.get('/users', function (req, res) {
  console.log('get http request for users called')
  res.send(userList) 
});
app.get('/users/:userId', function (req, res) {
  let userId = parseInt(req.params.userId)
  console.log(req.params.userId)
let userData = "User not found"
  for (let i = 0; i < userList.length; i++){
    if (userId === userList[i].userId) {
      userData=(userList[i]) 
    } 
  }
  res.send(userData)
});
app.post('/users', function (req,res) { 
  //console.log(req.body)
  let payLoad = req.body
  if (Array.isArray(payLoad)) {
    for (let i = 0; i < payLoad.length; i++){

      userList.push(payLoad[i])
    } 
    } else {
      userList.push(payLoad)
    }
  res.send("New user added")
})

app.put('/users/:userId', function (req, res) {
  let userId = parseInt(req.params.userId)
  let payLoad = req.body
  for (let i = 0; i < userList.length; i++) {
    if (userId === userList[i].userId) {
      userList[i] = payLoad
    }
  }
res.send(userList)
})

app.delete('/users/:userId', function (req, res) {
  
  let userId = parseInt(req.params.userId)
  for (let i = 0; i < userList.length; i++) {
   if (userId === userList[i].userId) {
    userList[i].splice(i,1) 
   } 
    
  }
 res.send(userList) 
})