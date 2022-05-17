/* CONVERTS HUMAN YEARS TO DOG YEARS */

// Your age in human years
const myAge = 32;
// Dog age equivalent of the first two human years
let earlyYears = 2;
earlyYears *= 10;
// Subtracting earlyYears from myAge
let laterYears = myAge - 2;
// Calcualation for dog's age after 2
laterYears *= 4;
// My Age in Dog Years
let myAgeInDogYears = earlyYears + laterYears;
// My Name
myName = 'Sean'
//Name in all lowercase letters
myNameInLowerCase = myName.toLowerCase();

// Statement that display your name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);