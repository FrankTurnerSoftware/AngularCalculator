import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyPanelComponent } from './key-panel/key-panel.component';
import { CalculatorButtonComponent } from './calculator-button.component';
import { CalculatorService } from './calculator.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
	KeyPanelComponent,
	CalculatorButtonComponent
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
