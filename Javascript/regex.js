//var pattern = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{4}")

//console.log(pattern.test("123-345-4567"))

//first name to be limited to 8 character only
//last name only contain with 8 character and start with capital letter


let pattern = new RegExp("sultana", "i")
//let pattern = new RegExp("[ABC]{1}[abc]{7}")
//console.log(pattern)
//console.log(pattern.test("Sultana"))

//let firstName = /\b^K[a-z]{8}/
//let lastName = /\b^S[a-z]{6}/
let firstName = /\b^[A-Z][a-z]{8}/
let lastName = /\b^[A-Z][a-z]{6}/

console.log(firstName.test("Ksapdaker"))
console.log(lastName.test("Sultana"))