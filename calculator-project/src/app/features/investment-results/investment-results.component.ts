import { InvestmentResult } from '@/shared/models/investment-result.model';
import { InvestmentService } from '@/shared/services/investment.service';
import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input<InvestmentResult[] | undefined>(undefined);

  private investmentService = inject(InvestmentService);
  // results = this.investmentService.resultData.asReadonly(); signal alternative
  results = computed(() => this.investmentService.resultData());

  // get results() {
  //   return this.investmentService.resultData;
  // }
}
