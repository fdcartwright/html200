let balance = 0;
let response = '';

function promptRequest() {
    response = prompt('Enter requested action. | Q: Quit | W: Withdraw | D: Deposit | B: Balance');
    banking();
}

promptRequest();

function banking() {

    if (response.toUpperCase() === 'Q') {
        alert('You have selected to quit the program. Goodbye.');
    } else if (response.toLocaleUpperCase() === 'W') {
        let withdrawAmount = Number(prompt('Please enter the amount you would like to withdraw.'));
        balance = balance - withdrawAmount;
        response = promptRequest();
    } else if (response.toUpperCase() === 'D') {
        let depositAmount = Number(prompt('Please enter the amount you would like to Deposit.'));
        balance = balance + depositAmount;
        response = promptRequest();
    } else if (response.toUpperCase() === 'B') {
        alert('Your account has $' + balance);
        response = promptRequest();
    } else {
        alert('Sorry we did not understand your request. Please try again.');
        response = promptRequest();
    }
}



