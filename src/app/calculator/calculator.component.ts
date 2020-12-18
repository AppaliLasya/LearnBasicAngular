import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1:number=0;
  public num2:number=0;
  public res:number=0;
  constructor() { }
  add()
  {
    this.res=this.num1+this.num2;
  }
  sub()
  {
    this.res=this.num1-this.num2;
  }
  mul()
  {
    this.res=this.num1*this.num2;
  }
  div()
  {
    this.res=this.num1/this.num2;
  }

  ngOnInit(): void {
  }

}
