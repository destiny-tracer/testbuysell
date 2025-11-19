/**
 * Common payoff simulation logic for all strategies.
 */
export function simulatePayoff(debts: { amount: number; rate: number }[], monthlyPayment: number) {
  let totalInterest = 0;
  let totalPaid = 0;
  let months = 0;

  while (debts.length > 0) {
    months++;
    let paymentLeft = monthlyPayment;

    for (let i = 0; i < debts.length; i++) {
      const interest = debts[i].amount * (debts[i].rate / 12 / 100);
      debts[i].amount += interest;
      totalInterest += interest;

      const pay = Math.min(paymentLeft, debts[i].amount);
      debts[i].amount -= pay;
      paymentLeft -= pay;
      totalPaid += pay;

      if (debts[i].amount <= 0) {
        debts.splice(i, 1);
        i--;
      }

      if (paymentLeft <= 0) break;
    }

    if (months > 1000) break; // safety
  }

  return { totalInterest, totalPaid, months };
}
