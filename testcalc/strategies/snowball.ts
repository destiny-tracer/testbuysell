/**
 * Snowball Strategy
 * Pay smallest debt first.
 */
import { simulatePayoff } from './simulate.js';

export function snowballStrategy(debts: { amount: number; rate: number }[], monthlyPayment: number) {
  debts.sort((a, b) => a.amount - b.amount);
  return simulatePayoff(debts, monthlyPayment);
}
