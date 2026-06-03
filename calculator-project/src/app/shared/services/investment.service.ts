import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from '../models/investment-input.model';
import { InvestmentResult } from '../models/investment-result.model';
import { calculateInvestmentResults } from '@/core/utils';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultData = signal<InvestmentResult[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    this.resultData.set(calculateInvestmentResults(data));
  }
}
