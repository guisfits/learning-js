// * USE "BETTER COMMENTS" VS CODE`S EXTENSION

// ! Code structure

"use strict"; // ? enable modern JS features, if we using class/modules the use strict is by default
const itsWords = 1 // ? semicolon; is not required, but is wanted in many cases to prevent unexpected errors

// ! Variables

let thisCanBeChange = "a";
const thisCannotBeChange = "constant";
var IamTheOldOne = "Say hello to grandpa"

const aA1_$ = "I'm a valid name";
const HARD_CODED_VALUE = "IS_BETTER_TO_FOLLOW_THIS_CONVENTION";

// ! Data-Types

const biggestNumber = Infinity;
const smallestNumber = -Infinity;
const integerOrFloat = 1.0;
const nAn = "abc" / 2; // mathematical error
const bigInteger = 123n;
const isBoolean = true;
const empty = null;
let undefinedValue;
const mrsObject = {};
const str1 = "1", str2 = '2', str3 = `${3}`;

// ? symbol type is used to create unique identifies for objects

const myTypeIsNumber = typeof integerOrFloat;
const myTypeIsString = typeof(str1);

// ! Type Conversions

// ? To convert some variable to other type use the function
const isBool = Boolean("true");
const isNumber = Number("123");
const isString = String(123);

const three = "1" + 2;
const falsy1 = 0, falsy2 = null, falsy3 = undefined, falsy4 = NaN; 
const truly1 = " ", truly2 = "0";

// ! Operators

const add = 1 + 2;
const subtraction = 2 - 1;
const multiplication = 5 * 1; // is 1
const reminder = 3 / 2;
const exponentiation = 5 ** 2; // is 25

const nowIamANumber = +"1";
const alwaysNegativeTwo = -2;
console.log(+alwaysNegativeTwo) // print -2;

console.log(1 + 2 * 3);

/*
"" + 1 + 0 = "10" 
"" - 1 + 0 = -1 
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9  " + 5 = " -9  5" 
" -9  " - 5 = -14 
null + 1 = 1 
undefined + 1 = NaN 
" \t \n" - 2 = -2 
*/
