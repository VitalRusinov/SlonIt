function getTotalAmount(amounts) {
  let totalAmount = 0;
  amounts.forEach(amount => {
    totalAmount += amount;
  });
  return totalAmount;
}

let mostValuableVustomersAmounts = [10000, 20000, 30000];
console.log(getTotalAmount(mostValuableVustomersAmounts));

