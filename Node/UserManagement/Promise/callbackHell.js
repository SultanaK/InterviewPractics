let getUserId = (() => {
  let UserId = [1, 2, 3, 4]
  console.log(UserId)
  let user = {
    name: 'Sultana',
    age: 40
  }
  setTimeout((userId) => {
    console.log('Nmae is' + user.name + 'age is '+ user.age)
  })
})

// Modularization
