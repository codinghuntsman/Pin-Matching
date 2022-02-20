function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-input').value = pin;
};
// keyPad
document.getElementById('key-pad').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const calculatorInput = document.getElementById('input-field');
    if (isNaN(numbers)) {
        if (numbers == "C") {
            calculatorInput.value = calculatorInput.value.slice(0, -1);
        }
        else if (numbers == "CE") {
            calculatorInput.value = "";
        }
    }
    else {
        const previousNumber = calculatorInput.value;
        const newNumber = previousNumber + numbers;
        calculatorInput.value = newNumber;
    }
});
// verify pin
function verifyPin() {
    const randomPin = document.getElementById('pin-input').value;
    const verify = document.getElementById('input-field').value;
    const success = document.getElementById('success');
    const errorMessage = document.getElementById('error-message');

    const limit = document.getElementById('limitation');
    const limitText = limit.innerText;
    const limitation = parseInt(limitText);

    // if (limitation < 0) {
    //     limit.innerText = limitation - 1;
    // }
    // else {
    //     limit.innerText = 'time out'
    // }
    // -----------------------------//
    if (randomPin == verify) {
        success.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        errorMessage.style.display = 'block';
    }

};
