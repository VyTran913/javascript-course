console.log('Hello World');

let greeting = 'Hello World';
console.log(greeting.toUpperCase());

/*
let myName = 'Vy';
let myCity = 'Tokyo';

//String Interpolation

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//String Concatenation

console.log('My name is' + ' ' + myName + '.' + ' ' + 'My favorite city is' + ' ' + myCity + '.');

/*Typeof Operator
Using to keep track of the data type in the variables in the programe.


let myBirthday = 'November 18';
console.log(typeof myBirthday);
myBirthday = 11 - 18;
console.log(typeof myBirthday);
let doYouLoveMe = true;
console.log(typeof doYouLoveMe);

//Exercies

/*
const kelvin = 293;
console.log(kelvin);
const celsius = kelvin - 273;
console.log(celsius);
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`);

const newKelvin = 300;
const newCelsius = newKelvin - 270;
let newton = newCelsius * (33 / 100);
newton = Math.ceil(newton);
console.log(newKelvin);
console.log(newCelsius);
console.log(`the temperature is ${newton} degrees Newton.`);
*/

// Exercise for If/ else if.

/*let userName = 'MoonLunar';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
const userQuestion = 'Could I get advanced in my career soon ?';
console.log(`${userName} has asked - ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 0) {
  eightBall = ('It is certiain');
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}

console.log(randomNumber);
console.log(`Magic Eight Ball says - ${eightBall}`);


// Switch keyword

let askPerson = 'OGbear';
askPerson ? console.log(`Hello ${askPerson}!`) : console.log('Hello!');
const askQuestion = ' Will I get stronger by going in to the gym, everyday?'
console.log(`${askPerson} has asked the question - ${askQuestion}`);
let newRandomNumber = Math.floor(Math.random() * 8);
let VyMommy = '';
switch (newRandomNumber) {
  case 0:
    VyMommy = 'Not gonna Happennn';
    break;
  case 1:
    VyMommy = 'Let me think about it';
    break;
  case 2:
    VyMommy = 'Signs point to yes';
    break;
  case 3:
    VyMommy = 'Do not count on it';
    break;
  case 4:
    VyMommy = 'Do not know yet, Try again'
    break;
  case 5:
    VyMommy = 'Need to try harder'
    break;
  case 6:
    VyMommy = 'My sources say no'
    break;
  case 7:
    VyMommy = 'Maybe'
    break;
}
console.log(newRandomNumber);
console.log(`VyMommy has answered - ${VyMommy}`);
*/

//Race

/*let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = false;
let runnerAge = 18;
if (earlyRunner && runnerAge > 18) {
  raceNumber += 1000;
}
if (earlyRunner && runnerAge > 18) {
  console.log(`Your race will start at 9:30 am - Your number is: ${raceNumber}!`);
} else if (!earlyRunner && runnerAge > 18) {
  console.log(`Your race time will be at 11:00 am - Your number is: ${raceNumber}!`);
} else if (runnerAge < 18) {
  console.log(`Your race will begin at 12:30pm - Your number is: ${raceNumber}!`);
} else {
  console.log('Please check the registration Desk.')
} */

//FUNCTION

/*function getReminder() {
  console.log('Water the plants.');
}
getReminder();

function greetInSpanish() {
  console.log('Buenas tardes');
}
greetInSpanish();

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();

function sayThankYou(name) {
  console.log('Thank you for your patience, ' + name + '! I appreciate you.');
}
sayThankYou('Vy');

//
function makeShoppingList(
  item1 = 'milk',
  item2 = 'bread',
  item3 = 'eggs',
) {
  console.log(`Remmember to buy ${item1}.`);
  console.log(`Remmember to buy ${item2}!`);
  console.log(`Remmember to buy ${item3}.`);
}
makeShoppingList();

//
function shoppingList(eggs, milk, bread, strawberry) {
  return eggs + milk + bread + strawberry;
}
const itemCount = shoppingList(10, 2, 1, 1);
console.log(itemCount); */

/*
function monitorNeed(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorNeed(rows, columns) * 150;
}
const totalCost = costOfMonitors(6, 8);
console.log(totalCost);
*/

