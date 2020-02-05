import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component
({
  selector: 'app-calculator-button',
  template: `<button (click)="onClickMe()">{{name}}</button>`,
  styleUrls: ['./calculator-button.component.css']
})

export class CalculatorButtonComponent implements OnInit 
{
	@Input()  name: string;
	@Output() clicked = new EventEmitter<boolean>();

	constructor(){}

	ngOnInit() {}
	onClickMe() 
	{
		this.clicked.emit(name);
	}
}
