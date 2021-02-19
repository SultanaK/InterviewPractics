
//Parent
function person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  //console.log("First nsme is :" + this.fName + " Last name " + this.lName)
  
}
var p = new person('Khandaker', 'sultana')
/* this.print = function () {
  console.log(p)
} */
person.prototype.print = function () {
 console.log("First nsme is :" + this.fName + " Last name " + this.lName) 
}

//Child

function Employee(salary, fName, lName) {
  this.salary = salary
  person.call(this, fName, lName)
}
// inharitance
Employee.prototype = new person()
Employee.prototype.print = function () {
  person.prototype.print.call(this)
  console.log(this.salary)
}

var emp = new Employee(1000, 'Sultana', 'Khandaker')
emp.print()

// call vs apply vs bind
