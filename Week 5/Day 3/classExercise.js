// let count = 0;

// while (count <= 10) {
//   count++;

//   if (count % 2 == 0) {
//     console.log(count + " is even");
//   } else {
//     console.log(count + " is odd");
//   }
// }

// let myArray = ["apple", "bread", "eggs"];

// for (let item = 0; item < myArray.length; item++) {
//   //   console.log(myArray[item]);
//   //   console.log(item);
// }

// let lastElement = myArray[myArray.length - 1];
// // console.log(lastElement);

// let firstTwoElements = myArray.slice(0, 2);
// // console.log(firstTwoElements);

// let numbers = [1, 2, 3, 4, 5, 6];
// // console.log("My array before: " + numbers);
// numbers.push(7);
// // console.log("My array after: " + nmbers);
// numbers.splice(2, 1); // removes the number starting at the 2nd index and only the 2nd index (2, 1), it removes number 3
// // console.log("My array after splice: " + numbers);

// // FOOR LOOP

// let friends = ["katie", "todd", "josh", "fred"];

// for (let friend = 0; friend < friends.length; friend++) {
//   //   console.log(friends[friend]);
// }

// let withoutKatie = friends.slice(1, 4);
// console.log(withoutKatie);

function sumOfNumbers(var1, var2) {
  let sums = var1 + var2;
  if (sums >= 50 && sums <= 80) {
    return 65;
  } else return 80;
}

console.log(sumOfNumbers(40, 20));
console.log(sumOfNumbers(75, 20));
