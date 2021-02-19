function person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  
  /* var print = function () {
    console.log('this is a function')
  } */
  
}
person.prototype.print = function () {
  console.log("First name is: " + this.fName + " Last name " + this.lName)
    console.log('this is a function')
}
  person.prototype.age = 30 
var p = new person('Khandaker', 'sultana')
p.print()
console.log(p)