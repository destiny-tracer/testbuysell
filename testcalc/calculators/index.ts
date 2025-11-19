/**
 * calculators/index.ts
 * Registry of all calculators for dynamic loading and dashboard rendering.
 */

import { stockAverageCalc } from './stock-average.js';
import { zerodhaBrokerageCalc } from './zerodha-brokerage.js';
import { kotakBrokerageCalc } from './kotak-brokerage.js';
import { housingLoanCalc } from './housing-loan.js';
import { goldLoanCalc } from './gold-loan.js';
import { personalLoanCalc } from './personal-loan.js';
import { appLoanCalc } from './app-loan.js';
import { creditCardLoanCalc } from './credit-card-loan.js';
import { sipCalc } from './sip.js';
import { swpCalc } from './swp.js';
import { pensionCalc } from './pension.js';
import { savingsCalc } from './savings.js';
import { debtCalc } from './debt.js';
import { amortizationCalc } from './amortization.js';

import { demoCalc } from './demo.js';

export const calculators = [
  demoCalc,
  // Add other calculators here
  stockAverageCalc,
  savingsCalc,
  debtCalc,
  amortizationCalc
];

export const calculators = [
  stockAverageCalc,
  zerodhaBrokerageCalc,
  kotakBrokerageCalc,
  housingLoanCalc,
  goldLoanCalc,
  personalLoanCalc,
  appLoanCalc,
  creditCardLoanCalc,
  sipCalc,
  swpCalc,
  pensionCalc,
  savingsCalc,
  debtCalc,
  amortizationCalc
];
