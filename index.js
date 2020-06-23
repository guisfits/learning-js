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

// ! Number

// ? Writing a number

const oneMillion = 1e9; // 1.000.000.000
const sevenMillions = 7.123e9; // 7.123.000.000

const divideByThree = 1e-3; // 0.001
const divideBySix = 7.123e-6 // 0.000007123

// ? Hex, binary and octal numbers

const hexa = 0xff;
const binary = 0b11111111; // binary form of 255
const octa = 0o377; // octal form of 255

// ? toString

const num = 256;
num.toString(2); //  11111111
num.toString(16); //  ff
123456..toString(36); // 2n9c

// ? toFixed

(1.234).toFixed(); // "1.23" as string!

// ? Rounding

Math.floor(num) //rount down
Math.ceil(num) //rount up
Math.round(num) //round up where >= 5, down when is < 5
Math.trunc(num) // remove nuumbers after .

// ? Imprecise calculations

0.1 + 0.2 == 0.3  // false

const sum = 0.1 + 0.2;
sum.toFixed(2); // 0.30
9999999999999999 // is 10000000000000000

// ? isFinite and isNaN

isNaN(NaN) // true
NaN === NaN // false

isFinite("15") // true
isFinite("str") // false, because a special value: NaN
isFinite(Infinity) // false

// ? parsing

// * Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
+"100px" // NaN

// * parseInt and parseFloat will “read” a number from a string until they can’t. In case of an error, the gathered number is returned
parseInt("100px") // 100

parseInt("a123") // NaN, the first symbol stops the process

// ? Other Math functions

Math.randon() // return a random number from 0 to 1 (not including 1)
Math.max(1, 5, -10) // 5
Math.min(1, 5, -10) // -10
