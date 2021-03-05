import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-expression',
  templateUrl: './template-expression.component.html',
  styleUrls: ['./template-expression.component.css']
})
export class TemplateExpressionComponent implements OnInit {
  @ViewChild('palias')
  paragraphAlias!: ElementRef;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  pClick() {
    console.log(this.paragraphAlias.nativeElement.textContent)
  }
}
