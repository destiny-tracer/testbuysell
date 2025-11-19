/**
 * Avalanche Strategy
 * Pay highest interest first.
 */
import { simulatePayoff } from './simulate.js';

export function avalancheStrategy(debts: { amount: number; rate: number }[], monthlyPayment: number) {
  debts.sort((a, b) => b.rate - a.rate);
  return simulatePayoff(debts, monthlyPayment);
}
