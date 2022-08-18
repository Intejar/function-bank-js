function getInputFieldText(inputNumber) {
    const inputText = document.getElementById(inputNumber);
    const inputNumberString = inputText.value;
    const inputNumberInteger = parseFloat(inputNumberString);
    inputText.value = " ";
    return inputNumberInteger;
}
function getDisplayField(inputDisplay) {
    const displayText = document.getElementById(inputDisplay);
    const displayString = displayText.innerText;
    const displayNumber = parseFloat(displayString);
    return displayNumber;
}
function displayInput(inputDisplay, newValue) {
    const displayText = document.getElementById(inputDisplay);
    displayText.innerText = newValue;
}

// for deposite 
document.getElementById('btn-deposite').addEventListener('click', function () {
    const inputFieldText = getInputFieldText('user-deposite');
    const prevInputText = getDisplayField('deposite-screen');
    if (isNaN(inputFieldText)) {
        alert('please provide valid number');
        return;
    }
    const value = prevInputText + inputFieldText;
    displayInput('deposite-screen', value);
    const prevTotal = getDisplayField('prev-balance');
    const newTotal = prevTotal + value;
    displayInput('prev-balance', newTotal);
})
// for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputFieldTextWithdraw = getInputFieldText('user-withdraw');
    const prevInputTextWithdraw = getDisplayField('withdraw-screen');
    const valueWithdraw = prevInputTextWithdraw + inputFieldTextWithdraw;
    const prevTotalWithdraw = getDisplayField('prev-balance');
    const newTotalWithdraw = prevTotalWithdraw - inputFieldTextWithdraw;

    if (isNaN(inputFieldTextWithdraw)) {
        alert('please provide valid number');
        return;
    }
    else if (inputFieldTextWithdraw > prevTotalWithdraw) {
        alert('insufficient balance!!');
        return;
    }
    displayInput('withdraw-screen', valueWithdraw);
    displayInput('prev-balance', newTotalWithdraw);

})
