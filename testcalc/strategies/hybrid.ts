/**
 * Hybrid Strategy
 * Mix of snowball and avalanche (sort by interest, then amount).
 */
import { simulatePayoff } from './simulate.js';

export function hybridStrategy(debts: { amount: number; rate: number }[], monthlyPayment: number) {
  debts.sort((a, b) => b.rate - a.rate || a.amount - b.amount);
  return simulatePayoff(debts, monthlyPayment);
}
