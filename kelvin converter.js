/* CONVERTS KELVIN TO CELSIUS, FAHRENHEIT, AND NEWTON */

// Temperature in degrees Kelvin
const kelvin = 299;
// Converting Kelvin into Celsius
const celsius = kelvin - 273;
// Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding Fahrenheit down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);
// Converting Celsius to Newton temperature;
let newton = celsius * (33/100);
// Rounding Newton down to the nearest whole number
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);

