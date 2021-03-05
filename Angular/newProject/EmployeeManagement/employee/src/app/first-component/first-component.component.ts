import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Learn Full stack web development";
  subject = "Learn Angular";
  person = {
    fName: "Khandaker",
    lName: "Sultana",
    img: "http://lorempixel.com/g/400/200",
    active: true,
    description:"Person gardening"
  }

  sayHi() {
    return "Hello from "
  }
}
