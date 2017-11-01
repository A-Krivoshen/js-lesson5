'use strict';

//#1

let amountOfTax = 0;

function calculateAmountOfTax(costOfGoodsSold) {
  const taxRate = 73;
  amountOfTax +=  costOfGoodsSold * taxRate / 100;
}

calculateAmountOfTax(1000);
calculateAmountOfTax(10000);
calculateAmountOfTax(100000);

console.log(`Налог с продаж (73 %), к оплате: ${amountOfTax} Q`);

//#2

let amountWrappingPaper = 30;

function hasWrappingPaper(packageWidth, packageHeight, packageLength) {
  const squareWrappingPaper = Math.floor(2 * (packageLength * packageWidth + packageLength * packageHeight + packageWidth * packageHeight));
  if (amountWrappingPaper >= squareWrappingPaper) {
    amountWrappingPaper -= squareWrappingPaper;
    console.log(`Заказ (${packageWidth}/${packageHeight}/${packageLength} м) упакован, осталось упаковочной бумаги ${amountWrappingPaper} м2`);
    return true;
  } else {
    console.log(`Заказ (${packageWidth}/${packageHeight}/${packageLength} м) не упакован, осталось упаковочной бумаги ${amountWrappingPaper} м2`);
    return false;
  }
}

hasWrappingPaper(2, 3.6, 1.1);
hasWrappingPaper(4, 6.78, 1.33);
hasWrappingPaper(1300, 3, 7);

//#3

let chargesOfTeleports = [7, 2, 1];
let functionsOfCounters = [];
const lengthChargesOfTeleports = chargesOfTeleports.length;

for (let i = 0; i < lengthChargesOfTeleports; i++) {
  functionsOfCounters.push(
    function () {
      if (chargesOfTeleports[i] > 0) {
        console.log(`Телепорт ${i + 1} использован, заряд — ${--chargesOfTeleports[i]} единиц`);
      } else {
        console.log(`Телепорт ${i + 1} недоступен, перезаряжается`);
      }
    }
  );
}

functionsOfCounters[0]();
functionsOfCounters[0]();
functionsOfCounters[0]();
functionsOfCounters[1]();
functionsOfCounters[1]();
functionsOfCounters[1]();
functionsOfCounters[2]();
functionsOfCounters[2]();