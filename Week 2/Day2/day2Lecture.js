//Creating a name string
const friendInfo = {
    fullName: 'Alan Turing',
    cell: '6017576',
    birthday: 'June 23',
}
console.log(friendInfo.fullName);

//Creating a superhero object
const superhero = {
    name: 'Wonder Woman',
    alias: 'Diana Prince',
    bracelets: 2,
    lassos: 1
}
//call object before changes
//console.log(superhero)

//updating alais in superhero
superhero.alias = 'Princess Diana of Themyscira'

//debug alias
//console.log(superhero);

//adding a new value to suerphero
superhero.hometown = 'Themyscira'

//created variable to call object key
const wonderWomanLassos = superhero.lassos;

//debug hometown
//console.log(superhero);

//delete value 
delete superhero.lassos;

console.log(superhero);
console.log(wonderWomanLassos);

//arrays
const todos = ['pet the cat',
               'go to work',
               'shop for groceries',
               'go home',
               'feed the cat']
//Call an array position
const firstItem = todos[2]
console.log(firstItem);

//Add items to todos array
todos.push('go to sleep')

//Remove last item from todos array
const theLastItem = todos.pop();

//Count array items
const countArrayItems = todos.length
console.log(`I have ${countArrayItems} things to do today.`);

//Look at my array
console.log(todos)

//Remove from a specific index
todos.splice(2,1);
//This deletes the 3rd position(which is 'shop for groceries') due to the positional location
// 2 is where it starts and it only deletes 1 

console.log(todos)

//Join string
const todoString = todos.join('!\n'); // ! adds a !, \n adds a linebreak

//Call the Join
console.log(todoString)

//Create a string 
const todoString1 = 'Pet the cat! Go to work! Shop for groceries! Go home! Feed the cat';
//Splitting string
const todos1 = todoString1.split('! ');
//debugging todos
console.log(todos1)

//BOOLEANS
const todos2 = ['pet the cat', 'feed the cat'];

function printTodoCount(arrayCount){
    numberCount = arrayCount.length;
    return numberCount
}

if (printTodoCount(todos2) == 2) {
    console.log(booleanCount = true);

}
else {
    console.log(booleanCount = false);
}