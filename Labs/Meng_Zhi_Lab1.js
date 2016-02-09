//Question 1:
function retirementAmountIfSavingPerMonth(yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment){
	var finalAmountOfMoney=0;
	if(yearsUntilRetirement < 0 || amountSavingPerMonth < 0 || yearlyInterestRateOfInvestment < 0) return -1;
	for (var i = 0; i < yearsUntilRetirement*12; i++) {
		 console.log(i,"  ",finalAmountOfMoney);
		 finalAmountOfMoney = (finalAmountOfMoney + amountSavingPerMonth) * (1 + yearlyInterestRateOfInvestment/12);
		}
	return finalAmountOfMoney;
}

//Question 2:
function investedAmountAfterSomeYears(yearsInvesting, initialAmount, yearlyInterestRateOfInvestment){
	if(yearsInvesting < 0 || initialAmount < 0 || yearlyInterestRateOfInvestment < 0) return -1;
	var runningTotal=initialAmount;
	for(var i=0; i<yearsInvesting; i++){
		runningTotal = runningTotal * (1 + yearlyInterestRateOfInvestment);
	}
	
	return runningTotal;
}

//Question 3:
function monthsToPayOffLoan(monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan){
	if(monthlyPaymentAmount < 0 || initialLoanAmount < 0 || yearlyInterestRateOfLoan < 0) return -1;
	var leftToPay, counter=0;
	leftToPay=initialLoanAmount;
	while(leftToPay>0){
		leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmount;
		counter++;
	}
	return counter;
}

console.log(retirementAmountIfSavingPerMonth(5, 1000, 0.03));
console.log(investedAmountAfterSomeYears(25, 20000, 0.03));
console.log(monthsToPayOffLoan(300,25000,0.12));