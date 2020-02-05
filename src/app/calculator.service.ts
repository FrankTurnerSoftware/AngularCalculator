import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService
{
	public Term1 = "";
	public Term2 = "";
	public TermNumber = 1;
	public operation = 0;
	public operationStr = "";
	public result  = 0;
	public reset = false;

  	constructor()
	{
	  	this.startOver();
    	this.result = 0;
	}

  	startOver()
	{
		this.Term1 = "0";
		this.Term2 = "0";
		this.TermNumber = 1;
		this.operation = 1;
		this.operationStr = "";
    	this.result = 0;
	}

  	append (n: number) 
	{
		if (this.reset)
		{
			this.reset = false;
		
			this.Term1 = "0";
			this.Term2 = "0";
			this.TermNumber = 1;
			this.operation = 1;
			this.operationStr = "";
			this.result = 0;
		}
		switch (this.TermNumber)
		{
			case 1:
				if (this.Term1 == "0")
				{
					this.Term1 = "";
				}
				if (this.Term1.length < 3)
					this.Term1 += n;
				break;
			case 2:
				if (this.Term2 == "0")
				{
					this.Term2 = "";
				}
				if (this.Term2.length < 3)
					this.Term2 += n;
				break;
		}
  	}

  	calculate () 
	{
		switch (this.operation)
		{
			case 1:
				this.result = (Number.parseInt(this.Term1) + Number.parseInt(this.Term2));
				break;
			case 2:
				this.result = (Number.parseInt(this.Term1) - Number.parseInt(this.Term2));
				break;
			case 3:
				this.result = (Number.parseInt(this.Term1) / Number.parseInt(this.Term2));
				break;
			case 4:
				this.result = (Number.parseInt(this.Term1) * Number.parseInt(this.Term2));
				break;
		}
		this.reset = true;
  	}
}
