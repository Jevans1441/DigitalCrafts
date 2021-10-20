//Madlib problem

function madLib(var1, var2) {
    let firstName = var1;
    let subject = var2;
    let sentence = `${firstName}'s favorite subject in school is ${subject}.`;

    return sentence;
}

let fName = 'Josh';
let rSubject = 'Computers';
let answerMadLib = madLib(fName, rSubject);

// console.log(answerMadLib);

//Tip Calculator

function tipAmount(var1, var2) {
    let theAmount = 0;
    if (var2 === 'good') {
        theAmount = var1 * .20;
    }
    else if (var2 === 'fair') {
        theAmount = var1 * .15;
    }
    else if (var2 === 'bad') {
        theAmount = var1 * .10;
    }
    else {
        theAmount = 'You have the entered the correct rating.'
    }
    return theAmount;
}

let tipTotal = tipAmount(100, 'good');
// console.log(tipTotal);

//Tip Calculator 2

function billAmount(var1, var2) {
    let amount = var1 + var2;
    return amount;
}

let totalBillWithTip = billAmount(100, tipTotal)
// console.log(totalBillWithTip);

//Print Numbers 

function printNumbersWhileLoop(var1, var2) {
    let i = var1;
    let pNumber = '';

    while (i <= var2) {
        pNumber += i; // combined the numebers together
        pNumber += '\n';
        i++; // i + 1
    }
    return pNumber;
}

let numberWithWhileLoopFunction = printNumbersWhileLoop(1, 10);
// console.log(numberWithWhileLoopFunction);

function printNumbersForLoop(var1, var2){
    let pNumber = '';

    for (i = var1; i <= var2; i++) {
        pNumber += i;
        pNumber += '\n';
    }
    return pNumber;
}

let numberWithForLoop = printNumbersForLoop(1, 10);
// console.log(numberWithForLoop)

//Print a Square

function printSquare(var1) {
    let astrick = '';
    let breakLine = '\n';
    let square = '';

    for (i = 1; i <= var1; i++) {
        astrick += '*';
        if (i == var1) {
            for (n = 1; n <= var1; n++){
                square += astrick + breakLine;
            }
        }
    }
    return square;
}
let makeSquare = printSquare(5);
console.log(makeSquare);

