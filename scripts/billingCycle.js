const balanceIds = ['pay-account-balance', 'pay-statement-balance', 'pay-min-balance', 'pay-no-payment']

const balanceInfo = new Map();

balanceInfo.set('pay-account-balance','Hooray! You paid your entire account balance - you don’t owe any money to the bank right now.');

balanceInfo.set('pay-statement-balance', 'Hooray! You paid your statement balance off, which is the money you owe from the last month.<br><br>You won’t be charged any interest.')

balanceInfo.set('pay-min-balance', 'You paid the minimum balance on time so your account stays in good standing, but interest will acrrue on the the remaining unpaid statement balance.')

balanceInfo.set('pay-no-payment', 'You didn’t pay the minimum payment on time, your account isn’t in good standing anymore!<br><br>This means a few things:<br><br> - your credit card may be locked<br>- your interest rates may increase<br>- your credit score will go down')

const balanceAmounts = new Map();

balanceAmounts.set('pay-account-balance', '$0');
balanceAmounts.set('pay-statement-balance', '$55');
balanceAmounts.set('pay-min-balance', '$90')
balanceAmounts.set('pay-no-payment', '$100')


var firstClick = true;

function payBalance(id) {

    if (!firstClick) {
        for (var i = 0; i < balanceIds.length; i++) {
            document.getElementById(balanceIds[i]).classList.remove("paymentButtonFocused")
        }
        document.getElementById("billing-cycle-interest-owed").classList.remove("amountsInterest");
        document.getElementById("billing-cycle-interest-owed").innerHTML = '$10';
    }

    document.getElementById(id).classList.add("paymentButtonFocused")
    document.getElementsByClassName("billingCycleInfoBox")[0].innerHTML = balanceInfo.get(id)
    document.getElementById("billing-cycle-account-balance").innerHTML = balanceAmounts.get(id)

    if (id === 'pay-no-payment') {
        document.getElementById("billing-cycle-interest-owed").classList.add("amountsInterest");
        document.getElementById("billing-cycle-interest-owed").innerHTML = '$15';
    }

    firstClick = false;
}