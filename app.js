// How do we assign a value to a variable?
let exampleVar = 200;

// How do we change the value of a variable?
exampleVar = 300;

// How do we assign an existing variable to a new variable?
let newVar = exampleVar;

// Remind me, what are declare, assign, and define?
let declareVar;
declareVar = 20;
let defineVar = 10;

// What is pseudocoding and why should you do it?
// Pseudocoding is creating an outline of what you program will do without worrying about the syntax,
// and it helps you jot down the structure of the program without worrying about the specifics of the code

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// I would say about 50% of the time should be spent thinking over the problem, so that you have time to both catch any large scale
// issues with your program and catch smaller issues that show up while writing the code

// Create a variable called firstVariable
let firstVariable;

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 20;

// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = "Hello Again World";

// What is the value of firstVariable?
console.log(firstVariable);

// Create a variable called yourName and set it equal to your name as a string.
// Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Aidan Krell";
yourName = "Hello, my name is " + yourName;

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
if(animal === "cow"){
    console.log("mooooo");
} else{
    console.log("Hey! You're not a cow.");
}

// Make a variable that holds a person's age; be semantic
let personsAge = 16;

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if(personsAge >= 16){
    console.log("Here are the keys!");
} else{
    console.log("Sorry, you're too young.");
}

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++){
    console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 4000; i = i + 3){
    console.log(i);
}

// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + "<-- is an even number");
    } else{
        console.log(i);
    }
}

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages
for(let i = 0; i <= 100; i++){
    if(i > 0 && i % 5 === 0){
        console.log(`I found a ${i}. High five!`);
    }
    if(i > 0 && i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for(let i = 1; i <= 10; i++){
    bank_account = bank_account + i;
}

// Check your work! Your bank_account should have $55 in it.
console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0;
for(let i = 1; i <= 100; i++){
    bank_account = bank_account + i * 2;
}

// Check your work! Your bank_account should have $10,100 in it.
console.log(bank_account);

// What are the things in an array called?
// Elements

// Do Arrays guarantee those things will be in order?
// No, the array will contain each element in the order it receives them

// What real-life thing could you model with an array?
// You can model any kind of list with an array, such as a list of groceries

// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["The only thing we have to fear is fear itself.", "Life is a journey, not a destination.", "To be, or not to be, that is the question."];

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
let firstElement = randomThings[0];

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
let thirdElement = ourClass[2];

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass[5] = "Cloud City";

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];

// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray[4] = "Aegon";
myArray[5] = "Hello World";

// Remove the 5 from the beginning of the array.
myArray.shift();

// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array.
myArray.pop();

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse();
// The array is mutated, meaning the original array is altered by .reverse()
// .reverse() returns a reversed copy of the array

// Create a variable that contains an integer.
let integerVar = 7;

// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
if(integerVar < 100){
    console.log("little number");
} else{
    console.log("big number");
}

// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
if(integerVar < 5){
    console.log("little number");
} else if(integerVar > 10){
    console.log("big number");
} else{
    console.log("monkey");
}

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
let thomsShirt = thomsCloset[0][0];

// In the same way, access one item from Thom's pants array.
let thomsPants = thomsCloset[1][1];

// Access one item from Thom's accessories array.
let thomsAccessory = thomsCloset[2][1];

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants} and ${thomsAccessory}!`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
function printGreeting(name){
    return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(name){
    return name + " is cool";
}
console.log(printCool("Captain Reynolds"));

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(number){
    return number * number * number;
}
console.log(calculateCube(5));

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(char){
    let vowel = false;
    char = char.toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        vowel = true;
    }
    return vowel;
}
console.log(isVowel("a"));

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(string1, string2){
    const numArray = [string1.length, string2.length];
    return numArray;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings.
// The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(stringArray){
    const numArray = [];
    for(let i in stringArray){
        numArray[i] = stringArray[i].length;
    }
    return numArray;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned.
// If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    } else if(num2 >= num1 && num2 >= num3){
        return num2;
    } else{
        return num3;
    }
}
console.log(maxOfThree(6, 9, 1));

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array.
// In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(stringArray){
    let longestWord = stringArray[0];
    for(let i in stringArray){
        if(stringArray[i].length > longestWord.length){
            longestWord = stringArray[i];
        }
    }
    return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
const user = {
    name: "John Doe",
    email: "example@mail.com",
    age: 30,
    purchased:[]
};

// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "johndoe@website.biz";

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++;

// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Townsville";

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Metropolis",
    purchased: []
};

// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
user.friend.age = 55;

// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");

// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte");

// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for(let i of user.purchased){
    console.log(i);
}

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for(let i of user.friend.purchased){
    console.log(i);
}

// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
function updateUser(){
    user.age++;
    user.name = user.name.toUpperCase();
}

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person,
// and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
function oldAndLoud(person){
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user);