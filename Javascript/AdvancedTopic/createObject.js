//let newobj = {}

//let newobj = new Object()
// ES5
function person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  console.log("First nsme is :" + this.fName + " Last name " + this.lName)
  
}
var p = new person('Khandaker', 'sultana')