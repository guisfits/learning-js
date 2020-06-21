// * USE "BETTER COMMENTS" VS CODE`S EXTENSION

// ! Code structure

"use strict"; // ? enable modern JS features, if we using class/modules the use strict is by default
const itsWords = 1; // ? semicolon; is not required, but is wanted in many cases to prevent unexpected errors

// ! Variables

let thisCanBeChange = "a";
const thisCannotBeChange = "constant";
var IamTheOldOne = "Say hello to grandpa";

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
const str1 = "1",
  str2 = "2",
  str3 = `${3}`;

// ? symbol type is used to create unique identifies for objects

const myTypeIsNumber = typeof integerOrFloat;
const myTypeIsString = typeof str1;

// ! Type Conversions

// ? To convert some variable to other type use the function
const isBool = Boolean("true");
const isNumber = Number("123");
const isString = String(123);

const three = "1" + 2;
const falsy1 = 0,
  falsy2 = null,
  falsy3 = undefined,
  falsy4 = NaN;
const truly1 = " ",
  truly2 = "0";

// ! Operators

const unaryAdd = +1;
const unarySubtraction = -1;
const add = 1 + 2;
const subtraction = 2 - 1;
const multiplication = 5 * 1; // is 1
const reminder = 3 / 2;
const exponentiation = 5 ** 2; // is 25

const nowIamANumber = +"1";
const alwaysNegativeTwo = -2;
console.log(+alwaysNegativeTwo); // print -2;
const isSeven = 1 + 2 * 3;

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

// ! Objects

const user = {
    id: 1,
    name: "John",
    isFavorite: true,
};

delete user.isFavorite;

const nameInUser = "name" in user; // true

user.id;
user["name"];
const userKey = "isFavorite"
user[userKey];

for(let key in user)
    console.log(key);

// ! This

function whoTheHellAreYou() {
    console.log(this.name);
}

const heisenberg = {
    name: "Heisenberg"
};

const walterWhite = {
    name: "Walter White"
};

heisenberg.sayMyName = whoTheHellAreYou;
walterWhite.sayMyName = whoTheHellAreYou;

// ! Comparison

const strLessThan = "A" < "B";
const strGreaterThan = "B" > "A";
const caseMatters = "a" > "A";

const stringConversion = "1" == 1;
const booleanConversion = false == 0;
const undefinedNullTrue = undefined == null;
const nullAndZeroComparison = null == 0; // false
const undefinedNullTrue = null >= 0; // true

/*
? Comparison operators return a boolean value.
? Strings are compared letter-by-letter in the “dictionary” order.
? When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
? The values null and undefined equal == each other and do not equal any other value.
? Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
*/

// ! Conditional

// ? We can also pass a pre-evaluated boolean value to if, like this:

const trulyOrFalsyCondition = year == 2015;
if (trulyOrFalsyCondition) {
}

// ! Nullish coalescing Operator

const isTwo = null ?? 2; // ? The precedence of ?? is low, so use () on complex expressions

// ! new

/*
* When a function is executed with new, it does the following steps:
* 1. A new empty object is created and assigned to this.
* 2. The function body executes. Usually it modifies this, adds new properties to it.
* 3. The value of this is returned.
*/

function User(name) {
    // this = {};  (implicitly)
    this.name = name;
    this.isAdmin = false;
    // return this;  (implicitly)
}

// ! Optional chaining: ?.

let obj = null;
obj?.prop // * returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] // * returns obj[prop] if obj exists, otherwise undefined.
obj?.method() // * calls obj.method() if obj exists, otherwise returns undefined.

// ! Symbols

// * Symbol is a primitive type for unique identifiers.

// both are different
const sym1 = Symbol("a");
const sym2 = Symbol("a");

// Get by global
const value = Symbol.for("globa-symbol");
