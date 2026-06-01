import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { UserInputComponent } from './features/user-input/user-input.component';
import { calculateInvestmentResults } from '@/core/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  onCalculateInvestmentResults(data: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }) {
    return calculateInvestmentResults(data);
  }
}
