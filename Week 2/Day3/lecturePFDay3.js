//while loops

// let n = 1;
// while (n < 10) { //no counter while loop
//     n++; // put counter before console.log
//     console.log(n); // if you remove console.log it prints 10
// }

//Handing out cookies function

// let n = 5;
// let conversation = '';
// while (n > 0) {
//     if (n % 2 !== 0) {
//         //console.log(`${n} cookie: me`); DEBUG (n)
//         conversation += 'one for me\n'; // \n is a line break
//         if (n === 1) {
//             conversation += 'none for you.';
//         }
//     }
//     else {
//         //console.log(`${n} cookie: you`); DEBUG (n)
//         conversation += 'one for you\n';
//         if (n === 1) {
//             conversation += 'none for me.';
//         }
//     }

//     n--;
// }
// console.log(conversation);

//FOR LOOP
//create array and pull specific items

//create array

// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
// const max = ratings.length;
// let count = 0;
// //create loop
// for (let i = 0; i < max; i++) {
//     const stars = ratings[i];
//     if (stars === 5) {
//         count++;
//         //console.log(stars);
//     }    
// }
// if (count >= 6) {
//     console.log('This is a featured product!');
// } else {
//     console.log('Sorry, no homepage for you.');
// }

//Summing Arrays

// const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
// const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];

// const max = c1Votes.length; //c2Votes.length is the same
// let c1Total = 0;
// let c2Total = 0;

// for (let i = 0; i < max; i++) {
//     //console.log(c1Votes[i]);
//     c1Total += c1Votes[i];
//     //console.log(c2Votes[i]); 
//     c2Total += c2Votes[i];
// }

// if (c1Total > c2Total) {
//     console.log('Candidate 1 is the winnder!');
// } else if (c2Total > c1Total) {
//     console.log('Candidate 2 is the winnder!');
// } else {
//     console.log('Time for a run-off. It was a tie!');
// }

//SEARCHING 

// const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
// const tables = [3, 1, 1, 2, 3, 2];


// function indexFor(guestToFind) {
//     let foundIndex = -1;
//     for (let i = 0; i < guests.length; i++) {
//         if (guests[i] === guestToFind) {
//             foundIndex = i;
//             break;
//         }
//     }
//     return foundIndex;
// }

// function printTableFor(guestToFind) {
//     const index = indexFor(guestToFind);
//     const guestTable = tables[index];
//     if (index !== -1) {
//         console.log(`${guestToFind} sits at table ${guestTable}`);
//     } else {
//         console.log(`${guestToFind} is not on the guest list.`);
//     }
// }

// printTableFor('Mustard');
// printTableFor('Batman');

//FINDING A SUBSTRING

// const HEALTHY = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample1 = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample2 = 'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC';

// let sequence = [];
// for (let i = 0; i < sample2.length; i++) {
//     const letter = sample2[i];
//     if (letter === 'Z') {
//         sequence.push(HEALTHY[i]);
//     } else {
//             sequence.push(letter);
//     }
// } 
// sequence = sequence.join('');

//IN AN OBJECT 

// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// const max = ratings.length;
// const ratingsCount = {};

// for (let i=0; i<max; i++) {
//     const stars = ratings[i];
//     // Check if we already have the key in the ratingsCount object.
//     if (ratingsCount[stars]) {
//          // If so, we increment the value.
//         ratingsCount[stars]++ 
//     }
//     else {
//         // If not, add a new key to ratingsCount and set the value to 1
//         ratingsCount[stars] = 1
//     }
// }
// console.log(ratingsCount)


//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = nums[0];

// for (let i=1; i<nums.length; i++) {
//   result = result + nums[i];	
// }
// console.log(result)

