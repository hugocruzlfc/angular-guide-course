import { Component, signal } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { UserInputComponent } from './features/user-input/user-input.component';
import { calculateInvestmentResults } from '@/core/utils';
import { InvestmentInput } from './shared/models/investment-input.model';
import { InvestmentResultsComponent } from './features/investment-results/investment-results.component';
import { InvestmentResult } from './shared/models/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  // investmentResults = signal<InvestmentResult[] | undefined>(undefined);
  // onCalculateInvestmentResults(data: InvestmentInput) {
  //   this.investmentResults.set(calculateInvestmentResults(data));
  // }
}
