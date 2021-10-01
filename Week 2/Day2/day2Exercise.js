//                              JS 101 WARM-up
//1
firstName = 'Josh';
//2
console.log(`${firstName} is cool.`);
//3
const daysUntilChristmas = 25 - 1;
console.log(`Days until Christmas, ${daysUntilChristmas}`);
const frontTeeth = 'my two front teeth';
//4
console.log(`All I want for Christmas is ${frontTeeth}`);
//5
function decemberCountdown(date, today) {
    return date - today;
}
console.log(decemberCountdown(31, 1))

//                              JS 101 Explore Objects

const josh = {
    fullName: 'Josh Evans',
    age: 29,
    faveColor: 'gray',
    likesPizza: true,
}
//Create a new variable and set it eqal to the FaveColor
const colorProp = josh.faveColor;
console.log(colorProp);

//Change fullName
josh.fullName = 'Evans';
console.log(josh.fullName);

//delete likesPizza
delete josh.likesPizza;
console.log(josh)

//added new boolean
josh.likesCookes = true;
console.log(`Josh likes cookies is ${josh.likesCookes}.`);

//                              JS 101 Explore Arrays
const digitalCraftsCrew = ['Jamie', 'Dr. Vicki', 'Jada', 'Dee', 'Ernesto', 'Robbie'];
console.log(digitalCraftsCrew.length)
digitalCraftsCrew.push('Prof Roberts')
console.log(digitalCraftsCrew)
digitalCraftsCrew.pop()
console.log(digitalCraftsCrew)
console.log(digitalCraftsCrew.indexOf('Dr. Vicki'))

//                              JS 101 Practice Exercises
//1
function makeAnumber() {
    myNum = 7;
    return myNum;
}
//2
function makeAnInteger() {
    myInt = 13;
    return myInt;
}
//3
function makeAfloat() {
    myFloat = 17.45;
    return myFloat;
}
//4
function makeZero() {
    zilch = 0;
    return zilch;
}
//5
function makeNothing() {
    huh;
    return huh;
}
//6
function makeBoolean() {
    myBool = true;
    return myBool;
}
//7
function makeTrue() {
    yep = true;
    return yep;
}
//8 
function makeFalse() {
    nope = false;
    return nope;
}
//9
function makeNull() {
    nothingMuch = null;
    return nothingMuch;
}
//10
function helloWorld() {
    return 'Hello, world!';
}
//11
function helloName(name) {
    return 'Hello, ' + name + '!';
}
//12
function abstractLength() {
  const tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
    'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
    'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
    'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'
    
        return tarPitAbstract.length;
}
//13
function makeLoud() {
    var chorus = 'Who let the dogs out?';
    return chorus.toUpperCase();
}
//14
function makeQuiest(str) {
    return str.toLowerCase;
}
//15
function add99(i) {
   return i + 99;
}
//16
function add(a, b) {
    return a + b;
}
//17
function subtract(c, d) {
    return c - d;
}
//18
function multiply(e, f) {
    return e * f;
}
//19
function divide(g, h) {
    return g / h;
}
//20
function mod(i, j) {
    return i % j;
}
//21
function threeFruits(fruits) {
    fruits = ['Apple', 'Banana', 'Cherry'];
    return fruits;
}
//22
function multipleTypes(diverseArray) {
    diverseArray = ['Skateboards', null, 8.75, 'Eiffel Tower', 44, 7, true, null];
    return diverseArray
}
//23
function indexAccess() {
    people = ['Josh', 'Katie', 'Jim', 'Todd', 'Alex', 'Steve'];
    return people[2];
}
//24
function useLength() {
    arr = ['a', 'b', 'c'];
    return arr.length;
}
//25
function usePush() {
    arr = ['a', 'b', 'c'];
    arr.push('d');
    return arr;
}
//26
function useIndexOf() {
    arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T'];
    return arr.indexOf('T');
}

//27
function useJoin() {
    arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    return arr.join('-');
}