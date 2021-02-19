function person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  console.log("First nsme is :" + this.fName + " Last name " + this.lName)
  
}
var p = new person('Khandaker', 'sultana')
this.print = function () {
  console.log(p)
}