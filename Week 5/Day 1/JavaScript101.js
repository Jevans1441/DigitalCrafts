//Madlib problem

function madLib(var1, var2) {
  let firstName = var1;
  let subject = var2;
  let sentence = `${firstName}'s favorite subject in school is ${subject}.`;

  return sentence;
}

let fName = "Josh";
let rSubject = "Computers";
let answerMadLib = madLib(fName, rSubject);

// console.log(answerMadLib);

//Tip Calculator START

function tipAmount(var1, var2) {
  let theAmount = 0;
  if (var2 === "good") {
    theAmount = var1 * 0.2;
  } else if (var2 === "fair") {
    theAmount = var1 * 0.15;
  } else if (var2 === "bad") {
    theAmount = var1 * 0.1;
  } else {
    theAmount = "You have the entered the correct rating.";
  }
  return theAmount;
}

let tipTotal = tipAmount(40, "fair");
// console.log(tipTotal);

//Tip Calculator END

//Tip Calculator 2 START
function billAmount(var1, var2) {
  let amount = var1 + var2;
  return amount;
}

let totalBillWithTip = billAmount(40, tipTotal);
// console.log(totalBillWithTip);

//Tip Calculator 2 END

//Tip Calculator 3 START

function splitAmount(totalBillWithTip, var2) {
  let sAmount = totalBillWithTip / var2;
  return sAmount;
}
let totalSplitAmount = splitAmount(totalBillWithTip, 2);
console.log(totalSplitAmount);

//Tip Calculator 3 END

//Print Numbers START
function printNumbersWhileLoop(var1, var2) {
  let i = var1;
  let pNumber = "";

  while (i <= var2) {
    pNumber += i; // combined the numebers together
    pNumber += "\n";
    i++; // i + 1
  }
  return pNumber;
}

let numberWithWhileLoopFunction = printNumbersWhileLoop(1, 10);
// console.log(numberWithWhileLoopFunction);

//PRINT NUMBERS END

function printNumbersForLoop(var1, var2) {
  let pNumber = "";

  for (i = var1; i <= var2; i++) {
    pNumber += i;
    pNumber += "\n";
  }
  return pNumber;
}

let numberWithForLoop = printNumbersForLoop(1, 10);
// console.log(numberWithForLoop)

//Print a Square
function printSquare(var1) {
  let astrick = "";
  let breakLine = "\n";
  let square = "";

  for (i = 1; i <= var1; i++) {
    astrick += "*";
    if (i == var1) {
      for (n = 1; n <= var1; n++) {
        square += astrick + breakLine;
      }
    }
  }
  return square;
}
let makeSquare = printSquare(5);
// console.log(makeSquare);

//Print a Box

function printBox(var1, var2) {
  let topAndBottom = "";
  let sides = "";
  let square = "";

  for (i = 1; i <= var1; i++) {
    topAndBottom += "-";
    if (i == var1) {
      topAndBottom += "\n";
      for (x = 1; x <= var2; x++) {
        for (n = 1; n <= var1; n++) {
          if (n == 1) {
            sides += "|";
          } else if (n == var1) {
            sides += "|" + "\n";
          } else {
            sides += " ";
          }
        }
      }
    }
  }

  square += topAndBottom + sides + topAndBottom;
  return square;
}
let makeEmptyBox = printBox(5, 5);
// console.log(makeEmptyBox)

//Print a Banner

function printBanner(var1) {
  let varLength = var1.length + 4;
  let border = "";
  let middleBanner = "";
  let banner = "";
  let dash = "-";

  for (i = 1; i <= varLength; i++) {
    border += dash;
    if (i == varLength) {
      border += "\n";
    }
  }
  middleBanner = dash + " " + var1 + " " + dash + "\n";
  banner = border + middleBanner + border;
  return banner;
}

let makeBanner = printBanner("Welcome to DigitalCrafts");
// console.log(makeBanner);
