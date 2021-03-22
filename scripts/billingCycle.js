const balanceIds = ['pay-account-balance', 'pay-statement-balance', 'pay-min-balance', 'pay-no-payment']

const balanceInfo = new Map();

balanceInfo.set('pay-account-balance','Hooray! You paid your entire account balance - you don’t owe any money to the bank right now.');

balanceInfo.set('pay-statement-balance', 'Hooray! You paid your statement balance off, which is the money you owe from the last month.<br><br>You won’t be charged any interest.')

balanceInfo.set('pay-min-balance', 'You paid the minimum balance on time so your account stays in good standing, but interest will acrrue on the the remaining unpaid statement balance.')

balanceInfo.set('pay-no-payment', 'You didn’t pay the minimum payment on time, your account isn’t in good standing anymore!<br><br>This means a few things:<br><br> - your credit card may be locked<br>- your interest rates may increase<br>- your credit score will go down')

var firstClick = true;

function payBalance(id) {

    if (!firstClick) {
        for (var i = 0; i < balanceIds.length; i++) {
            document.getElementById(balanceIds[i]).classList.remove("paymentButtonFocused")
        }
    }

    document.getElementById(id).classList.add("paymentButtonFocused")
    document.getElementsByClassName("billingCycleInfoBox")[0].innerHTML = balanceInfo.get(id)

    firstClick = false;
}