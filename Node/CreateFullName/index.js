let firstName = /\b^[A-Z][a-z]{8}/
let lastName = /\b^[A-Z][a-z]{6}/

//console.log(firstName.test("Ksapdaker"))
//console.log(lastName.test("Sultana"))

let validFirstName = validFname => {
  if (validFname) {
    if (typeof validFname !== 'string' && validFname.length !== 0) {
      return false
    }
    return firstName.test(validFname)
  } else return false
}
let validLasttName = validLname => {
  if (validLname) {
    if (typeof validLname !== 'string' && validLname.length !== 0) {
      return false
    }
    return lastName.test(validLname)
  } else return false
}

module.exports ={ validFirstName, validLasttName}