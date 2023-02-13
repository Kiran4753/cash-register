const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');
//console.log(noOfNotes[0].innerText = 'hello')

const availableNotes = ['2000', '500', '100', '20', '10', '5', '1'];

checkButton.addEventListener('click', function validateBillAndCashAmount(){
    let bill = billAmount.value;
    let cash = cashGiven.value;
    hideMessage();
    if(bill > 0){
        if(cash > bill){
            const amountToBeReturned = cash - bill;
            calculateChange(amountToBeReturned);

        }else{
            showMessage('the cash provided should atleast be equal to bill amount')
        }
    }else{
        showMessage('invalid bill amount')
    }
});

function calculateChange(x){
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(x / availableNotes[i]);
        x %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = 'none';
}
function showMessage(msg){
    message.style.display = 'block';
    message.innerText = msg;
}
