import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-key-panel',
  templateUrl: './key-panel.component.html',
  styleUrls: ['./key-panel.component.css']
})

export class KeyPanelComponent implements OnInit 
{
	constructor	(private calculatorService : CalculatorService)	{ }

	ngOnInit() { }

  	onVoted()	{ }	

  	onAppend(n:number) 
	{
    	this.calculatorService.append(n);
  	}	

  	onOperation(n:number)
	{
    	this.calculatorService.operation = n;
    	this.calculatorService.operationStr = n.toString();

		switch (n)
		{
			case 1:
		    	this.calculatorService.operationStr = "PLUS";
				break;
			case 2:
		    	this.calculatorService.operationStr = "MINUS";
				break;
			case 3:
		    	this.calculatorService.operationStr = "DIVIDE";
				break;
			case 4:
		    	this.calculatorService.operationStr = "MULTIPLY";
				break;
		}

		if (this.calculatorService.TermNumber == 1)
			this.calculatorService.TermNumber = 2;
		else
			this.calculatorService.TermNumber = 1;
  	}	

  	onCalculate()
	{
    	this.calculatorService.calculate();
  	}	

  	onClear()
	{
		this.calculatorService.startOver();
  	}	

}
