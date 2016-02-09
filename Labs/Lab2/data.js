
var exports  = module.exports ={};

// You can now add export properties to the exports object to be accessible from outside this file

exports.retirementAmountIfSavingPerMonth = function (yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment){
    var yearsUntilRetirement=parseFloat(yearsUntilRetirement);
    var amountSavingPerMonth=parseFloat(amountSavingPerMonth);
    var yearlyInterestRateOfInvestment=parseFloat(yearlyInterestRateOfInvestment);
    var finalAmountOfMoney=0;
    if(yearsUntilRetirement < 0 || amountSavingPerMonth < 0 || yearlyInterestRateOfInvestment < 0 || yearlyInterestRateOfInvestment > 1) {
        throw "Your input have some error";
    }
    for (var i = 0; i < yearsUntilRetirement*12; i++) {
            console.log(i,"  ",finalAmountOfMoney);
         finalAmountOfMoney = (finalAmountOfMoney + amountSavingPerMonth) * (1 + yearlyInterestRateOfInvestment/12);
        }
    return finalAmountOfMoney;
};

//Question 2:
exports.investedAmountAfterSomeYears = function (yearsInvesting, initialAmount, yearlyInterestRateOfInvestment){
    var yearsInvesting=parseFloat(yearsInvesting);
    var initialAmount=parseFloat(initialAmount);
    var yearlyInterestRateOfInvestment=parseFloat(yearlyInterestRateOfInvestment);

    if(yearsInvesting < 0 || initialAmount < 0 || yearlyInterestRateOfInvestment < 0 || yearlyInterestRateOfInvestment > 1) {
        throw "Your input have some error";
    }
    var runningTotal=initialAmount;
    for(var i=0; i<yearsInvesting; i++){
        runningTotal = runningTotal * (1 + yearlyInterestRateOfInvestment);
    }

    return runningTotal;
};

//Question 3:
exports.monthsToPayOffLoan = function (monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan){
    var monthlyPaymentAmount=parseFloat(monthlyPaymentAmount);
    var initialLoanAmount=parseFloat(initialLoanAmount);
    var yearlyInterestRateOfLoan=parseFloat(yearlyInterestRateOfLoan);

    if(monthlyPaymentAmount < 0 || initialLoanAmount < 0 || yearlyInterestRateOfLoan < 0 || yearlyInterestRateOfLoan > 1) {
        throw "Your input have some error";
    }
    var leftToPay, counter=0;
    leftToPay=initialLoanAmount;
    while(leftToPay>0){
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmount;
        counter++;
    }
    return counter;
};
