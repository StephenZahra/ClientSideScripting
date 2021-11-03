import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstValue: number = 0;
  secondValue: number = 0;
  answer: number = 0;

  calculate(): number{
    this.answer = this.firstValue * this.secondValue;
    return this.answer;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
